import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const COMMAND_DATA = {
  '/help': [
    "╔════════════════════════════════════════════════════════════╗",
    "║       PAWAN'S RESEARCH TERMINAL - COMMAND REFERENCE        ║",
    "╠════════════════════════════════════════════════════════════╣",
    "║ /whoami        : Display identity & current role           ║",
    "║ /skills        : List technical capabilities              ║",
    "║ /projects      : View current & past projects             ║",
    "║ /research      : Deep research metrics & frameworks        ║",
    "║ /cloud         : AWS & cloud infrastructure status         ║",
    "║ /resume        : Professional profile & experience         ║",
    "║ /contact       : Communication channels & email            ║",
    "║ /socials       : Social media & community links            ║",
    "║ /about         : About me & mission statement              ║",
    "║ /banner        : Display ASCII banner                      ║",
    "║ /labs          : Access project laboratory                 ║",
    "║ /clear         : Clear terminal history                    ║",
    "║ /help          : Show this help menu                       ║",
    "╚════════════════════════════════════════════════════════════╝"
  ],
  '/banner': [
    "",
    "  ██████╗ ██╗   ██╗ █████╗ ██╗    ██╗ █████╗ ███╗   ██╗",
    "  ██╔══██╗██║   ██║██╔══██╗██║    ██║██╔══██╗████╗  ██║",
    "  ██████╔╝██║   ██║███████║██║ █╗ ██║███████║██╔██╗ ██║",
    "  ██╔═══╝ ██║   ██║██╔══██║██║███╗██║██╔══██║██║╚██╗██║",
    "  ██║     ╚██████╔╝██║  ██║╚███╔███╔╝██║  ██║██║ ╚████║",
    "  ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝",
    "",
    "        AI & Cloud Architect | Autonomous Intelligence Builder",
    ""
  ],
  '/whoami': [
    "NAME        : Pawan Joshi",
    "ROLE        : Student & AI/Cloud Architect",
    "BASE        : Graphic Era University, Dehradun",
    "MISSION     : Building the next generation of Autonomous Intelligence",
    "STATUS      : 🟢 ACTIVE - Architecting Future",
    "FOCUS_AREAS : LangGraph, AWS, Cloud Infrastructure, AI Agents"
  ],
  '/about': [
    "════════════════════════════════════════════════════════════",
    "Engineering visionary passionate about:",
    "  • Autonomous cognitive systems & agentic AI",
    "  • Cloud-native architecture at scale",
    "  • Open-source & community-driven development",
    "",
    "Currently architecting frameworks that bridge the gap between",
    "theoretical AI and production-grade systems.",
    "════════════════════════════════════════════════════════════"
  ],
  '/skills': [
    "────── LANGUAGES ──────",
    "  • Python     • JavaScript   • C++",
    "  • Java       • SQL          • Bash",
    "",
    "────── AI & ML ──────",
    "  • LangGraph  • LangChain     • LLMs",
    "  • RAG        • Prompt Eng.   • Agent Design",
    "",
    "────── CLOUD & DEVOPS ──────",
    "  • AWS (EC2, S3, Lambda, RDS)",
    "  • GCP Cloud Platform",
    "  • Docker & Container Orchestration",
    "",
    "────── BACKEND ──────",
    "  • Django     • Node.js       • FastAPI"
  ],
  '/research': [
    "🔬 RESEARCH INITIATIVES",
    "────────────────────────────────",
    "Project: Deep Cognitive Task Framework",
    "Status : 80% COMPLETION",
    "Tech   : LangGraph, React loops, VFS abstraction",
    "",
    "Achievements:",
    "  ✓ Task decomposition accuracy: 80%+",
    "  ✓ Multi-step reasoning: 70%+ success rate",
    "  ✓ Context window optimization: Virtual File System",
    "  ✓ Autonomous execution: Fully functional"
  ],
  '/cloud': [
    "☁️  AWS INFRASTRUCTURE STATUS",
    "────────────────────────────────",
    "EC2 Instances  : t3.medium (HEALTHY)",
    "S3 Buckets     : 12 buckets active",
    "Database       : RDS PostgreSQL (CONNECTED)",
    "Networking     : VPC configured (10.0.0.0/16)",
    "Architecture   : 100% integrity verified ✓",
    "",
    "Last Sync: 5 minutes ago"
  ],
  '/projects': [
    "📦 PRODUCTION DEPLOYMENTS",
    "────────────────────────────────",
    "1. ACE Framework",
    "   └─ Autonomous Cognitive Engine",
    "   └─ ReAct loops, agentic reasoning",
    "",
    "2. InterviewGen AI",
    "   └─ Automated technical interview platform",
    "   └─ Multi-stage evaluation system",
    "",
    "3. ARTAMS",
    "   └─ AWS high-availability attendance engine",
    "   └─ O(1) lookup performance",
    "",
    "→ Type '/labs' to explore the full laboratory"
  ],
  '/labs': [
    "Redirecting to Lab section...",
    "Navigate: Jump to #lab section on page",
    "or visit: View The Lab section below ↓"
  ],
  '/socials': [
    "🌐 FOLLOW & CONNECT",
    "────────────────────────────────",
    "GitHub        : github.com/pwnjoshi",
    "LinkedIn      : linkedin.com/in/pwnjoshi",
    "Twitter       : x.com/pwnjoshidev",
    "Dev.to        : dev.to/pwnjoshi",
    "AWS Builder   : builder.aws.com/community/@pawanjoshidev",
    "",
    "All links available at the bottom of this page ↓"
  ],
  '/contact': [
    "📧 GET IN TOUCH",
    "────────────────────────────────",
    "Email         : me@joshipawan.com.np",
    "LinkedIn      : linkedin.com/in/pwnjoshi",
    "Twitter       : x.com/pwnjoshidev",
    "",
    "Let's build something amazing together! 🚀"
  ],
  '/resume': [
    "Loading professional profile...",
    "STATUS: 200 OK",
    "",
    "→ Full resume: linkedin.com/in/pwnjoshi"
  ]
};

const Terminal = () => {
  const [history, setHistory] = useState([
    "Welcome to Pawan Joshi's Research Terminal.",
    "Type /help for available commands or click the quick commands below.",
    ""
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isTyping]);

  const processCommand = async (cmd) => {
    if (isTyping || !cmd.trim()) return;
    
    const cleanCmd = cmd.toLowerCase().trim();
    setHistory(prev => [...prev, `> ${cmd}`]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setIsTyping(true);
    
    let output = [];
    if (cleanCmd === '/clear') {
      setHistory([]);
      setIsTyping(false);
      return;
    } else if (COMMAND_DATA[cleanCmd]) {
      output = COMMAND_DATA[cleanCmd];
    } else {
      output = [`✗ Command not found: ${cmd}`, "Type /help for available commands."];
    }

    // Simulate typing with delays
    for (let i = 0; i < output.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 80));
      setHistory(prev => [...prev, output[i]]);
    }
    
    setHistory(prev => [...prev, '']); // Add spacing
    setIsTyping(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      processCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = historyIndex + 1;
      if (newIndex < commandHistory.length) {
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      if (newIndex >= 0) {
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (newIndex < 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = Object.keys(COMMAND_DATA);
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  return (
    <section id="terminal" className="section-gap" style={{ background: '#000', padding: 'clamp(40px, 8vw, 80px) 16px' }}>
      <div className="container">
        <div className="mono-label" style={{ textAlign: 'center', marginBottom: 'clamp(12px, 3vw, 16px)', fontSize: 'clamp(10px, 2vw, 12px)' }}>/ INTERACTIVE ENVIRONMENT</div>
        <h2 className="display-text" style={{ textAlign: 'center', fontSize: 'clamp(24px, 6vw, 48px)', marginBottom: 'clamp(32px, 8vw, 64px)' }}>
          Deep Research <span style={{ color: 'var(--accent)' }}>Terminal</span>
        </h2>
        
        <div 
          className="elite-card terminal-window"
          onClick={() => inputRef.current?.focus()}
          style={{ 
            width: '100%',
            maxWidth: 'clamp(320px, 95vw, 900px)', 
            margin: '0 auto', 
            height: 'clamp(300px, 60vh, 500px)', 
            display: 'flex', 
            flexDirection: 'column',
            overflow: 'hidden',
            borderColor: 'rgba(59, 130, 246, 0.3)',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.1), inset 0 0 40px rgba(59, 130, 246, 0.02)',
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
              padding: 'clamp(12px, 4vw, 24px)', 
              fontFamily: 'var(--font-mono)', 
              fontSize: 'clamp(11px, 2.5vw, 13px)', 
              overflowY: 'auto',
              color: 'var(--accent)',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}
          >
            {history.map((line, idx) => {
              const isString = typeof line === 'string';
              const isCommand = isString && line.startsWith('>');
              return (
                <div key={idx} style={{ 
                  color: isCommand ? 'var(--primary)' : 'var(--accent)',
                  opacity: isCommand ? 1 : 0.85,
                  marginBottom: '2px',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {line}
                </div>
              );
            })}
            
            {!isTyping && (
              <form onSubmit={onFormSubmit} style={{ display: 'flex', gap: 'clamp(4px, 2vw, 8px)', alignItems: 'center', marginTop: '8px', fontSize: 'clamp(11px, 2.5vw, 13px)' }}>
                <span style={{ color: 'var(--primary)', flexShrink: 0 }}>{">"}</span>
                <input 
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    outline: 'none', 
                    color: 'var(--primary)', 
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    flex: 1,
                    minWidth: 0
                  }}
                  placeholder="Type command or use arrow keys..."
                />
              </form>
            )}
            {isTyping && <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.6 }}>█</motion.span>}
          </div>

          {/* Quick Commands */}
          <div className="terminal-actions" style={{ 
            padding: 'clamp(10px, 3vw, 16px)', 
            background: 'rgba(5, 5, 5, 0.8)', 
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(70px, 20vw, 100px), 1fr))',
            gap: 'clamp(6px, 2vw, 8px)',
            maxHeight: '100px',
            overflowY: 'auto'
          }}>
            {['/whoami', '/skills', '/projects', '/research', '/cloud', '/resume', '/contact', '/help'].map(cmd => (
              <motion.button 
                key={cmd}
                onClick={(e) => { e.stopPropagation(); processCommand(cmd); }}
                className="mono-label"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  background: 'transparent', 
                  border: '1px solid var(--border-hairline)', 
                  padding: 'clamp(4px, 1.5vw, 6px) clamp(8px, 2vw, 12px)', 
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: 'clamp(9px, 2vw, 10px)',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  color: 'var(--accent)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-hairline)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {cmd}
              </motion.button>
            ))}
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: 'clamp(16px, 4vw, 24px)', fontSize: 'clamp(11px, 2vw, 12px)', color: 'var(--text-dim)' }}>
          💡 Tip: Use ↑↓ arrow keys for command history, Tab for autocomplete
        </p>
      </div>
    </section>
  );
};

export default Terminal;
