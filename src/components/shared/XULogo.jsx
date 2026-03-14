export default function XULogo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="XU Software logo mark"
    >
      <defs>
        <linearGradient
          id="xu-grad"
          x1="0"
          y1="0"
          x2="36"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient
          id="xu-bg"
          x1="0"
          y1="0"
          x2="36"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.10" />
        </linearGradient>
      </defs>

      {/* Subtle rounded-rect background */}
      <rect width="36" height="36" rx="9" fill="url(#xu-bg)" />
      <rect
        width="36"
        height="36"
        rx="9"
        stroke="url(#xu-grad)"
        strokeWidth="0.75"
        strokeOpacity="0.5"
      />

      {/* X mark — two thick crossing paths with rounded caps */}
      <path
        d="M10.5 10.5 L25.5 25.5"
        stroke="url(#xu-grad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M25.5 10.5 L10.5 25.5"
        stroke="url(#xu-grad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Accent dot at bottom-right */}
      <circle cx="27" cy="27" r="2.2" fill="url(#xu-grad)" />
    </svg>
  );
}
