import React from 'react';
import { motion } from 'framer-motion';

const logbookEntries = [
  {
    date: "2024 — PRESENT",
    title: "Building Tech Sangi",
    role: "Co-Founder & Tech Lead",
    desc: "Architecting custom technical workflows and leading development of 8+ enterprise-grade products.",
    link: "https://techsangi.com.np"
  },
  {
    date: "2025 — PRESENT",
    title: "AWS Student Builder Leader Group",
    role: "Group Leader @ Graphic Era University",
    desc: "Bridging the gap between academic theory and cloud industry standards through hands-on architecture sessions.",
    verifyLink: "https://builder.aws.com/community/student-builder-groups"
  },
  {
    date: "2025 — 2026",
    title: "Infosys Springboard AI Intern",
    role: "Autonomous Cognitive Systems",
    desc: "Developing a Deep Cognitive Task Framework using LangGraph. Implementing Virtual File Systems to mitigate LLM context window limitations.",
    verifyLink: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01454259343803187223/14bb99d1-1b1d-45b5-badf-839bae33f2b5.pdf"
  },
  {
    date: "2025 — PRESENT",
    title: "Google Student Ambassador",
    role: "AI Awareness & Liaison",
    desc: "Representing Google Gemini on campus and promoting GenAI awareness through peer-learning sessions and workshops."
  },
  {
    date: "2025",
    title: "Google Cloud Arcade Mentor",
    role: "Technical Mentorship",
    desc: "Guided 100+ students through hands-on GCP labs, mastering cloud tools and earning industry skill badges."
  }
];

const Experience = () => {
  return (
    <section id="journey" className="section-gap">
      <div className="container">
        <div className="mono-label" style={{ marginBottom: '16px' }}>/ LOGBOOK</div>
        <h2 className="display-text" style={{ fontSize: '48px', marginBottom: '80px' }}>The Journey</h2>
        
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
                    <a href={entry.link} target="_blank" rel="noopener noreferrer" style={{
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
                    <a href={entry.verifyLink} target="_blank" rel="noopener noreferrer" style={{
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
