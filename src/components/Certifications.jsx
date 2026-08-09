import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jul 2026 · Expires Jul 2029",
    badgeUrl: "https://www.credly.com/badges/34758bd1-d052-4760-9d70-845e54f44e8c/linked_in_profile",
    category: "Cloud Architecture"
  },
  {
    title: "Google Cloud Generative AI Leader Certification",
    issuer: "Google Cloud",
    date: "Issued Jul 2026 · Expires Jul 2029",
    badgeUrl: "https://www.credly.com/badges/b563155e-bb45-463f-bfde-2c396c536df8/linked_in_profile",
    category: "Artificial Intelligence"
  },
  {
    title: "Nebius Agentic AI Builder Certification",
    issuer: "Nebius Academy",
    date: "Issued Jul 2026",
    badgeUrl: "https://www.credly.com/badges/74ddfbd8-2a2e-4992-aa4c-714f1481d609/linked_in_profile",
    category: "AI Engineering"
  },
  {
    title: "Nebius AI CloudOps Engineer Certification",
    issuer: "Nebius Academy",
    date: "Issued Jul 2026 · Expires Jul 2029",
    badgeUrl: "https://www.credly.com/badges/9713db14-bab7-4e84-b0fc-3cd9a89a6f05/linked_in_profile",
    category: "CloudOps & AI"
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
    badgeUrl: null,
    category: "Generative AI"
  },
  {
    title: "Notion AI Badge",
    issuer: "Notion",
    date: "Issued May 2026 · Expires May 2028",
    badgeUrl: "https://verify.skilljar.com/c/d6texn532eym",
    category: "Productivity AI"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-gap" style={{ background: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
          <div className="mono-label" style={{ marginBottom: '16px' }}>/ VERIFIED CREDENTIALS</div>
          <h2 className="display-text" style={{ fontSize: '48px', marginBottom: '16px' }}>Certifications &amp; Badges</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-dim)', maxWidth: '600px' }}>
            Official industry certifications across Cloud Architecture, Generative AI, CloudOps, and Leadership.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="elite-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(15, 15, 20, 0.6)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    color: '#60A5FA',
                    fontSize: '11px',
                    fontWeight: '600',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {cert.category}
                  </div>
                  <Award size={18} style={{ color: 'rgba(255, 255, 255, 0.4)' }} />
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px', lineHeight: '1.3' }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: '500', marginBottom: '4px' }}>
                  {cert.issuer}
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: 0 }}>
                  {cert.date}
                </p>
              </div>

              {cert.badgeUrl && (
                <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <a
                    href={cert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      color: 'var(--text-dim)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={12} />
                  </a>
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
