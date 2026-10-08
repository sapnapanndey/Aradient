import type { ButtonHTMLAttributes } from "react";

export function SvgIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const sharedProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "badge-star":
      return (
        <svg {...sharedProps}>
          <path
            d="M12 3.5L14.2 8.3L19 10.5L14.2 12.7L12 17.5L9.8 12.7L5 10.5L9.8 8.3L12 3.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "gear":
      return (
        <svg {...sharedProps}>
          <path
            d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M19 12A7 7 0 0 0 18.9 10.8L21 9.2L18.8 5.4L16.2 6.3A7.5 7.5 0 0 0 14.1 5.1L13.7 2.3H10.3L9.9 5.1A7.5 7.5 0 0 0 7.8 6.3L5.2 5.4L3 9.2L5.1 10.8A7 7 0 0 0 5 12C5 12.4 5 12.8 5.1 13.2L3 14.8L5.2 18.6L7.8 17.7C8.4 18.2 9.1 18.6 9.9 18.9L10.3 21.7H13.7L14.1 18.9C14.9 18.6 15.6 18.2 16.2 17.7L18.8 18.6L21 14.8L18.9 13.2C19 12.8 19 12.4 19 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "rocket":
      return (
        <svg {...sharedProps}>
          <path
            d="M14.5 4.5C17.8 5 19 7.8 19.5 11.1L14.2 16.4C10.9 15.9 8.1 14.7 7.6 11.4L14.5 4.5Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M14.5 4.5C17.8 5 19 7.8 19.5 11.1L14.2 16.4C10.9 15.9 8.1 14.7 7.6 11.4L14.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="15.3" cy="8.7" r="1.6" fill="#fff" />
          <path d="M7.8 12.2L4.6 13.2L6.1 9.9L9.1 10.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.8 14.9L10.9 18L14.1 16.5L13.3 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "brain":
      return (
        <svg {...sharedProps}>
          <path
            d="M9 5.2A3.2 3.2 0 0 0 5.8 8.4C4.2 8.9 3.2 10.5 3.5 12.2C3.8 13.9 5.2 15.1 6.8 15.2C7.1 17.1 8.7 18.5 10.7 18.5C12.1 18.5 13.3 17.8 14 16.8C14.7 17.8 15.9 18.5 17.3 18.5C19.3 18.5 20.9 17.1 21.2 15.2C22.8 15.1 24.2 13.9 24.5 12.2C24.8 10.5 23.8 8.9 22.2 8.4A3.2 3.2 0 0 0 19 5.2C17.9 5.2 16.9 5.7 16.2 6.5C15.6 5.1 14.2 4 12.5 4C10.8 4 9.4 5.1 8.8 6.5C8.1 5.7 10.1 5.2 9 5.2Z"
            transform="translate(-2 -1)"
            fill="currentColor"
            opacity="0.92"
          />
          <path
            d="M9 8.3C10.4 8.3 11.5 9.4 11.5 10.8V17.3M15 8.3C13.6 8.3 12.5 9.4 12.5 10.8V17.3M8.2 11.8H12M12.5 8V6.6M16.1 11.8H12.5"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg {...sharedProps}>
          <path d="M13.4 2L6.5 12H11L10.6 22L17.5 12H13L13.4 2Z" fill="currentColor" />
        </svg>
      );
    case "bot":
      return (
        <svg {...sharedProps}>
          <rect x="5" y="7" width="14" height="11" rx="4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 4V7M8 12H8.01M16 12H16.01M9 15.5H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "puzzle":
      return (
        <svg {...sharedProps}>
          <path
            d="M8 4.5H11.2C11.2 5.8 12.2 6.8 13.5 6.8C14.8 6.8 15.8 5.8 15.8 4.5H19.5V8.2C18.2 8.2 17.2 9.2 17.2 10.5C17.2 11.8 18.2 12.8 19.5 12.8V19.5H15.8C15.8 18.2 14.8 17.2 13.5 17.2C12.2 17.2 11.2 18.2 11.2 19.5H4.5V12.8C5.8 12.8 6.8 11.8 6.8 10.5C6.8 9.2 5.8 8.2 4.5 8.2V4.5H8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "idea":
      return (
        <svg {...sharedProps}>
          <path d="M12 4.5A5.5 5.5 0 0 0 8.3 14.1C9 14.8 9.5 15.5 9.8 16.3H14.2C14.5 15.5 15 14.8 15.7 14.1A5.5 5.5 0 0 0 12 4.5Z" fill="currentColor" />
          <path d="M10 18.3H14M10.5 20.4H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "tools":
      return (
        <svg {...sharedProps}>
          <path d="M14.8 4.5L19.5 9.2L17.2 11.5L12.5 6.8L14.8 4.5Z" fill="currentColor" />
          <path d="M5 19L11 13M8.8 5.2A3.2 3.2 0 0 0 5.2 8.8L7.2 10.8L4.8 13.2L2.8 11.2A3.2 3.2 0 0 0 6.4 14.8L14.8 6.4A3.2 3.2 0 0 0 8.8 5.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code":
      return (
        <svg {...sharedProps}>
          <path d="M8.5 7L4 12L8.5 17M15.5 7L20 12L15.5 17M13.5 5L10.5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "automation":
      return (
        <svg {...sharedProps}>
          <path d="M7 7C8.7 5.3 11.4 5.3 13.1 7L14 7.9L15 7C16.7 5.3 19.4 5.3 21.1 7C22.8 8.7 22.8 11.4 21.1 13.1L20.2 14L21.1 15C22.8 16.7 22.8 19.4 21.1 21.1C19.4 22.8 16.7 22.8 15 21.1L14 20.2L13.1 21.1C11.4 22.8 8.7 22.8 7 21.1C5.3 19.4 5.3 16.7 7 15L7.9 14L7 13.1C5.3 11.4 5.3 8.7 7 7Z"
            transform="translate(-2 -2)"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...sharedProps}>
          <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...sharedProps}>
          <path d="M19 12H5M11 6L5 12L11 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...sharedProps}>
          <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "users":
      return (
        <svg {...sharedProps}>
          <circle cx="9" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3.5 19C3.9 15.9 6.2 14 9 14C11.8 14 14.1 15.9 14.5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M15.5 5.6A3 3 0 0 1 15.5 11.4M17 14.3C18.9 14.9 20.2 16.6 20.5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "book":
      return (
        <svg {...sharedProps}>
          <path d="M4.5 5.5C4.5 4.7 5.2 4 6 4H19.5V17H6C5.2 17 4.5 17.7 4.5 18.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M4.5 18.5C4.5 19.3 5.2 20 6 20H19.5V17M8.5 8H15.5M8.5 11H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "receipt":
      return (
        <svg {...sharedProps}>
          <path d="M6 3.5H18V20.5L15.5 19L13 20.5L10.5 19L8 20.5L6 19.3V3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9 8H15M9 11.5H15M9 15H12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "bus":
      return (
        <svg {...sharedProps}>
          <rect x="4.5" y="3.5" width="15" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4.5 10.5H19.5M7.5 17.5V20M16.5 17.5V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="8.5" cy="14" r="1" fill="currentColor" />
          <circle cx="15.5" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    case "close":
      return (
        <svg {...sharedProps}>
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "check":
      return (
        <svg {...sharedProps}>
          <path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "browser":
      return (
        <svg {...sharedProps}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3.5 9H20.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M6.5 6.8H6.51M8.8 6.8H8.81" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.5 12.5L7.5 14.5L9.5 16.5M14.5 12.5L16.5 14.5L14.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...sharedProps}>
          <rect x="6.5" y="2.8" width="11" height="18.4" rx="2.8" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10.5 5.6H13.5M11 18H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "server":
      return (
        <svg {...sharedProps}>
          <rect x="4" y="4" width="16" height="6.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <rect x="4" y="13.5" width="16" height="6.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7.5 7.25H7.51M7.5 16.75H7.51M11 7.25H16.5M11 16.75H16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...sharedProps}>
          <rect x="4" y="5.5" width="16" height="14.5" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 3.8V7M16 3.8V7M4 9.5H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8.5 13H11.5M8.5 16H10.5M13.5 16H15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "phone":
      return (
        <svg {...sharedProps}>
          <path d="M7.2 4.8C7.9 4.1 9.1 4.1 9.8 4.8L11.5 6.5C12.2 7.2 12.2 8.3 11.5 9L10.5 10C10.9 10.8 11.4 11.6 12.1 12.3C12.8 13 13.5 13.5 14.4 14L15.4 13C16.1 12.3 17.2 12.3 17.9 13L19.6 14.7C20.3 15.4 20.3 16.6 19.6 17.3L18.7 18.2C17.8 19.1 16.4 19.5 15.1 19.1C12.6 18.3 10.3 16.8 8.3 14.8C6.3 12.8 4.8 10.5 4 8C3.6 6.7 4 5.3 4.9 4.4L5.8 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mail":
      return (
        <svg {...sharedProps}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chat":
      return (
        <svg {...sharedProps}>
          <path
            d="M6.2 7.1C4.4 8.6 3.5 10.6 3.5 12.7C3.5 16.7 6.9 19.8 11.2 19.8C12.4 19.8 13.6 19.6 14.7 19.1L19.4 20.1L18.1 16.1C19.3 14.9 20 13.4 20 11.7C20 7.7 16.6 4.6 12.3 4.6C10.1 4.6 8 5.5 6.2 7.1Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8.7 11.8H15.1M8.7 14.5H12.9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "location":
      return (
        <svg {...sharedProps}>
          <path d="M12 20C15.8 16.2 18 13.5 18 10.2C18 6.8 15.3 4 12 4C8.7 4 6 6.8 6 10.2C6 13.5 8.2 16.2 12 20Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...sharedProps}>
          <path d="M13.3 20V12.8H15.7L16.1 10H13.3V8.2C13.3 7.4 13.6 6.8 14.8 6.8H16.2V4.3C15.9 4.3 14.9 4.2 13.8 4.2C11.5 4.2 10 5.6 10 8.1V10H7.6V12.8H10V20H13.3Z" fill="currentColor" />
        </svg>
      );
    case "x-social":
      return (
        <svg {...sharedProps}>
          <path d="M5 5L10.6 12.5L5.4 19H7.9L11.8 14.1L15.5 19H19L13.1 11.2L18 5H15.5L11.9 9.6L8.5 5H5Z" fill="currentColor" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...sharedProps}>
          <rect x="4" y="4" width="16" height="16" rx="4.2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...sharedProps}>
          <path d="M7.1 9.3V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.1 6.9C7.8 6.9 8.3 6.4 8.3 5.7C8.3 5 7.8 4.5 7.1 4.5C6.4 4.5 5.9 5 5.9 5.7C5.9 6.4 6.4 6.9 7.1 6.9Z" fill="currentColor" />
          <path d="M11.4 19V12.9C11.4 10.9 12.7 9.5 14.5 9.5C16.3 9.5 17.4 10.6 17.4 13V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.4 11C12.1 10 13.2 9.5 14.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "globe":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3.8 12H20.2M12 3.8C14.2 6.1 15.4 9 15.4 12C15.4 15 14.2 17.9 12 20.2C9.8 17.9 8.6 15 8.6 12C8.6 9 9.8 6.1 12 3.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "react":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "reactnative":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="2.1" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.2" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.2" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.2" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)" />
          <path d="M7 6.5L5.2 4.7M17 6.5L18.8 4.7M7 17.5L5.2 19.3M17 17.5L18.8 19.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "nextjs":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9 16V8L15.5 16V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "typescript":
      return (
        <svg {...sharedProps}>
          <rect x="4" y="4" width="16" height="16" rx="2.6" fill="currentColor" />
          <path d="M8 9.2H15.6M11.8 9.2V17" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M13.9 13.2C14.5 12.7 15.2 12.7 15.8 13C16.5 13.3 16.7 14.3 15.9 14.7L14.9 15.2C14.1 15.6 14.3 16.6 15 16.9C15.7 17.2 16.4 17.1 17 16.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "nodejs":
      return (
        <svg {...sharedProps}>
          <path d="M12 3.8L18.5 7.5V16.5L12 20.2L5.5 16.5V7.5L12 3.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9.5 10V14.4M12.2 9.2V14.8M12.2 9.2L15 10.8V13.8L12.2 15.4L9.5 13.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "flutter":
      return (
        <svg {...sharedProps}>
          <path d="M7 14.8L13.8 8L17 11.2L10.2 18H7L10.4 14.6Z" fill="currentColor" />
          <path d="M10.6 6.2L13.8 3L17 6.2L10.2 13H7L10.6 9.4H16" fill="currentColor" opacity="0.6" />
        </svg>
      );
    case "python":
      return (
        <svg {...sharedProps}>
          <path d="M12 4.5H9.1A3.1 3.1 0 0 0 6 7.6V10.1H12V11.7H4.7A2.2 2.2 0 0 0 2.5 13.9V15.2A4.3 4.3 0 0 0 6.8 19.5H9.5V16.1A3.1 3.1 0 0 1 12.6 13H17A2.5 2.5 0 0 0 19.5 10.5V8A3.5 3.5 0 0 0 16 4.5H14.4" fill="currentColor" opacity="0.92" />
          <path d="M12 19.5H14.9A3.1 3.1 0 0 0 18 16.4V13.9H12V12.3H19.3A2.2 2.2 0 0 0 21.5 10.1V8.8A4.3 4.3 0 0 0 17.2 4.5H14.5V7.9A3.1 3.1 0 0 1 11.4 11H7A2.5 2.5 0 0 0 4.5 13.5V16A3.5 3.5 0 0 0 8 19.5H9.6" fill="currentColor" opacity="0.55" />
          <circle cx="9.2" cy="7.4" r="1" fill="#fff" />
          <circle cx="14.8" cy="16.6" r="1" fill="#fff" />
        </svg>
      );
    case "openai":
      return (
        <svg {...sharedProps}>
          <path d="M11.9 4.2A3.4 3.4 0 0 1 17 7.3V7.6A3.3 3.3 0 0 1 19.8 12.8A3.4 3.4 0 0 1 17.2 18.2A3.4 3.4 0 0 1 12 19.7A3.4 3.4 0 0 1 6.8 18A3.4 3.4 0 0 1 4.2 12.6A3.4 3.4 0 0 1 7 7.5V7.2A3.4 3.4 0 0 1 11.9 4.2Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.1 5.8L14.9 9.1M14.8 5.8V12.4M6.2 10.7L12 14M9.1 18.2L14.8 14.9M17.8 10.7L12 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "postgresql":
      return (
        <svg {...sharedProps}>
          <path d="M12.2 4.3C8.4 4.3 6.7 7.4 6.7 10.8V14.6C6.7 16.8 8.1 18.2 9.9 18.2C10.7 18.2 11.4 18 12 17.6C12.6 18 13.3 18.2 14.1 18.2C15.9 18.2 17.3 16.8 17.3 14.6V10.8C17.3 7.4 15.6 4.3 12.2 4.3Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 10.1C10.4 10.1 11.2 9.7 12 9C12.8 9.7 13.6 10.1 14.5 10.1M10 13.5H10.1M14 13.5H14.1M12 17.4V12.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mongodb":
      return (
        <svg {...sharedProps}>
          <path d="M12 3.8C13.8 5.8 16 8.8 16 12.1C16 15.6 13.9 18.4 12 20.2C10.1 18.4 8 15.6 8 12.1C8 8.8 10.2 5.8 12 3.8Z" fill="currentColor" />
          <path d="M12 6.2V17.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "aws":
      return (
        <svg {...sharedProps}>
          <path d="M6 9.4C9.1 11 14.9 11 18 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M7.5 14.7C10.1 16.3 13.9 16.3 16.5 14.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M17.4 17.1C15.8 18.3 13.9 19 12 19C10.1 19 8.2 18.3 6.6 17.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "datascience":
      return (
        <svg {...sharedProps}>
          <path d="M5 18V9.5M10 18V6.5M15 18V11.5M20 18V4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M4.5 18.5H20.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="5" cy="9.5" r="1.3" fill="currentColor" />
          <circle cx="10" cy="6.5" r="1.3" fill="currentColor" />
          <circle cx="15" cy="11.5" r="1.3" fill="currentColor" />
          <circle cx="20" cy="4.5" r="1.3" fill="currentColor" />
        </svg>
      );
    case "machinelearning":
      return (
        <svg {...sharedProps}>
          <circle cx="7" cy="7" r="2" fill="currentColor" />
          <circle cx="17" cy="7" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="7" cy="17" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="17" cy="17" r="2" fill="currentColor" />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <path d="M8.6 8.6L10.4 10.4M15.4 8.6L13.6 10.4M8.6 15.4L10.4 13.6M15.4 15.4L13.6 13.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function AppButton({
  children,
  className = "",
  size = "md",
  fullWidth = false,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md";
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
}) {
  const classes = [
    "app-button",
    variant === "secondary" ? "app-button-secondary" : "app-button-primary",
    size === "sm" ? "app-button-sm" : "app-button-md",
    fullWidth ? "app-button-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
