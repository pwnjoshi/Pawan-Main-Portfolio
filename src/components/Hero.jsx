import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, FileText, MapPin } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Smooth mouse coordinates for soft spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Gentle, dampened 3D tilt
  const tiltX = useSpring(useMotionValue(0), { stiffness: 80, damping: 25 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 80, damping: 25 });
  
  const rotateX = useTransform(tiltY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(tiltX, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
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
        minHeight: '88vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        paddingTop: 'clamp(90px, 14vw, 120px)',
        paddingBottom: 'clamp(40px, 6vw, 60px)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle cursor spotlight */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.06), transparent 80%)`
          ),
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <div className="hero-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.45fr 1fr',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center'
        }}>
          {/* Left: Grounded, Unslop Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hero-content"
          >
            {/* Location Row */}
            <div className="hero-badges" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '12px',
                color: 'var(--text-dim)',
                fontFamily: 'var(--font-mono)'
              }}>
                <MapPin size={12} style={{ opacity: 0.7 }} />
                Dehradun, India
              </div>
            </div>
            
            {/* Primary Headline */}
            <h1 className="display-text hero-headline" style={{ 
              fontSize: 'clamp(38px, 5.2vw, 62px)', 
              marginBottom: '16px', 
              lineHeight: '1.08',
              letterSpacing: '-0.03em'
            }}>
              Pawan <span className="hero-highlight" style={{ color: '#60A5FA' }}>Joshi</span>
            </h1>
            
            {/* Value Proposition */}
            <p style={{
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              color: '#F1F5F9',
              fontWeight: '500',
              lineHeight: '1.4',
              marginBottom: '16px',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em'
            }}>
              Software engineer specializing in autonomous AI agents and cloud infrastructure.
            </p>

            {/* Context Narrative */}
            <p className="hero-subtext" style={{ 
              fontSize: '15px', 
              color: 'var(--text-dim)', 
              maxWidth: '540px', 
              marginBottom: '32px',
              lineHeight: '1.65'
            }}>
              Co-Founder at <a href="https://techsangi.com.np" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>Tech Sangi</a>, founding leader of the AWS Student Builder Group at Graphic Era University, and former AI Engineering Intern at Infosys Springboard.
            </p>
            
            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '36px' }}>
              <motion.a 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                href="#lab" 
                className="btn btn-primary"
                style={{
                  background: '#FFFFFF',
                  color: '#09090B',
                  fontWeight: '600',
                  fontSize: '14px',
                  padding: '11px 22px',
                  borderRadius: '10px',
                  boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.12)'
                }}
              >
                <span>Explore Projects</span>
                <ArrowRight size={15} />
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                href="/Pawan_Joshi_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontWeight: '500',
                  fontSize: '14px',
                  padding: '11px 20px',
                  borderRadius: '10px',
                  gap: '8px'
                }}
              >
                <FileText size={15} style={{ color: '#60A5FA' }} />
                <span>Resume (PDF)</span>
              </motion.a>
            </div>

            {/* Grounded Metrics Ticker */}
            <div className="hero-metrics-ticker">
              <div className="hero-metric-item">
                <div className="hero-metric-num">450+</div>
                <div className="hero-metric-label">Builders Reached</div>
              </div>
              <div className="hero-metric-divider" />
              <div className="hero-metric-item">
                <div className="hero-metric-num">300+</div>
                <div className="hero-metric-label">Students Mentored</div>
              </div>
              <div className="hero-metric-divider" />
              <div className="hero-metric-item">
                <div className="hero-metric-num accent">4x</div>
                <div className="hero-metric-label">Cloud &amp; AI Certified</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Refined, Clean Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual"
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              perspective: '1000px',
            }}
          >
            <motion.div 
              style={{ 
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '1',
                borderRadius: '24px',
                padding: '6px',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(59, 130, 246, 0.1)',
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.2s ease-out'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '18px',
                overflow: 'hidden',
                position: 'relative',
                background: '#0F1117'
              }}>
                <img 
                  src="/hero-avatar.png" 
                  alt="Pawan Joshi - AI & Cloud Engineer" 
                  width="420"
                  height="420"
                  decoding="async"
                  loading="eager"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Subtle bottom gradient to ground the portrait */}
                <div 
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(9, 9, 11, 0.3) 0%, transparent 40%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
