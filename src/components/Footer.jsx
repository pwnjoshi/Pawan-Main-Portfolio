import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ArrowUpRight } from 'lucide-react';

const easeOutCubic = [0.16, 1, 0.3, 1];

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to dispatch email.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Unable to send message. Please reach out via LinkedIn or email directly.');
    }
  };

  return (
    <footer id="contact" style={{ padding: '80px 0 48px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
          
          {/* Left Column: Direct Contact & Context */}
          <div>
            <div className="mono-label" style={{ marginBottom: '12px', color: '#60A5FA' }}>
              / 06 &mdash; GET IN TOUCH
            </div>
            <h2 className="display-text" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', marginBottom: '16px', lineHeight: '1.1' }}>
              Let's build <span style={{ color: '#60A5FA' }}>together.</span>
            </h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '15px', lineHeight: '1.65', marginBottom: '28px', maxWidth: '440px' }}>
              Have an engineering opportunity, a research inquiry, or a cloud architecture project to discuss? Drop a note below or reach out directly.
            </p>
            
            {/* Direct Email Link with Scale 0.97 on Press */}
            <motion.a 
              whileTap={{ scale: 0.97 }}
              href="mailto:me@joshipawan.com.np" 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '17px',
                color: '#FFFFFF',
                fontWeight: '600',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '32px',
                transition: 'border-color 0.15s ease, background 0.15s ease'
              }}
            >
              <Mail size={16} style={{ color: '#60A5FA' }} />
              <span>me@joshipawan.com.np</span>
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </motion.a>

            {/* Quick Links */}
            <div>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)', marginBottom: '12px', letterSpacing: '0.08em' }}>
                DIRECT CHANNELS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/pwnjoshi' },
                  { name: 'GitHub', url: 'https://github.com/pwnjoshi' },
                  { name: 'Twitter / X', url: 'https://x.com/pwnjoshidev' },
                  { name: 'AWS Community', url: 'https://builder.aws.com/community/@pawanjoshidev' },
                ].map((channel) => (
                  <motion.a 
                    key={channel.name}
                    whileTap={{ scale: 0.97 }}
                    href={channel.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '12px',
                      fontWeight: '500',
                      color: 'var(--text-dim)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'background 0.15s ease'
                    }}
                  >
                    {channel.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="elite-card" style={{ 
            padding: '32px', 
            borderRadius: '18px', 
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#FFFFFF' }}>
              Send a Direct Message
            </h3>

            {/* Rules Applied:
                1. Use a pulse to confirm success.
                2. Bring the new state in as the old state leaves (mode="wait").
                3. Make exits about 20% shorter than entrances (entrance 200ms, exit 160ms).
                4. Scale buttons to 0.97 on press.
            */}
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [0.95, 1.03, 1], // Pulse to confirm success
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.95,
                    transition: { duration: 0.16, ease: easeOutCubic } // 20% shorter exit
                  }}
                  transition={{ duration: 0.35, ease: easeOutCubic }}
                  style={{
                    padding: '28px',
                    borderRadius: '14px',
                    background: 'rgba(34, 197, 94, 0.08)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    color: '#4ADE80',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    boxShadow: '0 0 30px rgba(34, 197, 94, 0.1)'
                  }}
                >
                  <motion.div
                    animate={{ scale: [0.8, 1.25, 1], rotate: [0, 8, 0] }}
                    transition={{ duration: 0.45, ease: easeOutCubic }}
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  >
                    <CheckCircle2 size={24} style={{ color: '#4ADE80' }} />
                  </motion.div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#FFFFFF' }}>Message Delivered</h4>
                    <p style={{ margin: '6px 0 0', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                      Thank you for reaching out. I have received your message and will get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ 
                    opacity: 0, 
                    y: -8, 
                    transition: { duration: 0.16, ease: easeOutCubic } // 20% shorter than entrance
                  }}
                  transition={{ duration: 0.2, ease: easeOutCubic }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '6px', color: 'var(--text-dim)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.15s ease',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#60A5FA'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '6px', color: 'var(--text-dim)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.15s ease',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#60A5FA'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '6px', color: 'var(--text-dim)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Details about your opportunity or project..."
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        transition: 'border-color 0.15s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#60A5FA'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                  </div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontSize: '13px' }}
                    >
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button with Scale 0.97 on Press */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: '#FFFFFF',
                      color: '#09090B',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      opacity: status === 'loading' ? 0.7 : 1,
                      transition: 'opacity 0.15s ease'
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} style={{ animation: 'spin 0.8s linear infinite' }} />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom" style={{ 
          marginTop: '60px', 
          paddingTop: '24px', 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '16px' 
        }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.4)', margin: 0, fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
            &copy; 2026 Pawan Joshi. Built with React &amp; Vite.
          </p>

          <div className="footer-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="https://linkedin.com/in/pwnjoshi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-dim)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>LinkedIn</a>
            <a href="https://github.com/pwnjoshi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-dim)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>GitHub</a>
            <a href="https://x.com/pwnjoshidev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-dim)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>Twitter</a>
            <a href="https://dev.to/pwnjoshi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-dim)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>Dev.to</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
