import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const labs = [
  {
    id: "01",
    title: "Autonomous Cognitive Engine",
    desc: "A deep research framework utilizing ReAct loops and virtual file systems for autonomous agentic reasoning.",
    type: "AI ARCHITECTURE"
  },
  {
    id: "02",
    title: "InterviewGen AI",
    desc: "End-to-end interview automation platform with multi-stage evaluation and stateful candidate management.",
    type: "AUTOMATION"
  },
  {
    id: "03",
    title: "ARTAMS",
    desc: "Real-time attendance engine engineered for AWS high-availability with O(1) lookup performance.",
    type: "INFRASTRUCTURE"
  }
];

const Projects = () => {
  return (
    <section id="lab" className="section-gap" style={{ background: '#080808' }}>
      <div className="container">
        <div className="mono-label" style={{ marginBottom: '16px' }}>/ RESEARCH & DEVELOPMENT</div>
        <h2 className="display-text" style={{ fontSize: '48px', marginBottom: '80px' }}>The Lab</h2>
        
        <div style={{ display: 'grid', gap: '32px' }}>
          {labs.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="elite-card lab-card"
              style={{ 
                padding: '60px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ zIndex: 1 }}>
                <div className="mono-label" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '32px' }}>{lab.id} / {lab.type}</div>
                <h3 className="display-text" style={{ fontSize: '36px', marginBottom: '16px' }}>{lab.title}</h3>
                <p style={{ color: 'var(--text-dim)', maxWidth: '450px', fontSize: '18px' }}>{lab.desc}</p>
              </div>
              
              <div style={{ zIndex: 1 }}>
                <a href="#" style={{ 
                  width: '64px', height: '64px', borderRadius: '50%', 
                  background: 'var(--primary)', color: '#000', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center' 
                }}>
                  <ArrowUpRight size={24} />
                </a>
              </div>
              
              {/* Decorative Subtle Gradient */}
              <div style={{ 
                position: 'absolute', top: '0', right: '0', 
                width: '300px', height: '100%', 
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.03))',
                zIndex: 0
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
