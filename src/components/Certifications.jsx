import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jul 2026",
    badgeUrl: "https://www.credly.com/badges/34758bd1-d052-4760-9d70-845e54f44e8c/linked_in_profile",
    category: "Cloud Architecture"
  },
  {
    title: "Google Cloud Generative AI Leader",
    issuer: "Google Cloud",
    date: "Issued Jul 2026",
    badgeUrl: "https://www.credly.com/badges/b563155e-bb45-463f-bfde-2c396c536df8/linked_in_profile",
    category: "Generative AI"
  },
  {
    title: "Nebius Agentic AI Builder Certification",
    issuer: "Nebius Academy",
    date: "Issued Jul 2026",
    badgeUrl: "https://www.credly.com/badges/74ddfbd8-2a2e-4992-aa4c-714f1481d609/linked_in_profile",
    category: "Agentic Systems"
  },
  {
    title: "Nebius AI CloudOps Engineer Certification",
    issuer: "Nebius Academy",
    date: "Issued Jul 2026",
    badgeUrl: "https://www.credly.com/badges/9713db14-bab7-4e84-b0fc-3cd9a89a6f05/linked_in_profile",
    category: "CloudOps & ML"
  },
  {
    title: "AWS AI & ML Scholars Challenge",
    issuer: "Udacity & AWS",
    date: "Issued Mar 2026",
    badgeUrl: "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/Challenge%20Completion%20Badge_Light.png",
    category: "Machine Learning"
  },
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    date: "Issued Dec 2025",
    badgeUrl: "https://www.credly.com/badges/2c65372b-5ac0-4ba0-b04d-8a64dc6c2876/linked_in_profile",
    category: "Leadership & Strategy"
  },
  {
    title: "Principles of Generative AI Certification",
    issuer: "Infosys Springboard",
    date: "Issued Oct 2025",
    badgeUrl: "https://infyspringboard.onwingspan.com",
    category: "Foundational AI"
  },
  {
    title: "Notion AI Certified",
    issuer: "Notion",
    date: "Issued May 2026",
    badgeUrl: "https://verify.skilljar.com/c/d6texn532eym",
    category: "Productivity AI"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-gap" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px' }}>
          <div className="mono-label" style={{ marginBottom: '12px', color: '#60A5FA' }}>
            / 03 &mdash; CREDENTIALS
          </div>
          <h2 className="display-text" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', marginBottom: '16px' }}>
            Certifications &amp; Badges
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px', maxWidth: '580px', lineHeight: '1.6' }}>
            Officially verified industry credentials across Cloud Computing, Generative AI, CloudOps, and Engineering Leadership.
          </p>
        </div>

        {/* 3-Column Clean Card Grid */}
        <div className="cert-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '20px'
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-30px" }}
              className="elite-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                minHeight: '210px'
              }}
            >
              <div>
                {/* Category Pill + Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: 'rgba(59, 130, 246, 0.08)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    color: '#60A5FA',
                    fontSize: '11px',
                    fontWeight: '600',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {cert.category}
                  </span>
                  <ShieldCheck size={16} style={{ color: 'rgba(255, 255, 255, 0.35)' }} />
                </div>

                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px', lineHeight: '1.35' }}>
                  {cert.title}
                </h3>
                
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '500', marginBottom: '4px' }}>
                  {cert.issuer}
                </p>
                
                <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: 0, fontFamily: 'var(--font-mono)' }}>
                  {cert.date}
                </p>
              </div>

              {cert.badgeUrl && (
                <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={cert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--text-dim)',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={11} />
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
