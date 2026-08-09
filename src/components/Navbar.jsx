import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="container">
        <nav
          role="navigation"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            background: scrolled ? 'rgba(10, 10, 15, 0.75)' : 'rgba(15, 15, 20, 0.4)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '16px',
            border: scrolled
              ? '1px solid rgba(255, 255, 255, 0.12)'
              : '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: scrolled
              ? '0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Brand Logo & Name */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.05))',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: '800',
                fontFamily: 'var(--font-display)',
                color: '#60A5FA',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.25)',
                position: 'relative',
              }}
            >
              PJ
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="display-text"
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Pawan Joshi
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div
            className="nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '4px 6px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {[
              { name: 'Journey', href: '#journey' },
              { name: 'Research', href: '#research' },
              { name: 'Stack', href: '#stack' },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-dim)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-dim)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Call to Action button */}
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="btn"
            style={{
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
              color: '#FFFFFF',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <MessageSquare size={14} />
            Let's talk
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
