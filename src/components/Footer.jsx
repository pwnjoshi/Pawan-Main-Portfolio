import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={{ padding: '80px 0 60px', borderTop: '1px solid var(--border-hairline)' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end' }}>
          <div>
            <h2 className="display-text" style={{ fontSize: 'clamp(32px, 5vw, 64px)', marginBottom: '32px' }}>Let's build <span style={{ color: 'var(--accent)' }}>together.</span></h2>
            <a href="mailto:me@joshipawan.com.np" className="display-text" style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--primary)', textDecoration: 'none', borderBottom: '2px solid var(--accent)' }}>
              me@joshipawan.com.np
            </a>
          </div>
          
          <div className="footer-bottom" style={{ textAlign: 'right' }}>
            <div className="footer-links" style={{ display: 'flex', gap: '32px', justifyContent: 'flex-end', marginBottom: '40px', flexWrap: 'wrap' }}>
              <a href="https://linkedin.com/in/pwnjoshi" className="mono-label" style={{ textDecoration: 'none' }}>LinkedIn</a>
              <a href="https://github.com/pwnjoshi" className="mono-label" style={{ textDecoration: 'none' }}>GitHub</a>
              <a href="https://x.com/pwnjoshidev" className="mono-label" style={{ textDecoration: 'none' }}>Twitter</a>
              <a href="https://builder.aws.com/community/@pawanjoshidev" target="_blank" rel="noopener noreferrer" className="mono-label" style={{ textDecoration: 'none' }}>AWS Builder</a>
            </div>
            <p className="mono-label" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2026 PAWAN JOSHI / ENGINEERED FOR IMPACT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
