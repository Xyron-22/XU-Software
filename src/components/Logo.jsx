const SIZES = {
  sm: { icon: 28 },
  md: { icon: 36 },
  lg: { icon: 44 },
};

export default function Logo({ size = "md" }) {
  const { icon } = SIZES[size] || SIZES.md;

  return (
    <div className="flex items-center gap-3">
      {/* Icon Mark */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`logoGrad-${size}`}
            x1="0"
            y1="0"
            x2="58"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <radialGradient id={`radialGlow-${size}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft radial glow behind center */}
        <circle cx="29" cy="29" r="20" fill={`url(#radialGlow-${size})`} />

        {/* Diagonal lines */}
        <line
          x1="8"
          y1="8"
          x2="50"
          y2="50"
          stroke={`url(#logoGrad-${size})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="8"
          x2="8"
          y2="50"
          stroke={`url(#logoGrad-${size})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Corner nodes */}
        <circle cx="8" cy="8" r="4" fill="#3B82F6" />
        <circle cx="50" cy="8" r="4" fill="#8B5CF6" />
        <circle cx="8" cy="50" r="4" fill="#8B5CF6" />
        <circle cx="50" cy="50" r="4" fill="#3B82F6" />

        {/* Center node */}
        <circle
          cx="29"
          cy="29"
          r="6"
          fill="#0F172A"
          stroke={`url(#logoGrad-${size})`}
          strokeWidth="2"
        />
        <circle cx="29" cy="29" r="2.5" fill={`url(#logoGrad-${size})`} />
      </svg>

      {/* Wordmark */}
      <div className="flex items-center gap-0">
        <span
          style={{
            fontFamily: "'Outfit', 'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            color: "#F8FAFC",
            letterSpacing: -1,
            lineHeight: 1,
          }}
        >
          XU
        </span>
        <span
          style={{
            fontFamily: "'Outfit', 'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 22,
            color: "#64748B",
            letterSpacing: -0.5,
            lineHeight: 1,
          }}
        >
          Software
        </span>
      </div>
    </div>
  );
}
