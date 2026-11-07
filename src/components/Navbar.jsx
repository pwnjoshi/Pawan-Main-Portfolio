import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Scrolled state for background blur
      setScrolled(currentY > 20);

      // Smart hide/reveal on scroll
      if (currentY > 100) {
        if (currentY > lastScrollY.current + 8) {
          setHidden(true);  // scrolling down
        } else if (currentY < lastScrollY.current - 8) {
          setHidden(false); // scrolling up
        }
      } else {
        setHidden(false); // near top
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Experience', href: '#journey' },
    { name: 'Projects', href: '#lab' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Articles', href: '#insights' },
    { name: 'Stack', href: '#stack' },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '10px 0' : '16px 0',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease',
      }}
    >
      <div className="container">
        <nav
          role="navigation"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            padding: '8px 16px',
            background: scrolled ? 'rgba(10, 11, 15, 0.85)' : 'rgba(15, 17, 23, 0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '14px',
            border: scrolled
              ? '1px solid rgba(255, 255, 255, 0.12)'
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: scrolled
              ? '0 16px 36px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
              : '0 8px 24px rgba(0, 0, 0, 0.25)',
            transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Left: Brand Identity */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              flexShrink: 0,
              zIndex: 2,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <span
              className="display-text"
              style={{
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
              }}
            >
              Pawan Joshi
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <div
            className="nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link-item"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right: CTA Button & Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2, flexShrink: 0 }}>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="btn nav-cta mobile-cta-hide"
              style={{
                padding: '7px 14px',
                fontSize: '13px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                color: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
              }}
            >
              <MessageSquare size={13} />
              <span>Let's talk</span>
            </motion.a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="mobile-menu-btn"
              style={{
                display: 'none',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                padding: '7px',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: '8px',
                padding: '14px',
                background: 'rgba(10, 11, 15, 0.96)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: '#E2E8F0',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    background: 'rgba(255, 255, 255, 0.03)',
                    transition: 'background 0.2s ease',
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '4px',
                }}
              >
                <MessageSquare size={14} />
                <span>Let's talk</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
