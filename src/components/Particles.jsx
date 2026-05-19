// Lightweight SVG background blobs with subtle CSS animation — far less CPU than canvas particles
const Particles = () => {
  // Don't render on the server or when reduced-motion / touch; checks are handled upstream where this component is mounted.
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 1
      }}
    >
      <defs>
        <linearGradient id="g1" x1="0%" x2="100%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.06)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0.02)" />
        </linearGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="30" />
        </filter>
      </defs>

      <g filter="url(#blur)">
        <ellipse cx="15%" cy="20%" rx="200" ry="120" fill="url(#g1)">
          <animate attributeName="cx" dur="14s" values="10%;15%;20%;10%" repeatCount="indefinite" />
          <animate attributeName="cy" dur="18s" values="15%;20%;18%;15%" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="85%" cy="30%" rx="220" ry="140" fill="rgba(99,102,241,0.03)">
          <animate attributeName="cx" dur="16s" values="80%;85%;90%;80%" repeatCount="indefinite" />
          <animate attributeName="cy" dur="20s" values="25%;30%;28%;25%" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="50%" cy="80%" rx="320" ry="200" fill="rgba(59,130,246,0.02)">
          <animate attributeName="cx" dur="22s" values="45%;50%;55%;45%" repeatCount="indefinite" />
          <animate attributeName="cy" dur="24s" values="75%;80%;78%;75%" repeatCount="indefinite" />
        </ellipse>
      </g>
    </svg>
  );
};

export default Particles;
