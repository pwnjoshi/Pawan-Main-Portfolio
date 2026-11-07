import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';

const logbookEntries = [
  {
    date: "DEC 2025 — FEB 2026",
    title: "AI Engineering Intern",
    company: "Infosys Springboard",
    location: "Remote, India",
    desc: "Built a stateful multi-step agent framework in LangGraph that decomposed complex tasks autonomously, landing ~80% accuracy. Overcame context-overflow crashes on jobs with 10,000+ log lines by architecting an in-memory virtual file system, and integrated LangSmith observability to push multi-step production runs past a 70% success rate.",
    skills: ["LangGraph", "LangSmith", "Python", "ReAct Loops", "VFS"],
    verifyLink: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01454259343803187223/14bb99d1-1b1d-45b5-badf-839bae33f2b5.pdf"
  },
  {
    date: "NOV 2025 — PRESENT",
    title: "Founding Campus Leader",
    company: "AWS Student Builder Group",
    location: "Graphic Era University",
    current: true,
    desc: "Founded the campus AWS builder group and designed hands-on cloud curriculums covering Amazon EC2, S3, IAM, CloudFront, Route 53, and CLF-C02 certification prep for 400+ members. Mentored peers on serverless architecture and production best practices.",
    skills: ["AWS EC2", "Amazon S3", "IAM", "CloudFront", "Serverless"],
    link: "https://builder.aws.com/community/student-builder-groups"
  },
  {
    date: "NOV 2024 — PRESENT",
    title: "Co-Founder & Technical Lead",
    company: "Tech Sangi Pvt. Ltd.",
    location: "Dehradun, India",
    current: true,
    desc: "Lead engineering of cloud-native web systems, intelligent automation, and client platforms. Architected and deployed 8+ production products, managing end-to-end full-stack architectures, payment gateways, and cloud deployment pipelines.",
    skills: ["React", "Node.js", "AWS", "Stripe", "DevOps"],
    link: "https://techsangi.com.np"
  },
  {
    date: "OCT 2025 — PRESENT",
    title: "Google Student Ambassador",
    company: "Google / Graphic Era",
    location: "Campus",
    current: true,
    desc: "Drive campus peer learning and developer awareness around Google Gemini and agentic AI tooling. Organize hands-on coding sessions, AI workshops, and collaborative project build sprints for student developers.",
    skills: ["Google Gemini API", "GenAI", "Developer Advocacy"]
  },
  {
    date: "AUG 2025 — SEP 2025",
    title: "Google Cloud Arcade Facilitator",
    company: "Google Cloud Skills Boost",
    location: "Virtual",
    desc: "Guided 300+ students through hands-on Google Cloud Platform architecture labs, GCP compute deployments, and skill badge pathways with active troubleshooting support.",
    skills: ["Google Cloud Platform", "Cloud Architecture", "Mentorship"]
  }
];

const Experience = () => {
  return (
    <section id="journey" className="section-gap" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px' }}>
          <div className="mono-label" style={{ marginBottom: '12px', color: '#60A5FA' }}>
            / 01 &mdash; WORK &amp; LEADERSHIP
          </div>
          <h2 className="display-text" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', marginBottom: '16px' }}>
            Experience &amp; Leadership
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px', maxWidth: '560px', lineHeight: '1.6' }}>
            Track record in autonomous AI systems, cloud infrastructure leadership, and production software engineering.
          </p>
        </div>
        
        {/* Ledger Entries */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {logbookEntries.map((entry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="elite-card journey-item"
              style={{ 
                padding: '28px 32px',
                borderRadius: '16px',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '32px',
                alignItems: 'start',
                position: 'relative'
              }}
            >
              {/* Left Column: Date & Meta */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: entry.current ? '#4ADE80' : 'var(--text-dim)',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  {entry.current && (
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
                  )}
                  {entry.date}
                </div>
                
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'var(--font-mono)' }}>
                  {entry.location}
                </div>
              </div>

              {/* Right Column: Title, Org, Description, Skills */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FFFFFF', margin: 0, letterSpacing: '-0.01em' }}>
                      {entry.title}
                    </h3>
                    <div style={{ fontSize: '14px', color: '#60A5FA', fontWeight: '500', marginTop: '2px' }}>
                      {entry.company}
                    </div>
                  </div>

                  {/* Verification / Outbound Link */}
                  {entry.verifyLink && (
                    <a 
                      href={entry.verifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-link"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#60A5FA',
                        background: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <CheckCircle size={13} />
                      <span>Verify Credential</span>
                    </a>
                  )}

                  {entry.link && (
                    <a 
                      href={entry.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-link"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#F1F5F9',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>Visit Site</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: '1.65', margin: '12px 0 16px', maxWidth: '720px' }}>
                  {entry.desc}
                </p>

                {/* Skill tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {entry.skills.map((skill) => (
                    <span 
                      key={skill}
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
