// Seeded PRNG so the hero scene renders identically on server and client.
function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Natural-looking mountain ridge via midpoint displacement. Returns the closed
// shape and the open top edge (used for the sunlit rim).
function ridgePath(baseY: number, height: number, seed: number, roughness = 0.52) {
  const random = seededRandom(seed);
  const segments = 128;
  const ys = new Array<number>(segments + 1).fill(0);
  ys[0] = random();
  ys[segments] = random();

  let displacement = 1;
  for (let step = segments; step > 1; step /= 2) {
    for (let i = step / 2; i < segments; i += step) {
      ys[i] = (ys[i - step / 2] + ys[i + step / 2]) / 2 + (random() * 2 - 1) * displacement;
    }
    displacement *= roughness;
  }

  const min = Math.min(...ys);
  const max = Math.max(...ys);
  const points = ys.map((value, i) => {
    const x = (i / segments) * 1440;
    const y = baseY - ((value - min) / (max - min)) * height;
    return `${x.toFixed(1)} ${y.toFixed(1)}`;
  });

  const edge = `M${points.join(" L")}`;
  return { edge, shape: `${edge} L1440 900 L0 900 Z` };
}

const heroRidges = [
  { ...ridgePath(655, 115, 7), fill: "url(#ix-ridge-far)", rim: 0.55 },
  { ...ridgePath(712, 135, 21), fill: "url(#ix-ridge-mid)", rim: 0.4 },
  { ...ridgePath(788, 140, 42), fill: "url(#ix-ridge-near)", rim: 0.28 },
  { ...ridgePath(870, 110, 99), fill: "url(#ix-ridge-front)", rim: 0.16 },
];

const heroStars = (() => {
  const random = seededRandom(5);
  return Array.from({ length: 46 }, () => ({
    x: random() * 1440,
    y: random() * 300,
    r: 0.6 + random() * 1.1,
    o: 0.25 + random() * 0.55,
  }));
})();

export function HeroScene() {
  return (
    <svg
      aria-hidden="true"
      className="ix-hero-scene"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 900"
    >
      <defs>
        <linearGradient id="ix-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0d1a3a" />
          <stop offset="0.38" stopColor="#30528a" />
          <stop offset="0.58" stopColor="#7d8fb8" />
          <stop offset="0.7" stopColor="#e4b293" />
          <stop offset="0.8" stopColor="#ffd6a3" />
          <stop offset="1" stopColor="#ffe3bd" />
        </linearGradient>
        <radialGradient cx="0.5" cy="0.66" id="ix-sun-glow" r="0.5">
          <stop offset="0" stopColor="#fff3dc" stopOpacity="0.9" />
          <stop offset="0.25" stopColor="#ffcf9a" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ffcf9a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ix-ridge-far" x1="0" x2="0" y1="0.4" y2="1">
          <stop offset="0" stopColor="#98a6c6" />
          <stop offset="1" stopColor="#c6c9d8" />
        </linearGradient>
        <linearGradient id="ix-ridge-mid" x1="0" x2="0" y1="0.5" y2="1">
          <stop offset="0" stopColor="#5d7099" />
          <stop offset="1" stopColor="#8794b4" />
        </linearGradient>
        <linearGradient id="ix-ridge-near" x1="0" x2="0" y1="0.6" y2="1">
          <stop offset="0" stopColor="#2f4068" />
          <stop offset="1" stopColor="#47567d" />
        </linearGradient>
        <linearGradient id="ix-ridge-front" x1="0" x2="0" y1="0.7" y2="1">
          <stop offset="0" stopColor="#141d36" />
          <stop offset="1" stopColor="#0a1022" />
        </linearGradient>
        {/* Sunlit rim: bright near the sun at the centre, fading to the edges. */}
        <linearGradient id="ix-rim" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#ffe2bf" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffe2bf" stopOpacity="1" />
          <stop offset="1" stopColor="#ffe2bf" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ix-fog" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#e9edf6" stopOpacity="0" />
          <stop offset="0.6" stopColor="#e9edf6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#e9edf6" stopOpacity="0" />
        </linearGradient>
        <filter id="ix-soft" height="300%" width="140%" x="-20%" y="-100%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="ix-glow" height="400%" width="400%" x="-150%" y="-150%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <rect fill="url(#ix-sky)" height="900" width="1440" />

      <g className="ix-hero-stars">
        {heroStars.map((star, index) => (
          <circle cx={star.x} cy={star.y} fill="#fff" key={index} opacity={star.o} r={star.r} />
        ))}
      </g>

      <rect fill="url(#ix-sun-glow)" height="900" width="1440" />
      <circle cx="720" cy="575" fill="#fff6e4" filter="url(#ix-glow)" opacity="0.9" r="70" />
      <circle cx="720" cy="575" fill="#fffaf0" r="30" />

      <g className="ix-hero-clouds" filter="url(#ix-soft)">
        <ellipse cx="1140" cy="150" fill="#e8ecf6" opacity="0.14" rx="360" ry="5" />
        <ellipse cx="1020" cy="520" fill="#ffe6d0" opacity="0.3" rx="300" ry="5" />
        <ellipse cx="380" cy="540" fill="#ffe6d0" opacity="0.24" rx="260" ry="4" />
      </g>

      {heroRidges.map((ridge, index) => (
        <g key={ridge.fill}>
          <path d={ridge.shape} fill={ridge.fill} />
          <path
            d={ridge.edge}
            fill="none"
            opacity={ridge.rim}
            stroke="url(#ix-rim)"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          {index < heroRidges.length - 1 ? (
            <rect
              className="ix-hero-mist"
              fill="url(#ix-fog)"
              height="110"
              opacity={0.75 - index * 0.2}
              width="1640"
              x="-100"
              y={[630, 700, 778][index]}
            />
          ) : null}
        </g>
      ))}
    </svg>
  );
}
