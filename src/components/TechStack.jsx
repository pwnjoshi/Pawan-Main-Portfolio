import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  "LangGraph", "LangChain", "LLMs", "Python", "JavaScript", 
  "AWS (EC2, S3)", "GCP", "Django", "MongoDB", "C++", "Java", "Docker"
];

const TechStack = () => {
  return (
    <section id="stack" className="section-gap">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="mono-label" style={{ marginBottom: '16px' }}>/ CAPABILITIES</div>
          <h2 className="display-text" style={{ fontSize: '48px' }}>The Stack</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
          gap: '16px' 
        }}>
          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="elite-card"
              style={{ 
                padding: '24px', 
                textAlign: 'center', 
                fontSize: '14px', 
                fontWeight: '500',
                color: 'var(--text-dim)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-hairline)'; e.currentTarget.style.color = 'var(--text-dim)'; }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
