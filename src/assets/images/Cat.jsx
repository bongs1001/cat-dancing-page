const Cat = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="cat-svg"
    >
      {/* Cat Body */}
      <ellipse cx="100" cy="120" rx="50" ry="60" fill="#FF9800" />

      {/* Cat Head */}
      <circle cx="100" cy="70" r="40" fill="#FF9800" />

      {/* Left Ear */}
      <polygon points="70,45 60,20 80,40" fill="#FF9800" />
      <polygon points="72,42 65,27 77,38" fill="#FFB74D" />

      {/* Right Ear */}
      <polygon points="130,45 140,20 120,40" fill="#FF9800" />
      <polygon points="128,42 135,27 123,38" fill="#FFB74D" />

      {/* Left Eye */}
      <ellipse cx="85" cy="65" rx="8" ry="12" fill="#000" />
      <ellipse cx="87" cy="63" rx="3" ry="5" fill="#FFF" />

      {/* Right Eye */}
      <ellipse cx="115" cy="65" rx="8" ry="12" fill="#000" />
      <ellipse cx="117" cy="63" rx="3" ry="5" fill="#FFF" />

      {/* Nose */}
      <polygon points="100,75 95,82 105,82" fill="#FF6B6B" />

      {/* Mouth */}
      <path d="M 100 82 Q 90 88 85 85" stroke="#000" strokeWidth="2" fill="none" />
      <path d="M 100 82 Q 110 88 115 85" stroke="#000" strokeWidth="2" fill="none" />

      {/* Whiskers Left */}
      <line x1="60" y1="70" x2="80" y2="68" stroke="#000" strokeWidth="1.5" />
      <line x1="60" y1="75" x2="80" y2="75" stroke="#000" strokeWidth="1.5" />
      <line x1="60" y1="80" x2="80" y2="82" stroke="#000" strokeWidth="1.5" />

      {/* Whiskers Right */}
      <line x1="140" y1="70" x2="120" y2="68" stroke="#000" strokeWidth="1.5" />
      <line x1="140" y1="75" x2="120" y2="75" stroke="#000" strokeWidth="1.5" />
      <line x1="140" y1="80" x2="120" y2="82" stroke="#000" strokeWidth="1.5" />

      {/* Front Left Leg */}
      <rect x="75" y="160" width="15" height="35" rx="7" fill="#FF9800" />

      {/* Front Right Leg */}
      <rect x="110" y="160" width="15" height="35" rx="7" fill="#FF9800" />

      {/* Tail */}
      <path
        d="M 145 130 Q 170 120 175 100 Q 180 80 170 70"
        stroke="#FF9800"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        className="cat-tail"
      />

      {/* Belly Patch */}
      <ellipse cx="100" cy="130" rx="30" ry="40" fill="#FFB74D" opacity="0.7" />
    </svg>
  );
};

export default Cat;
