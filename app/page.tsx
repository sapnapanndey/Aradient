"use client";

import Image from "next/image";
import akankshaImage from "../images/akanksha.jpeg";
import {
  type ButtonHTMLAttributes,
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useState,
} from "react";
import engineeringImage from "../images/engineering.png";
import fixAiImageOne from "../images/apps/fixai/1.webp";
import fixAiImageThree from "../images/apps/fixai/3.webp";
import fixAiImageTwo from "../images/apps/fixai/2.webp";
import contactImage from "../images/contact.svg";
import samagraImageFive from "../images/apps/samagraenterprises/5.jpeg";
import samagraImageFour from "../images/apps/samagraenterprises/4.jpeg";
import samagraImageOne from "../images/apps/samagraenterprises/1.jpeg";
import samagraImageThree from "../images/apps/samagraenterprises/3.jpeg";
import samagraImageTwo from "../images/apps/samagraenterprises/2.jpeg";
import kunalReddyImage from "../images/kunal Reddy.png";
import launchImage from "../images/launch.png";
import logoImage from "../images/logo.png";
import prototypeImage from "../images/prototype.png";
import sonamTripathiImage from "../images/Sonam Tripathi.png";
import strategyImage from "../images/strategy.png";
import siteContent from "./content/site-content.json";

function SvgIcon({
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

function AppButton({
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

const teamImages = {
  akanksha: akankshaImage,
  kunalReddy: kunalReddyImage,
  sonamTripathi: sonamTripathiImage,
} as const;

export default function Home() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [activeProductSlide, setActiveProductSlide] = useState(0);
  const [activeSamagraSlide, setActiveSamagraSlide] = useState(0);
  const [flippedSuccessIndex, setFlippedSuccessIndex] = useState<number | null>(null);
  const [headerOnLight, setHeaderOnLight] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [heroEmail, setHeroEmail] = useState("");
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isLeadSubmitted, setIsLeadSubmitted] = useState(false);
  const [hasAutoOpenedLeadModal, setHasAutoOpenedLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    company: "",
    requirement: "",
  });

  const {
    brand,
    clientsSection,
    footer,
    hero,
    learnMoreSection,
    navigation,
    products,
    samagraProduct,
    servicesSection,
    showcase,
    successSection,
  } = siteContent;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWordIndex((current) => (current + 1) % hero.words.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [hero.words.length]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const indexValue = entry.target.getAttribute("data-reveal");
          if (!indexValue) return;

          const index = Number(indexValue);
          setVisibleSections((current) =>
            current.includes(index) ? current : [...current, index],
          );
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveProductSlide((current) => (current + 1) % 3);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSamagraSlide((current) => (current + 1) % 5);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const triggerSection = document.getElementById("company");
      if (!triggerSection) return;

      const switchPoint = triggerSection.offsetTop - 88;
      setHeaderOnLight(window.scrollY >= switchPoint);
    };

    updateHeaderTheme();
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, []);

  useEffect(() => {
    if (!isLeadModalOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLeadModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLeadModalOpen]);

  useEffect(() => {
    if (hasAutoOpenedLeadModal) return;

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const scrollProgress = window.scrollY / scrollableHeight;
      if (scrollProgress < 0.5) return;

      setHasAutoOpenedLeadModal(true);
      openLeadModal(heroEmail.trim());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAutoOpenedLeadModal, heroEmail]);

  const isVisible = (index: number) =>
    visibleSections.includes(index) ? "reveal visible" : "reveal";

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLearnMoreClick = () => {
    setIsLearnMoreOpen(true);
    window.setTimeout(() => {
      scrollToSection("learn-more");
    }, 120);
  };

  const openLeadModal = (prefilledEmail = "") => {
    setLeadForm((current) => ({
      ...current,
      email: prefilledEmail || current.email,
    }));
    setIsLeadSubmitted(false);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
  };

  const handleLeadFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setLeadForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLeadSubmitted(true);
    setHeroEmail("");
  };

  const productCards = [
    {
      title: products.heroTitle,
      description: products.heroDescription,
      items: products.heroPoints,
    },
    {
      title: products.platformTitle,
      description: products.platformDescription,
      items: products.capabilities.map(
        (capability) => `${capability.title}: ${capability.description}`,
      ),
    },
    {
      title: products.aiTitle,
      description: products.aiDescription,
      items: products.aiFeatures.map((feature) => `${feature.title}: ${feature.description}`),
    },
  ];

  const productSlides = [
    { image: fixAiImageOne, alt: products.images.heroAlt },
    { image: fixAiImageTwo, alt: products.images.overviewAlt },
    { image: fixAiImageThree, alt: products.images.stepsAlt },
  ];

  const samagraCards = [
    {
      title: samagraProduct.heroTitle,
      description: samagraProduct.heroDescription,
      items: samagraProduct.heroPoints,
    },
    {
      title: samagraProduct.platformTitle,
      description: samagraProduct.platformDescription,
      items: samagraProduct.capabilities.map(
        (capability) => `${capability.title}: ${capability.description}`,
      ),
    },
    {
      title: samagraProduct.aiTitle,
      description: samagraProduct.aiDescription,
      items: samagraProduct.aiFeatures.map(
        (feature) => `${feature.title}: ${feature.description}`,
      ),
    },
  ];

  const samagraSlides = [
    { image: samagraImageOne, alt: samagraProduct.images.heroAlt },
    { image: samagraImageTwo, alt: samagraProduct.images.overviewAlt },
    { image: samagraImageThree, alt: samagraProduct.images.stepsAlt },
    { image: samagraImageFour, alt: samagraProduct.images.extraAltOne },
    { image: samagraImageFive, alt: samagraProduct.images.extraAltTwo },
  ];

  const goToPreviousProductSlide = () => {
    setActiveProductSlide((current) =>
      current === 0 ? productCards.length - 1 : current - 1,
    );
  };

  const goToNextProductSlide = () => {
    setActiveProductSlide((current) => (current + 1) % productCards.length);
  };

  return (
    <main>
      <nav className={headerOnLight ? "nav-on-light" : "nav-on-dark"}>
        <div className="nav-logo">
          <Image alt={`${brand.name} logo`} className="nav-logo-image" priority src={logoImage} />
          <span className="brand-label">{brand.name}</span>
        </div>
        <div className="nav-links">
          {navigation.links.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
        <AppButton className="nav-cta" onClick={() => openLeadModal()} size="sm" type="button">
          <SvgIcon className="icon-svg" name="calendar" />
          {navigation.cta}
        </AppButton>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grain" />

        <h1>
          {hero.titlePrefix}{" "}
          <span className="word-swap" key={hero.words[activeWordIndex]}>
            <span className="fade-word">{hero.words[activeWordIndex]}</span>
          </span>
          <br />
          {hero.titleSuffix}
        </h1>

        <p className="hero-sub">{hero.description}</p>

        <form
          className="hero-form"
          onSubmit={(event) => {
            event.preventDefault();
            openLeadModal(heroEmail.trim());
          }}
        >
          <input
            aria-label="Email address"
            onChange={(event) => setHeroEmail(event.target.value)}
            placeholder={hero.formPlaceholder}
            type="email"
            value={heroEmail}
          />
          <AppButton size="sm" type="submit">
            {hero.formButton}
          </AppButton>
        </form>

        <div className="hero-stats">
          {hero.stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`showcase-section ${isVisible(1)}`} data-reveal="1" id="company">
        <div className="showcase-shell">
          <article className={`feature-panel ${isVisible(2)}`} data-reveal="2">
            <div className="feature-copy">
              <h2>{showcase.feature.title}</h2>
              <p>{showcase.feature.description}</p>
              <div className="feature-actions">
                <AppButton
                  className="feature-btn"
                  onClick={() => openLeadModal(heroEmail.trim())}
                  type="button"
                >
                  {showcase.feature.primaryButton}
                </AppButton>
                <AppButton
                  className="feature-btn"
                  onClick={handleLearnMoreClick}
                  type="button"
                  variant="secondary"
                >
                  {showcase.feature.secondaryButton}
                </AppButton>
              </div>
            </div>
            <div className="feature-visual" aria-hidden="true">
              <div className="feature-glow" />
              <Image
                alt="Engineering illustration"
                className="feature-image"
                priority
                src={engineeringImage}
              />
            </div>
          </article>

          <section
            className={`learn-more-section ${isLearnMoreOpen ? "is-open" : "is-hidden"} ${isVisible(100)}`}
            data-reveal="100"
            id="learn-more"
          >
            <div className={`learn-more-heading ${isVisible(101)}`} data-reveal="101">
              <span className="learn-more-kicker">{learnMoreSection.label}</span>
              <h3>{learnMoreSection.title}</h3>
              <p>{learnMoreSection.description}</p>
            </div>

            <div className="learn-more-grid">
              {learnMoreSection.highlights.map((highlight, index) => (
                <article
                  className={`learn-more-card ${isVisible(102 + index)}`}
                  data-reveal={102 + index}
                  key={highlight.title}
                >
                  <span className="learn-more-icon">
                    <SvgIcon className="icon-svg" name={highlight.icon} />
                  </span>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </article>
              ))}

              <aside className={`learn-more-callout ${isVisible(105)}`} data-reveal="105">
                <span className="learn-more-callout-eyebrow">
                  {learnMoreSection.callout.eyebrow}
                </span>
                <h4>{learnMoreSection.callout.title}</h4>
                <p>{learnMoreSection.callout.description}</p>
                <AppButton
                  className="learn-more-callout-button"
                  onClick={() => openLeadModal(heroEmail.trim())}
                  type="button"
                  variant="secondary"
                >
                  {navigation.cta}
                </AppButton>
              </aside>
            </div>
          </section>
        </div>
      </section>

      <section className={`success-section ${isVisible(3)}`} data-reveal="3" id="services">
        <div className="services-shell">
          <div className={`services-header ${isVisible(28)}`} data-reveal="28">
            <h2>{servicesSection.title}</h2>
            <p>{servicesSection.description}</p>
          </div>

          <div className="services-grid">
            {servicesSection.items.map((service, index) => (
              <article
                className={`service-card ${isVisible(index + 29)}`}
                data-reveal={index + 29}
                key={service.title}
              >
                <div className="service-card-inner">
                  <div className="service-card-face service-card-front">
                    <div className="service-illustration-wrap">
                      <img
                        alt={service.title}
                        className="service-illustration"
                        loading="lazy"
                        src={service.illustrationUrl}
                      />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <div className="service-card-face service-card-back">
                    <span className="service-card-kicker">Software Service</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-card-hint">Built with Aradient</span>
                  </div>
                </div>
              </article>
            ))}

            <aside
              className={`service-cta-card ${isVisible(36)}`}
              data-reveal="36"
            >
              <h3>{servicesSection.ctaTitle}</h3>
              <p>{servicesSection.ctaDescription}</p>
              <AppButton
                className="service-cta-button"
                onClick={() => openLeadModal(heroEmail.trim())}
                type="button"
                variant="secondary"
              >
                {servicesSection.ctaButton}
              </AppButton>
            </aside>
          </div>
        </div>
      </section>

      <section className={`success-section ${isVisible(3)}`} data-reveal="3">
        <div className="success-shell">
          <div className="success-ambient success-ambient-left" aria-hidden="true" />
          <div className="success-ambient success-ambient-right" aria-hidden="true" />
          <div className={`success-header ${isVisible(4)}`} data-reveal="4">
            <h2>{successSection.title}</h2>
            <p>{successSection.description}</p>
          </div>

          <div className="success-grid">
            {successSection.steps.map((step, index) => (
              <div className="success-card-wrap" key={step.title}>
                <button
                  className={`success-card success-card-button ${isVisible(index + 5)} ${
                    flippedSuccessIndex === index ? "is-flipped" : ""
                  }`}
                  data-reveal={index + 5}
                  onClick={() =>
                    setFlippedSuccessIndex((current) => (current === index ? null : index))
                  }
                  onMouseEnter={() => setFlippedSuccessIndex(index)}
                  onMouseLeave={() => setFlippedSuccessIndex((current) => (current === index ? null : current))}
                  onBlur={() => setFlippedSuccessIndex((current) => (current === index ? null : current))}
                  type="button"
                >
                  <div className="success-card-inner">
                    <div className="success-card-face success-card-front">
                      <div
                        className={`${step.iconClassName} ${
                          step.image ? "success-icon-plain" : ""
                        }`}
                      >
                        {step.image === "strategy" ? (
                          <Image alt="" className="success-image-icon" src={strategyImage} />
                        ) : step.image === "prototype" ? (
                          <Image alt="" className="success-image-icon" src={prototypeImage} />
                        ) : step.image === "launch" ? (
                          <Image alt="" className="success-image-icon" src={launchImage} />
                        ) : (
                          <SvgIcon name={step.icon} className="icon-svg success-svg" />
                        )}
                      </div>
                      <h3>{step.title}</h3>
                      <div className="success-card-line" aria-hidden="true" />
                      <span className="success-card-hint">View details</span>
                    </div>

                    <div className="success-card-face success-card-back">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-group" id="products">
        <div className={`products-group-header ${isVisible(17)}`} data-reveal="17">
          <span className="products-group-kicker">Built by Aradient</span>
          <h2>Products by Aradient</h2>
        </div>

        <div className={`products-section ${isVisible(17)}`} data-reveal="17">
          <div className="products-inner">
            <div className="products-list" id="capabilities">
              <div className={`products-nameplate ${isVisible(18)}`} data-reveal="18">
                <span className="products-nameplate-kicker">Featured Product</span>
                <div className="products-app-brand">
                  {products.logoUrl ? (
                    <span className="products-app-logo">
                      <img alt={products.logo} className="products-app-logo-image" src={products.logoUrl} />
                    </span>
                  ) : null}
                  <h2>{products.name}</h2>
                </div>
              </div>

              <div className={`product-card-stage ${isVisible(19)}`} data-reveal="19">
                {productCards.map((product, index) => (
                  <article
                    className={`product-item ${index === activeProductSlide ? "active is-visible" : ""}`}
                    key={product.title}
                  >
                    <h3>{product.title}</h3>
                    <p className="product-item-description">{product.description}</p>
                    <ul>
                      {product.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className={`product-slider-controls ${isVisible(20)}`} data-reveal="20">
                <div className="product-slider-dots">
                  {productSlides.map((slide, index) => (
                    <button
                      aria-label={`Go to slide ${index + 1}`}
                      className={`product-slider-dot ${index === activeProductSlide ? "is-active" : ""}`}
                      key={slide.alt}
                      onClick={() => setActiveProductSlide(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={`product-visual ${isVisible(21)}`} data-reveal="21">
              <div className="product-slider">
                {productSlides.map((slide, index) => (
                  <div
                    className={`product-slide ${index === activeProductSlide ? "is-active" : ""}`}
                    key={slide.alt}
                  >
                    <Image alt={slide.alt} className="product-slide-image" src={slide.image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`products-divider ${isVisible(22)}`} data-reveal="22" aria-hidden="true">
          <span className="products-divider-line" />
          <span className="products-divider-badge">Next Product</span>
          <span className="products-divider-line" />
        </div>

        <div className={`products-section products-section-solar ${isVisible(23)}`} data-reveal="23">
          <div className="products-inner">
            <div className="products-list">
              <div className={`products-nameplate ${isVisible(24)}`} data-reveal="24">
                <span className="products-nameplate-kicker">{samagraProduct.tagline}</span>
                <div className="products-app-brand">
                  {samagraProduct.logoUrl ? (
                    <span className="products-app-logo">
                      <img
                        alt={samagraProduct.logo}
                        className="products-app-logo-image"
                        src={samagraProduct.logoUrl}
                      />
                    </span>
                  ) : null}
                  <h2>{samagraProduct.name}</h2>
                </div>
              </div>

              <div className={`product-card-stage ${isVisible(25)}`} data-reveal="25">
                {samagraCards.map((product, index) => (
                  <article
                    className={`product-item ${index === activeSamagraSlide % samagraCards.length ? "active is-visible" : ""}`}
                    key={product.title}
                  >
                    <h3>{product.title}</h3>
                    <p className="product-item-description">{product.description}</p>
                    <ul>
                      {product.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className={`product-slider-controls ${isVisible(26)}`} data-reveal="26">
                <div className="product-slider-dots">
                  {samagraSlides.map((slide, index) => (
                    <button
                      aria-label={`Go to Samagra slide ${index + 1}`}
                      className={`product-slider-dot ${index === activeSamagraSlide ? "is-active" : ""}`}
                      key={slide.alt}
                      onClick={() => setActiveSamagraSlide(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={`product-visual ${isVisible(27)}`} data-reveal="27">
              <div className="product-slider">
                {samagraSlides.map((slide, index) => (
                  <div
                    className={`product-slide ${index === activeSamagraSlide ? "is-active" : ""}`}
                    key={slide.alt}
                  >
                    <Image alt={slide.alt} className="product-slide-image" src={slide.image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`clients-section ${isVisible(8)}`} data-reveal="8" id="clients">
        <div className="clients-shell">
          <div className={`clients-header ${isVisible(9)}`} data-reveal="9">
            <h2>{clientsSection.title}</h2>
            <p>{clientsSection.description}</p>
          </div>

          <div className="clients-marquee-group">
            {clientsSection.rows.map((row, rowIndex) => (
              <div
                className={`clients-marquee-row ${
                  rowIndex % 2 === 0 ? "clients-marquee-left" : "clients-marquee-right"
                }`}
                key={`row-${rowIndex}`}
              >
                {[...row, ...row].map((client, clientIndex) => (
                  <div className="client-pill" key={`${client.name}-${clientIndex}`}>
                    <span className="client-mark" aria-hidden="true">
                      {client.logoUrl ? (
                        <img
                          alt=""
                          className="client-logo-image"
                          src={client.logoUrl}
                        />
                      ) : client.icon ? (
                        <SvgIcon className="client-tech-icon" name={client.icon} />
                      ) : (
                        client.name.charAt(0)
                      )}
                    </span>
                    <span>{client.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
      <section className={`team-section ${isVisible(10)}`} data-reveal="10" id="team">
        <div className="team-shell">
          <div className="team-heading">
            <div className={`team-heading-left ${isVisible(11)}`} data-reveal="11">
              <span className="team-kicker">{teamSection.label}</span>
              <h2>{teamSection.title}</h2>
            </div>
            <div className={`team-heading-right ${isVisible(12)}`} data-reveal="12">
              <p>{teamSection.description}</p>
            </div>
          </div>

          <div className="team-grid">
            {teamSection.members.map((member, index) => (
              <article
                className={`team-card ${isVisible(index + 13)}`}
                data-reveal={index + 13}
                key={member.name}
              >
                <div className={`team-portrait team-portrait-${member.variant}`}>
                  {member.image in teamImages ? (
                    <Image
                      alt={member.name}
                      className="team-portrait-image"
                      loading="lazy"
                      src={teamImages[member.image as keyof typeof teamImages]}
                    />
                  ) : (
                    <img
                      alt={member.name}
                      className="team-portrait-image"
                      loading="lazy"
                      src={member.image}
                    />
                  )}
                </div>
                <div className="team-copy">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      <footer className={isVisible(18)} data-reveal="18">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-lockup">
              <Image alt={`${brand.name} logo`} className="footer-logo-image" src={logoImage} />
              <span className="brand-label footer-brand-label">{brand.name}</span>
            </div>
            <p>{footer.description}</p>
            <div className="footer-contact-list">
              {footer.contacts.map((item) => (
                <a className="footer-contact-item" href={item.href} key={item.label}>
                  <span className="footer-contact-icon" aria-hidden="true">
                    <SvgIcon className="icon-svg" name={item.icon} />
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
          {footer.columns.map((column) => (
            <div className="footer-col" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <div className="footer-bottom-links">
            {footer.bottomLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-socials">
            {footer.socials.map((social) => (
              <a
                aria-label={social.label}
                className="footer-social-link"
                href={social.href}
                key={social.label}
              >
                <SvgIcon className="icon-svg footer-social-icon" name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {isLeadModalOpen ? (
        <div
          className="lead-modal-backdrop"
          onClick={closeLeadModal}
        >
          <div
            aria-labelledby="lead-modal-title"
            aria-modal="true"
            className="lead-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Close form"
              className="lead-modal-close"
              onClick={closeLeadModal}
              type="button"
            >
              ×
            </button>

            {isLeadSubmitted ? (
              <div className="lead-modal-success">
                <div className="lead-modal-success-badge">Request sent</div>
                <Image
                  alt="Contact illustration"
                  className="lead-modal-illustration"
                  src={contactImage}
                />
                <h2 id="lead-modal-title">We will get back to you soon.</h2>
                <p>
                  Thanks for sharing your requirement. Our team will review it and
                  reach out shortly.
                </p>
                <AppButton fullWidth onClick={closeLeadModal} type="button">
                  Close
                </AppButton>
              </div>
            ) : (
              <div className="lead-modal-shell">
                <aside className="lead-modal-aside">
                  <span className="lead-modal-eyebrow">Start a conversation</span>
                  <h2 id="lead-modal-title">Share your requirement</h2>
                  <p className="lead-modal-copy">
                    A few details are enough. We will follow up with the right next
                    step.
                  </p>

                  <div className="lead-modal-highlights">
                    <span>Fast response</span>
                    <span>Product thinking</span>
                    <span>Execution-ready team</span>
                  </div>

                  <div className="lead-modal-visual">
                    <Image
                      alt="Contact illustration"
                      className="lead-modal-illustration"
                      src={contactImage}
                    />
                  </div>
                </aside>

                <div className="lead-modal-panel">
                  <form className="lead-modal-form" onSubmit={handleLeadSubmit}>
                    <label className="lead-modal-field">
                      <span>Name</span>
                      <input
                        name="name"
                        onChange={handleLeadFieldChange}
                        placeholder="Your name"
                        required
                        type="text"
                        value={leadForm.name}
                      />
                    </label>
                    <label className="lead-modal-field">
                      <span>Work email</span>
                      <input
                        name="email"
                        onChange={handleLeadFieldChange}
                        placeholder="name@company.com"
                        required
                        type="email"
                        value={leadForm.email}
                      />
                    </label>
                    <label className="lead-modal-field">
                      <span>Company</span>
                      <input
                        aria-label="Company name optional"
                        name="company"
                        onChange={handleLeadFieldChange}
                        placeholder="Company name (optional)"
                        type="text"
                        value={leadForm.company}
                      />
                    </label>
                    <label className="lead-modal-field">
                      <span>Requirement</span>
                      <textarea
                        name="requirement"
                        onChange={handleLeadFieldChange}
                        placeholder="Briefly describe your requirement"
                        required
                        rows={4}
                        value={leadForm.requirement}
                      />
                    </label>
                    <AppButton fullWidth type="submit">
                      Submit
                    </AppButton>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </main>
  );
}
