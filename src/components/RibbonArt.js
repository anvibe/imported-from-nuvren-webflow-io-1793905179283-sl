export default function RibbonArt() {
  return (
    <svg className="ribbon-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Polished metallic ribbon sculpture on a reflective floor">
      <defs>
        <radialGradient id="rb-bg" cx="0.35" cy="0.3" r="0.95">
          <stop offset="0" stopColor="#3b3122" />
          <stop offset="0.55" stopColor="#14110b" />
          <stop offset="1" stopColor="#060504" />
        </radialGradient>
        <linearGradient id="rb-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f8e7a8" />
          <stop offset="0.35" stopColor="#b8873a" />
          <stop offset="0.62" stopColor="#5a3d17" />
          <stop offset="1" stopColor="#ebc86a" />
        </linearGradient>
        <linearGradient id="rb-silver" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#e4ecff" />
          <stop offset="0.4" stopColor="#7a96c9" />
          <stop offset="0.7" stopColor="#2a3555" />
          <stop offset="1" stopColor="#eef3ff" />
        </linearGradient>
        <linearGradient id="rb-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#221c12" />
          <stop offset="1" stopColor="#050403" />
        </linearGradient>
        <radialGradient id="rb-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#cfe83a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#cfe83a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rb-fadeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <mask id="rb-fade" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="600">
          <rect x="0" y="450" width="600" height="150" fill="url(#rb-fadeGrad)" />
        </mask>
        <filter id="rb-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <filter id="rb-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <g id="rb-shape" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M170 410 C 70 300 190 120 335 160 C 470 198 535 330 440 405 C 370 455 255 395 248 305 C 242 225 330 150 430 150" stroke="#241505" strokeWidth="56" />
          <path d="M170 410 C 70 300 190 120 335 160 C 470 198 535 330 440 405 C 370 455 255 395 248 305 C 242 225 330 150 430 150" stroke="url(#rb-gold)" strokeWidth="44" />
          <path d="M170 410 C 70 300 190 120 335 160 C 470 198 535 330 440 405 C 370 455 255 395 248 305 C 242 225 330 150 430 150" stroke="#fff6cf" strokeWidth="4" opacity="0.7" transform="translate(-9 -9)" filter="url(#rb-soft)" />
          <path d="M215 430 C 330 330 450 340 545 285" stroke="#10162a" strokeWidth="46" />
          <path d="M215 430 C 330 330 450 340 545 285" stroke="url(#rb-silver)" strokeWidth="36" />
          <path d="M215 430 C 330 330 450 340 545 285" stroke="#ffffff" strokeWidth="3" opacity="0.8" transform="translate(0 -10)" filter="url(#rb-soft)" />
        </g>
      </defs>

      <rect width="600" height="600" fill="url(#rb-bg)" />
      <rect y="450" width="600" height="150" fill="url(#rb-floor)" />
      <ellipse cx="300" cy="458" rx="270" ry="34" fill="url(#rb-glow)" filter="url(#rb-blur)" />
      <g mask="url(#rb-fade)" opacity="0.4">
        <g transform="translate(0 900) scale(1 -1)">
          <use href="#rb-shape" />
        </g>
      </g>
      <use href="#rb-shape" />
    </svg>
  );
}
