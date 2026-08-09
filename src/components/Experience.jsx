import { motion } from 'framer-motion';

const logbookEntries = [
  {
    date: "NOV 2025 — PRESENT",
    title: "AWS Student Builder Group Leader",
    role: "Founder & Campus Leader @ Graphic Era University",
    desc: "Leading the official AWS Student Builder Group. Built a thriving builder community focused on cloud computing & AI. Conducted hands-on architecture sessions with Amazon S3, CloudFront, IAM, Route 53, and CLF-C02 preparation.",
    verifyLink: "https://builder.aws.com/community/student-builder-groups"
  },
  {
    date: "OCT 2025 — PRESENT",
    title: "Google Student Ambassador",
    role: "Google Campus Ambassador @ Graphic Era",
    desc: "Promoting AI awareness and peer learning around Google Gemini and emerging AI tools. Organizing hands-on technical workshops and cultivating a collaborative developer ecosystem on campus."
  },
  {
    date: "NOV 2024 — PRESENT",
    title: "Co-Founder",
    role: "Tech Sangi Pvt. Ltd.",
    desc: "Leading development of AI-powered, cloud-native software systems and automated workflows. Architected and delivered 8+ enterprise products focused on intelligent automation and developer tooling.",
    link: "https://techsangi.com.np"
  },
  {
    date: "DEC 2025 — FEB 2026",
    title: "Infosys Springboard AI Intern",
    role: "Autonomous Cognitive Systems Intern",
    desc: "Developed a Deep Cognitive Task Framework utilizing LangGraph agent orchestration, ReAct reasoning loops, and Virtual File Systems to overcome context window limitations for long-context execution.",
    verifyLink: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01454259343803187223/14bb99d1-1b1d-45b5-badf-839bae33f2b5.pdf"
  },
  {
    date: "AUG 2025 — SEP 2025",
    title: "Google Cloud Arcade Mentor",
    role: "Google Cloud Skills Boost",
    desc: "Mentored 300+ students through hands-on GCP labs, cloud learning pathways, and skill badges. Guided peers in core cloud deployment and troubleshooting."
  }
];

const Experience = () => {
  return (
    <section id="journey" className="section-gap">
      <div className="container">
        <div className="mono-label" style={{ marginBottom: '16px' }}>/ EXPERIENCE & LEADERSHIP</div>
        <h2 className="display-text" style={{ fontSize: '48px', marginBottom: '80px' }}>Work &amp; Leadership</h2>
        
        <div style={{ borderTop: '1px solid var(--border-hairline)' }}>
          {logbookEntries.map((entry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ x: 8, backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', paddingLeft: '16px', paddingRight: '16px' }}
              className="journey-item"
              data-cursor="project"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 2fr', 
                padding: '40px 0', 
                borderBottom: '1px solid var(--border-hairline)',
                gap: '40px',
                cursor: 'default'
              }}
            >
              <div className="mono-label" style={{ color: 'var(--text-dim)', fontSize: '14px' }}>
                {entry.date}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h3 className="display-text" style={{ fontSize: '24px', margin: 0 }}>{entry.title}</h3>
                  {entry.link && (
                    <a href={entry.link} target="_blank" rel="noopener noreferrer" data-cursor="link" style={{
                      fontSize: '12px',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      border: '1px solid var(--accent)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontWeight: '600'
                    }}>
                      Visit
                    </a>
                  )}
                  {entry.verifyLink && (
                    <a href={entry.verifyLink} target="_blank" rel="noopener noreferrer" data-cursor="link" style={{
                      fontSize: '12px',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      border: '1px solid var(--accent)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontWeight: '600'
                    }}>
                      Verify
                    </a>
                  )}
                </div>
                <p style={{ color: 'var(--accent)', fontWeight: '500', marginBottom: '16px', fontSize: '14px' }}>{entry.role}</p>
                <p style={{ color: 'var(--text-dim)', maxWidth: '500px', lineHeight: '1.6' }}>{entry.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
