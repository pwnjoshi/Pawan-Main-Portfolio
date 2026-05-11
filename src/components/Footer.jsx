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
            <div className="footer-links" style={{ display: 'flex', gap: 'clamp(12px, 4vw, 32px)', justifyContent: 'flex-end', marginBottom: '20px', flexWrap: 'nowrap', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <a href="https://linkedin.com/in/pwnjoshi" className="mono-label" style={{ textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, fontSize: 'clamp(11px, 2.5vw, 13px)' }}>LinkedIn</a>
              <a href="https://github.com/pwnjoshi" className="mono-label" style={{ textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, fontSize: 'clamp(11px, 2.5vw, 13px)' }}>GitHub</a>
              <a href="https://x.com/pwnjoshidev" className="mono-label" style={{ textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, fontSize: 'clamp(11px, 2.5vw, 13px)' }}>Twitter</a>
              <a href="https://builder.aws.com/community/@pawanjoshidev" target="_blank" rel="noopener noreferrer" className="mono-label" style={{ textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, fontSize: 'clamp(11px, 2.5vw, 13px)' }}>AWS Builder</a>
            </div>
            <p className="mono-label" style={{ color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>© 2026 PAWAN JOSHI / ENGINEERED FOR IMPACT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
