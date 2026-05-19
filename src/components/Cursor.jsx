import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Lightweight, performant custom cursor
const shouldEnableCursor = () => {
  if (typeof window === 'undefined') return false;
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const isTouch = 'ontouchstart' in window || isCoarse;
  const deviceMemory = navigator.deviceMemory || 4;
  const smallScreen = window.innerWidth < 768;
  return !(prefersReduced || isTouch || deviceMemory <= 1 || smallScreen);
};

const Cursor = () => {
  const [enabled] = useState(() => shouldEnableCursor());
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Softer spring for smoother, less janky motion on lower-end devices
  const springX = useSpring(x, { stiffness: 140, damping: 24 });
  const springY = useSpring(y, { stiffness: 140, damping: 24 });

  const target = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [variant, setVariant] = useState('default');

  useEffect(() => {
    if (!enabled) return;
    // RAF loop to batch motion value updates (reduces event handler work)
    const loop = () => {
      x.set(target.current.x);
      y.set(target.current.y);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafRef.current);
  }, [x, y, enabled]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      target.current.x = e.clientX - 8;
      target.current.y = e.clientY - 8;
    };

    const onOver = (e) => {
      if (e.target && e.target.closest && e.target.closest('[data-cursor]')) {
        setVariant('hover');
      }
    };

    const onOut = (e) => {
      // Determine if the new element under pointer wants cursor state
      const el = document.elementFromPoint?.(e.clientX, e.clientY);
      if (!el || !el.closest || !el.closest('[data-cursor]')) setVariant('default');
    };

    const onDown = () => setVariant('active');
    const onUp = () => setVariant((prev) => (prev === 'active' ? 'hover' : prev));

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  const variants = {
    default: { width: 14, height: 14, opacity: 1, background: 'rgba(255,255,255,0.06)' },
    hover:   { width: 46, height: 46, opacity: 1, background: 'rgba(59,130,246,0.95)' },
    active:  { width: 34, height: 34, opacity: 1, background: 'rgba(59,130,246,0.9)' }
  };

  // Inner dot / icon for contrast
  const innerVariants = {
    default: { scale: 1, background: 'rgba(255,255,255,0.9)' },
    hover: { scale: 0.18, background: 'rgba(0,0,0,0.9)' },
    active: { scale: 0.2, background: 'rgba(0,0,0,0.9)' }
  };

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          x: springX,
          y: springY,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mixBlendMode: 'overlay',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 6px 20px rgba(2,6,23,0.35)'
        }}
        variants={variants}
        animate={variant}
        transition={{ type: 'spring', stiffness: 220, damping: 26 }}
      >
        <motion.span
          style={{
            display: 'block',
            width: 8,
            height: 8,
            borderRadius: '50%'
          }}
          variants={innerVariants}
          animate={variant}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        />
      </motion.div>
    </>
  );
};

export default Cursor;
