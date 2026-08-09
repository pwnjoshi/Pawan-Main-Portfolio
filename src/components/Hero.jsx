import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, FileText } from 'lucide-react';

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
          gridTemplateColumns: '1.6fr 0.9fr',
          gap: 'clamp(24px, 4vw, 50px)',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-content"
            style={{ maxWidth: '100%', overflow: 'visible' }}
          >
            <div className="hero-badges">
              <span className="hero-role-badge mono-label">
                <Cpu size={12} style={{ marginRight: '6px', display: 'inline', opacity: 0.85, verticalAlign: '-1px' }} />
                Student &amp; Architect
              </span>
              <span className="hero-edition-tag mono-label">2026</span>
            </div>
            
            <h1 className="display-text hero-headline" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', marginBottom: '24px', lineHeight: '1.1' }}>
              I am <span className="hero-highlight">Pawan Joshi.</span>
            </h1>
            
            <p className="hero-subtext" style={{ 
              fontSize: '18px', 
              color: 'var(--text-dim)', 
              maxWidth: '520px', 
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Engineering at Graphic Era, building <span style={{ color: '#60A5FA', fontWeight: '500' }}>Tech Sangi</span>, and leading the AWS Student Builder Group.
            </p>
            
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '32px' }}>
              <motion.a 
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                href="#lab" 
                className="btn btn-primary" 
                data-cursor="link"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                href="https://linkedin.com/in/pwnjoshi" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary" 
                data-cursor="link"
                style={{ gap: '6px' }}
              >
                <FileText size={15} />
                <span>Resume / Bio</span>
              </motion.a>
            </div>

            {/* Quick Metrics Ticker */}
            <div style={{
              display: 'flex',
              gap: '24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>8+</div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Products Built</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
              <div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>300+</div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Students Mentored</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
              <div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#60A5FA', fontFamily: 'var(--font-display)' }}>6+</div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Cloud/AI Badges</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual (3D Avatar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-visual"
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              perspective: '1000px',
              minWidth: 0
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
                width="420"
                height="420"
                decoding="async"
                loading="eager"
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
