import Image, { type StaticImageData } from "next/image";
import spotFixaiImage from "../../images/ai/spot-fixai.jpg";
import spotSamagraImage from "../../images/ai/spot-samagra.jpg";
import spotSchoolImage from "../../images/ai/spot-school.jpg";
import spotEyConstructionImage from "../../images/ai/spot-ey-construction.jpg";
import heroEyConstructionImage from "../../images/ai/hero-ey-construction.jpg";
import spotBillingPointImage from "../../images/ai/spot-billingpoint.jpg";
import craftAiImage from "../../images/ai/craft-ai.jpg";
import craftWebImage from "../../images/ai/craft-web.jpg";
import craftMobileImage from "../../images/ai/craft-mobile.jpg";
import actionCustomImage from "../../images/ai/action-custom.jpg";
import actionAutomationImage from "../../images/ai/action-automation.jpg";
import actionBackendImage from "../../images/ai/action-backend.jpg";
import actionDataImage from "../../images/ai/action-data.jpg";
import stepStrategyImage from "../../images/ai/step-strategy.jpg";
import stepBuildImage from "../../images/ai/step-build.jpg";
import stepLaunchImage from "../../images/ai/step-launch.jpg";
import ctaTeamImage from "../../images/ai/cta-team.jpg";

// Generated artwork for each card slot, keyed by the "art" value in site-content.json.
export const artImages: Record<string, StaticImageData> = {
  "spot-fixai": spotFixaiImage,
  "spot-samagra": spotSamagraImage,
  "spot-school": spotSchoolImage,
  "spot-ey-construction": spotEyConstructionImage,
  "hero-ey-construction": heroEyConstructionImage,
  "spot-billingpoint": spotBillingPointImage,
  "craft-ai": craftAiImage,
  "craft-web": craftWebImage,
  "craft-mobile": craftMobileImage,
  "action-custom": actionCustomImage,
  "action-automation": actionAutomationImage,
  "action-backend": actionBackendImage,
  "action-data": actionDataImage,
  "step-strategy": stepStrategyImage,
  "step-build": stepBuildImage,
  "step-launch": stepLaunchImage,
  "cta-team": ctaTeamImage,
};

const cssArtVariants = new Set(["ribbon", "glass", "flame", "cubes", "wave", "halo", "silk"]);

// Card artwork: the generated image for this slot, or an abstract CSS tile
// (see .ix-art-* in redesign.css) when no image exists yet.
export function ArtTile({
  variant,
  className = "",
  priority = false,
  sizes = "(max-width: 760px) 100vw, 520px",
}: {
  variant: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const image = artImages[variant];

  if (image) {
    return (
      <span aria-hidden="true" className={`ix-art ix-art-photo ${className}`}>
        <Image alt="" fill placeholder="blur" priority={priority} sizes={sizes} src={image} />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`ix-art ix-art-${cssArtVariants.has(variant) ? variant : "cubes"} ${className}`}
    >
      <i />
      <i />
    </span>
  );
}
