import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = [
    { name: 'Journey', href: '#journey' },
    { name: 'Research', href: '#lab' },
    { name: 'Insights', href: '#insights' },
    { name: 'Stack', href: '#stack' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: scrolled ? '10px 0' : '16px 0',
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
            gap: '16px',
            padding: '10px 20px',
            background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'rgba(15, 15, 20, 0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: scrolled
              ? '1px solid rgba(255, 255, 255, 0.12)'
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: scrolled
              ? '0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
              gap: '10px',
              textDecoration: 'none',
              color: 'inherit',
              flexShrink: 0,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.05))',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '800',
                fontFamily: 'var(--font-display)',
                color: '#60A5FA',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.25)',
              }}
            >
              PJ
            </motion.div>
            <span
              className="display-text"
              style={{
                fontSize: '17px',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
              }}
            >
              Pawan Joshi
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '4px 6px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-dim)',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
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

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.a
              whileHover={{ opacity: 0.9, y: -1 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              href="#contact"
              className="btn"
              style={{
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                color: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <MessageSquare size={14} />
              Let's talk
            </motion.a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="mobile-menu-btn"
              style={{
                display: 'none',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                padding: '8px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              marginTop: '8px',
              padding: '16px',
              background: 'rgba(10, 10, 15, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-dim)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  background: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
