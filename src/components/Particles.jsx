// Ambient atmospheric background with subtle radial glow and micro-grid texture
// Zero CPU overhead, no canvas jitter, perfectly crisp on high-DPI screens.
const Particles = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Top ambient radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '600px',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59, 130, 246, 0.08) 0%, rgba(37, 99, 235, 0.02) 50%, transparent 80%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Subtle secondary ambient glow for depth */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Precision micro-grid overlay with radial fade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 10%, #000 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 10%, #000 30%, transparent 90%)',
          opacity: 0.7,
        }}
      />
    </div>
  );
};

export default Particles;
