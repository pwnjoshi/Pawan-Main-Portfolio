import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Scrolled state for background tint
      setScrolled(currentY > 20);

      // Hide/reveal logic: hide on scroll down, show on scroll up
      if (currentY > 80) {
        if (currentY > lastScrollY.current + 5) {
          setHidden(true);  // scrolling down
        } else if (currentY < lastScrollY.current - 5) {
          setHidden(false); // scrolling up
        }
      } else {
        setHidden(false); // always show near top
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
    { name: 'Insights', href: '#insights' },
    { name: 'Tech Stack', href: '#stack' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '8px 0' : '16px 0',
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
          {/* Left: Brand Name */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              flexShrink: 0,
              zIndex: 2,
            }}
          >
            <span
              className="display-text"
              style={{
                fontSize: '18px',
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
              gap: '4px',
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
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-dim)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  fontFamily: 'var(--font-body)',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-dim)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right: CTA Button & Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', zIndex: 2, flexShrink: 0 }}>
            <motion.a
              whileHover={{ opacity: 0.9, y: -1 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              href="#contact"
              className="btn nav-cta"
              style={{
                padding: '7px 15px',
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
                flexShrink: 0,
              }}
            >
              <MessageSquare size={13} />
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
