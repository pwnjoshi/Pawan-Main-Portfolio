import { useEffect } from 'react';

// Lightweight skeleton preloader that shows until first paint.
const Preloader = ({ onFinish }) => {
  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (!cancelled) onFinish && onFinish();
    };

    try {
      const paints = performance.getEntriesByType ? performance.getEntriesByType('paint') : [];
      const fcp = paints && paints.find && paints.find(p => p.name === 'first-contentful-paint');
      if (fcp) {
        // If FCP already recorded, wait for next frame then finish
        requestAnimationFrame(() => requestAnimationFrame(finish));
      } else {
        // Otherwise wait two RAFs (first paint) as a lightweight heuristic
        const raf1 = requestAnimationFrame(() => {
          requestAnimationFrame(finish);
        });
        // Fallback in case RAFs don't fire
        const fallback = setTimeout(finish, 1500);
        return () => {
          cancelled = true;
          cancelAnimationFrame(raf1);
          clearTimeout(fallback);
        };
      }
    } catch {
      const t = setTimeout(finish, 1200);
      return () => clearTimeout(t);
    }

    return () => { cancelled = true; };
  }, [onFinish]);

  return (
    <div className="preloader-root" role="status" aria-label="Loading">
      <div style={{ width: '90%', maxWidth: 1100 }}>
        <div style={{ height: 64, marginBottom: 24 }} className="skeleton-line" />
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <div style={{ width: 420, height: 420, borderRadius: 20 }} className="skeleton-rect" />
          <div style={{ flex: 1 }}>
            <div style={{ height: 36, width: '70%', marginBottom: 12 }} className="skeleton-line" />
            <div style={{ height: 18, width: '50%', marginBottom: 20 }} className="skeleton-line" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              <div style={{ height: 120 }} className="skeleton-rect" />
              <div style={{ height: 120 }} className="skeleton-rect" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
