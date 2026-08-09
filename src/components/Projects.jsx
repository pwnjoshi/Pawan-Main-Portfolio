import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, ExternalLink } from 'lucide-react';

const labs = [
  {
    id: "01",
    title: "Autonomous Cognitive Engine",
    desc: "A deep research framework utilizing ReAct loops and virtual file systems for autonomous agentic reasoning.",
    type: "AI ARCHITECTURE",
    tags: ["LangGraph", "Python", "RAG", "ReAct"],

    color: "#8B5CF6",
    link: "#",
    github: "#"
  },
  {
    id: "02",
    title: "InterviewGen AI",
    desc: "End-to-end interview automation platform with multi-stage evaluation and stateful candidate management.",
    type: "AUTOMATION",
    tags: ["Django", "OpenAI", "PostgreSQL", "REST API"],

    color: "#3B82F6",
    link: "#",
    github: "#"
  },
  {
    id: "03",
    title: "ARTAMS",
    desc: "Real-time attendance engine engineered for AWS high-availability with O(1) lookup performance.",
    type: "INFRASTRUCTURE",
    tags: ["AWS", "Lambda", "DynamoDB", "CloudWatch"],

    color: "#06B6D4",
    link: "#",
    github: "#"
  },
  {
    id: "04",
    title: "Tech Sangi Platform",
    desc: "Full-stack SaaS product powering Tech Sangi Pvt. Ltd. — from community tools to analytics dashboards.",
    type: "SAAS / STARTUP",
    tags: ["React", "Node.js", "AWS", "Stripe"],

    color: "#F59E0B",
    link: "https://techsangi.com.np",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="lab" className="section-gap" style={{ background: '#080808' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="mono-label" style={{ marginBottom: '16px' }}>/ FEATURED PROJECTS</div>
            <h2 className="display-text" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
              Projects & <span style={{ color: 'var(--accent)' }}>Systems</span>
            </h2>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: '15px', maxWidth: '360px', lineHeight: '1.6' }}>
            Production-grade systems built from scratch — from AI reasoning engines to cloud-native infrastructure.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {labs.map((lab, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="elite-card lab-card"
                data-cursor="project"
                style={{ 
                  padding: '40px', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '340px',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = `${lab.color}33`;
                  e.currentTarget.style.boxShadow = `0 20px 60px -15px ${lab.color}15, inset 0 1px 0 ${lab.color}20`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top Row: Number + Type Label */}
                <div>
                  <div className="mono-label" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '10px', marginBottom: '24px' }}>
                    {lab.id} / {lab.type}
                  </div>

                  {/* Title & Description */}
                  <h3 className="display-text" style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', marginBottom: '14px', lineHeight: '1.2' }}>
                    {lab.title}
                  </h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                    {lab.desc}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                    {lab.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-dim)',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Action Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <a
                    href={lab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: `${lab.color}15`,
                      color: lab.color,
                      fontSize: '12px',
                      fontWeight: '600',
                      fontFamily: 'var(--font-body)',
                      textDecoration: 'none',
                      border: `1px solid ${lab.color}25`,
                      transition: 'background 0.2s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = `${lab.color}25`}
                    onMouseOut={(e) => e.currentTarget.style.background = `${lab.color}15`}
                  >
                    <ExternalLink size={13} />
                    View Project
                  </a>
                  <a
                    href={lab.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-dim)',
                      fontSize: '12px',
                      fontWeight: '500',
                      fontFamily: 'var(--font-body)',
                      textDecoration: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'background 0.2s ease, color 0.2s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'; e.currentTarget.style.color = 'var(--text-dim)'; }}
                  >
                    <GitBranch size={13} />
                    Source
                  </a>
                </div>

                {/* Decorative Corner Glow */}
                <div style={{ 
                  position: 'absolute', top: '-60px', right: '-60px', 
                  width: '200px', height: '200px', 
                  background: `radial-gradient(circle, ${lab.color}08 0%, transparent 70%)`,
                  borderRadius: '50%',
                  zIndex: 0,
                  pointerEvents: 'none'
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
