import React, { useEffect } from 'react';

const Preloader = ({ onFinish }) => {
  // call onFinish after animation fallback (in case load event is missed)
  useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), 1200);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="preloader-root" role="status" aria-label="Loading">
      <div className="preloader-box">
        <svg className="preloader-logo" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="preloader-title">Pawan Joshi</div>
        <div className="preloader-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
