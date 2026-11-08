import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "AWS Student Builder Platform & Portal",
    type: "CLOUD PLATFORM",
    desc: "Serverless campus platform built on AWS (S3, CloudFront, DynamoDB) serving 450+ registered builders across 200+ institutions in 35+ countries. Features multi-tenant Google OAuth & JWT auth, automated CLF-C02 certification verification, and sub-100ms API latency via DynamoDB GSIs.",
    tags: ["React", "Node.js", "AWS S3", "CloudFront", "DynamoDB"],
    accentColor: "#3B82F6",
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
    accentColor: "#8B5CF6",
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
    accentColor: "#06B6D4",
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
    accentColor: "#10B981",
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
          <p style={{ color: 'var(--text-dim)', fontSize: '15px', maxWidth: '420px', lineHeight: '1.6' }}>
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
                  padding: '36px', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '340px',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                {/* Top Row: Index + Discipline Label (No top-left icon as requested) */}
                <div>
                  <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '11px', 
                    letterSpacing: '0.12em',
                    color: 'rgba(255, 255, 255, 0.4)',
                    marginBottom: '18px',
                    fontWeight: '600'
                  }}>
                    {proj.id} &mdash; {proj.type}
                  </div>

                  {/* Title & Description */}
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
                  
                  <p style={{ 
                    color: 'var(--text-dim)', 
                    fontSize: '14px', 
                    lineHeight: '1.65', 
                    marginBottom: '24px' 
                  }}>
                    {proj.desc}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '3px 9px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.035)',
                          border: '1px solid rgba(255, 255, 255, 0.07)',
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: 'rgba(255, 255, 255, 0.75)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Working Action Links with Scale 0.97 on Press */}
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
                      gap: '6px',
                      padding: '7px 14px',
                      borderRadius: '8px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#60A5FA',
                      fontSize: '12px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      transition: 'background 0.15s ease',
                    }}
                  >
                    <span>{proj.liveLabel}</span>
                    <ExternalLink size={12} />
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-dim)',
                      fontSize: '12px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'background 0.15s ease',
                    }}
                  >
                    <GitBranch size={13} />
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
