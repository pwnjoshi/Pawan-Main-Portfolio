import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        padding: '12px 0', 
        background: 'rgba(5, 5, 5, 0.8)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5, backgroundColor: 'var(--accent)', color: '#000' }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ 
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontSize: '16px', 
              fontWeight: '800',
              fontFamily: 'var(--font-display)',
              color: 'var(--primary)',
              cursor: 'pointer',
              userSelect: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            PJ
          </motion.div>
          <span className="display-text" style={{ fontSize: '20px', letterSpacing: '-0.02em' }}>Pawan Joshi</span>
        </div>
        
        <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
          {['Lab', 'Journey', 'Research', 'Stack'].map((item) => (
            <a 
              key={item} 
              href={item === 'Research' ? '#terminal' : `#${item.toLowerCase()}`}
              className="mono-label"
              style={{ textDecoration: 'none', color: 'var(--text-dim)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-dim)'}
            >
              {item}
            </a>
          ))}
        </div>
        
        <a href="#contact" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>
          Let's talk
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
