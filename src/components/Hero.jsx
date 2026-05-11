import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Mouse position for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const tiltX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(tiltY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(tiltX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Spotlight position
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // Tilt calculations (-0.5 to 0.5)
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(xPct);
    tiltY.set(yPct);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        paddingTop: '40px',
        paddingBottom: '40px',
        overflow: 'hidden',
        perspective: '1000px'
      }}
    >
      {/* Dynamic Spotlight */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
          ),
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <div className="hero-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-content"
            style={{ gridColumn: 'span 6' }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="hero-badges"
              style={{ cursor: 'default' }}
            >
              <span className="mono-label" style={{ 
                background: 'rgba(59, 130, 246, 0.1)', 
                padding: '6px 14px', 
                borderRadius: '100px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
              }}>
                <Sparkles size={12} style={{ marginRight: '6px', display: 'inline' }} />
                Student & Architect
              </span>
              <span className="mono-label" style={{ color: 'rgba(255,255,255,0.4)' }}>/ 2026 EDITION</span>
            </motion.div>
            
            <h1 className="display-text hero-headline" style={{ fontSize: 'clamp(32px, 5vw, 60px)', marginBottom: '24px' }}>
              Building the next generation of <span style={{ color: 'var(--accent)' }}>Autonomous Intelligence.</span>
            </h1>
            
            <p className="hero-subtext" style={{ 
              fontSize: '18px', 
              color: 'var(--text-dim)', 
              maxWidth: '500px', 
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Hi, I'm <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Pawan Joshi</span>. Currently engineering at Graphic Era, 
              building <span style={{ color: 'var(--primary)' }}>Tech Sangi</span> and leading the AWS Student Builder Group.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                href="#lab" className="btn btn-primary"
              >
                View the Lab <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.95 }}
                href="#journey" className="btn btn-secondary"
              >
                The Journey
              </motion.a>
            </div>
          </motion.div>

          {/* Right Visual (3D Avatar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-visual"
            style={{ 
              gridColumn: 'span 6',
              display: 'flex',
              justifyContent: 'center',
              perspective: '1000px'
            }}
          >
            <motion.div 
              style={{ 
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)',
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
              }}
            >
              <img 
                src="/hero-avatar.png" 
                alt="Pawan Joshi" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'translateZ(-20px)' }}
              />
              
              <div style={{ 
                position: 'absolute', bottom: '20px', left: '20px', right: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                padding: '12px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transform: 'translateZ(30px)'
              }}>
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} 
                />
                <span className="mono-label" style={{ fontSize: '9px', color: '#fff' }}>STATUS: ARCHITECTING FUTURE</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
