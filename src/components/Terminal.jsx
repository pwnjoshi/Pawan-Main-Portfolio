import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const COMMAND_DATA = {
  '/whoami': [
    "IDENTITY VERIFIED.",
    "Name: Pawan Joshi",
    "Designation: Student & Cloud/AI Architect",
    "Base: Graphic Era University",
    "Mission: Building the next generation of Autonomous Intelligence."
  ],
  '/research': [
    "Initializing research environment...",
    "Loading LangGraph framework...",
    "Connecting to Virtual File System...",
    "Status: 80% task decomposition accuracy achieved.",
    "Tracing: 70%+ success rate on multi-step research tasks."
  ],
  '/cloud': [
    "AWS CLI v2.15.0 initialized.",
    "Scanning S3 buckets for 'DeepResearch' assets...",
    "EC2 Instance (t3.medium) healthy.",
    "Configuring Nginx reverse proxy for FastCGI...",
    "Architecture: 100% integrity verified."
  ],
  '/skills': [
    "--- CORE PROTOCOLS ---",
    "Languages : Python, JavaScript, C++, Java",
    "AI/ML     : LangGraph, LangChain, LLMs",
    "Cloud     : AWS (EC2, S3, IAM), GCP, Docker",
    "Backend   : Django, Node.js, Firebase"
  ],
  '/projects': [
    "Fetching production deployments...",
    "1. ACE (Autonomous Cognitive Engine) - Agentic reasoning framework",
    "2. InterviewGen AI - Automated evaluation system",
    "3. ARTAMS - High-availability AWS attendance engine",
    "Type '/lab' to view full visual portfolio."
  ],
  '/resume': [
    "Compiling professional dossier...",
    "Status: 200 OK",
    <a key="resume-link" href="https://linkedin.com/in/pwnjoshi" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>[Click here to view full professional profile]</a>
  ],
  '/contact': [
    "Fetching communication channels...",
    "Email: me@joshipawan.com.np",
    <a key="linkedin" href="https://linkedin.com/in/pwnjoshi" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>LinkedIn: /in/pwnjoshi</a>,
    <a key="twitter" href="https://x.com/pwnjoshidev" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Twitter: /pwnjoshidev</a>,
    "Signal: SECURE CONNECTION ESTABLISHED."
  ]
};

const Terminal = () => {
  const [history, setHistory] = useState(["Welcome to Pawan's Research Terminal. Type /help for commands."]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const [queue, setQueue] = useState([]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isTyping]);

  const processCommand = async (cmd) => {
    if (isTyping || !cmd) return;
    
    const cleanCmd = cmd.toLowerCase().trim();
    setHistory(prev => [...prev, `> ${cmd}`]);
    setIsTyping(true);
    
    let output = [];
    if (cleanCmd === '/help') {
      output = ["Available commands: /whoami, /research, /cloud, /skills, /projects, /resume, /contact, /clear"];
    } else if (cleanCmd === '/clear') {
      setHistory([]);
      setIsTyping(false);
      return;
    } else if (COMMAND_DATA[cleanCmd]) {
      output = COMMAND_DATA[cleanCmd];
    } else {
      output = [`Command not found: ${cmd}. Type /help.`];
    }

    // Async typing simulation
    for (let i = 0; i < output.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 150));
      setHistory(prev => {
        // ensure we don't duplicate if clear was called
        return [...prev, output[i]];
      });
    }
    
    setIsTyping(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input && !isTyping) {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <section id="terminal" className="section-gap" style={{ background: '#000' }}>
      <div className="container">
        <div className="mono-label" style={{ textAlign: 'center', marginBottom: '16px' }}>/ INTERACTIVE ENVIRONMENT</div>
        <h2 className="display-text" style={{ textAlign: 'center', fontSize: 'clamp(28px, 5vw, 48px)', marginBottom: '64px' }}>
          Deep Research <span style={{ color: 'var(--accent)' }}>Terminal</span>
        </h2>
        
        <div 
          className="elite-card terminal-window"
          onClick={() => inputRef.current?.focus()}
          style={{ 
            maxWidth: '850px', 
            margin: '0 auto', 
            height: '450px', 
            display: 'flex', 
            flexDirection: 'column',
            overflow: 'hidden',
            borderColor: 'rgba(59, 130, 246, 0.3)',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.1)',
            cursor: 'text'
          }}
        >
          {/* Header */}
          <div style={{ 
            padding: '12px 20px', 
            background: 'rgba(255,255,255,0.05)', 
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
            <span className="mono-label" style={{ marginLeft: '12px', fontSize: '9px', opacity: 0.5 }}>pawan@research-engine: ~</span>
          </div>

          {/* Body */}
          <div 
            ref={scrollRef}
            style={{ 
              flex: 1, 
              padding: '24px', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '13px', 
              overflowY: 'auto',
              color: 'var(--accent)',
              lineHeight: '1.7'
            }}
          >
            {history.map((line, idx) => {
              const isString = typeof line === 'string';
              const isCommand = isString && line.startsWith('>');
              return (
                <div key={idx} style={{ 
                  color: isCommand ? 'var(--primary)' : 'var(--accent)',
                  opacity: isCommand ? 1 : 0.8,
                  marginBottom: '4px'
                }}>
                  {line}
                </div>
              );
            })}
            
            {!isTyping && (
              <form onSubmit={onFormSubmit} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--primary)' }}>{">"}</span>
                <input 
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    outline: 'none', 
                    color: 'var(--primary)', 
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    flex: 1
                  }}
                />
              </form>
            )}
            {isTyping && <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity }}>_</motion.span>}
          </div>

          {/* Buttons */}
          <div className="terminal-actions" style={{ 
            padding: '12px 20px', 
            background: 'rgba(5, 5, 5, 0.5)', 
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {['/whoami', '/skills', '/projects', '/resume', '/contact'].map(cmd => (
              <button 
                key={cmd}
                onClick={(e) => { e.stopPropagation(); processCommand(cmd); }}
                className="mono-label"
                style={{ 
                  background: 'transparent', 
                  border: '1px solid var(--border-hairline)', 
                  padding: '4px 10px', 
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '9px'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--primary)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-hairline)'; e.currentTarget.style.color = 'var(--accent)'; }}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
