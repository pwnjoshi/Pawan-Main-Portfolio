import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "AWS Student Builder Platform & Portal",
    type: "CLOUD PLATFORM",
    desc: "Serverless campus platform built on AWS (S3, CloudFront, DynamoDB) serving 450+ registered builders across 200+ institutions in 35+ countries. Features multi-tenant Google OAuth & JWT auth, automated CLF-C02 certification verification, and sub-100ms API latency via DynamoDB GSIs.",
    tags: ["React", "Node.js", "AWS S3", "CloudFront", "DynamoDB"],
    liveLink: "https://aws-sbg-piet-official-site.vercel.app",
    liveLabel: "Live Portal",
    githubLink: "https://github.com/pwnjoshi/AWS-SBG-PIET-Official-Site"
  },
  {
    id: "02",
    title: "Autonomous Cognitive Engine",
    type: "AI AGENT SYSTEMS",
    desc: "Multi-step agent framework in LangGraph designed to decompose and execute complex engineering tasks autonomously with ~80% accuracy. Overcame context-overflow crashes on jobs with 10,000+ log lines by engineering an in-memory virtual file system, with LangSmith tracing pushing run reliability past 70%.",
    tags: ["Python", "LangGraph", "LangSmith", "ReAct Loops", "VFS"],
    liveLink: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01454259343803187223/14bb99d1-1b1d-45b5-badf-839bae33f2b5.pdf",
    liveLabel: "Verified Credential",
    githubLink: "https://github.com/pwnjoshi"
  },
  {
    id: "03",
    title: "ARTAMS: Real-Time Attendance Engine",
    type: "SYSTEMS & BACKEND",
    desc: "High-throughput attendance and verification system written in C using in-memory hash tables for O(1) lookups and Haversine formula GPS anti-spoofing algorithms. Deployed on an AWS EC2 instance (Ubuntu 24.04) behind Nginx via FastCGI REST APIs to handle concurrent verification requests.",
    tags: ["C", "AWS EC2", "Nginx", "FastCGI", "Data Structures"],
    liveLink: "/Pawan_Joshi_Resume.pdf",
    liveLabel: "Architecture Specs",
    githubLink: "https://github.com/pwnjoshi"
  },
  {
    id: "04",
    title: "Tech Sangi SaaS Platform",
    type: "FULL-STACK SAAS",
    desc: "Production-grade SaaS platform powering Tech Sangi Pvt. Ltd. Supports client delivery pipelines, community resources, and internal tooling. Architected with scalable cloud primitives, secure authentication, Stripe billing, and continuous deployment workflows.",
    tags: ["React", "Node.js", "AWS", "Stripe", "PostgreSQL"],
    liveLink: "https://techsangi.com.np",
    liveLabel: "Visit Platform",
    githubLink: "https://github.com/pwnjoshi"
  }
];

const Projects = () => {
  return (
    <section id="lab" className="section-gap" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="mono-label" style={{ marginBottom: '12px', color: '#60A5FA' }}>
              / 02 &mdash; SELECTED WORK
            </div>
            <h2 className="display-text" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
              Projects &amp; <span style={{ color: '#60A5FA' }}>Systems</span>
            </h2>
          </div>
          <p className="readable-measure" style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '65ch', lineHeight: '1.55' }}>
            Production systems built from scratch &mdash; from distributed cloud portals to low-level C backends and autonomous agent frameworks.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {projects.map((proj, index) => {
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.38, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="elite-card lab-card"
                style={{ 
                  padding: '32px', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '340px',
                  boxShadow: 'var(--shadow-soft-sm)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                {/* Top Row: Index + Discipline Label */}
                <div>
                  <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '11px', 
                    letterSpacing: '0.12em',
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginBottom: '16px',
                    fontWeight: '600'
                  }}>
                    {proj.id} &mdash; {proj.type}
                  </div>

                  {/* Title & Description (16px minimum body, 1.55 line height, 65ch measure) */}
                  <h3 style={{ 
                    fontSize: 'clamp(20px, 2.2vw, 24px)', 
                    fontWeight: '700',
                    color: '#FFFFFF',
                    marginBottom: '12px', 
                    lineHeight: '1.25',
                    letterSpacing: '-0.01em'
                  }}>
                    {proj.title}
                  </h3>
                  
                  <p className="readable-measure" style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '16px', 
                    lineHeight: '1.55', 
                    marginBottom: '24px',
                    maxWidth: '65ch'
                  }}>
                    {proj.desc}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.035)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '12px',
                          fontFamily: 'var(--font-mono)',
                          color: 'rgba(255, 255, 255, 0.8)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Working Action Links with Scale 0.97 on Press and 44px Tap Target */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  paddingTop: '20px', 
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  flexWrap: 'wrap'
                }}>
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      minHeight: '44px',
                      borderRadius: '8px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#60A5FA',
                      fontSize: '13px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      transition: 'background 0.15s ease, border-color 0.15s ease',
                    }}
                  >
                    <span>{proj.liveLabel}</span>
                    <ExternalLink size={14} />
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      minHeight: '44px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-secondary)',
                      fontSize: '13px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'background 0.15s ease, color 0.15s ease',
                    }}
                  >
                    <GitBranch size={14} />
                    <span>Source</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
