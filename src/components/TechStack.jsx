import { motion } from 'framer-motion';
import { Terminal, Cpu, Cloud, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    desc: "Core systems & application programming",
    skills: ["Python", "C", "C++", "JavaScript", "Java", "SQL", "HTML5/CSS3"]
  },
  {
    title: "AI & Agentic Systems",
    icon: Cpu,
    desc: "Orchestration, reasoning & LLM pipelines",
    skills: ["LangGraph", "LangSmith", "LangChain", "ReAct Loops", "RAG", "OpenAI API", "Agent Memory / VFS"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    desc: "Architecture, security & serverless scaling",
    skills: ["AWS EC2", "Amazon S3", "DynamoDB", "CloudFront", "IAM & Route 53", "GCP", "Docker", "Nginx"]
  },
  {
    title: "Frameworks & Backend",
    icon: Database,
    desc: "Production services, APIs & data layers",
    skills: ["Django", "Node.js", "React", "REST APIs", "PostgreSQL", "MongoDB", "FastCGI"]
  }
];

const TechStack = () => {
  return (
    <section id="stack" className="section-gap" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px' }}>
          <div className="mono-label" style={{ marginBottom: '12px', color: '#60A5FA' }}>
            / 05 &mdash; TECHNICAL CAPABILITIES
          </div>
          <h2 className="display-text" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', marginBottom: '16px' }}>
            Technical Stack
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px', maxWidth: '580px', lineHeight: '1.6' }}>
            Core languages, distributed cloud tooling, and agent frameworks used across production applications.
          </p>
        </div>
        
        {/* 4-Quadrant Discipline Grid */}
        <div className="skills-matrix-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '24px' 
        }}>
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-30px" }}
                className="elite-card"
                style={{ 
                  padding: '32px', 
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60A5FA'
                    }}>
                      <Icon size={18} />
                    </div>
                    
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                      {cat.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginBottom: '22px' }}>
                    {cat.desc}
                  </p>
                </div>

                {/* Skill Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.035)',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        fontSize: '12px',
                        fontWeight: '500',
                        fontFamily: 'var(--font-mono)',
                        color: 'rgba(255, 255, 255, 0.85)',
                        transition: 'border-color 0.2s ease, background 0.2s ease'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
