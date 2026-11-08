import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Menu, X } from 'lucide-react';

const easeOutCubic = [0.16, 1, 0.3, 1];
const easeInOutCubic = [0.4, 0, 0.2, 1];

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

      // Smart hide/reveal on scroll (on-screen movement uses ease in-out)
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
      transition={{ duration: 0.45, ease: easeOutCubic }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '10px 0' : '16px 0',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.32s cubic-bezier(0.4, 0, 0.2, 1), padding 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
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
            transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
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
            {/* Scale buttons to 0.97 on press */}
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
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

            {/* Mobile Menu Toggle Button with Scale 0.97 on Press */}
            <motion.button
              whileTap={{ scale: 0.97 }}
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
                position: 'relative',
                overflow: 'hidden',
                width: '34px',
                height: '34px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Crossfade icons with scale and blur */}
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.8, filter: 'blur(3px)' }}
                    transition={{ duration: 0.15, ease: easeOutCubic }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.8, filter: 'blur(3px)' }}
                    transition={{ duration: 0.15, ease: easeOutCubic }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Dropdown Popover */}
        {/* Rules Applied:
            1. Dropdown at 150-250ms (entrance: 200ms).
            2. Exit about 20% shorter than entrance (exit: 160ms).
            3. Start popovers at scale 0.95.
            4. Transition in from the trigger not from the center (transformOrigin: top right).
            5. Transition out to the trigger. Don't fade into the center.
            6. Stagger list rows by 30 ms.
        */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                scale: 0.95, 
                y: -6,
                transition: { duration: 0.16, ease: easeOutCubic } // 20% shorter than 0.2s entrance
              }}
              transition={{ duration: 0.2, ease: easeOutCubic }}
              style={{
                transformOrigin: 'top right', // From the trigger not from the center
                marginTop: '8px',
                padding: '12px',
                background: 'rgba(10, 11, 15, 0.96)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.18, 
                    delay: index * 0.03, // Stagger list rows by 30 ms
                    ease: easeOutCubic 
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    textDecoration: 'none',
                    color: '#E2E8F0',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    background: 'rgba(255, 255, 255, 0.03)',
                    transition: 'background 0.15s ease',
                  }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.18, 
                  delay: navItems.length * 0.03, // Stagger by 30 ms
                  ease: easeOutCubic 
                }}
                whileTap={{ scale: 0.97 }}
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
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
