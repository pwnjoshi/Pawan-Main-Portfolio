import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ArrowUpRight } from 'lucide-react';

const easeOutCubic = [0.16, 1, 0.3, 1];

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Please enter your name so Pawan knows who is reaching out.';
      } else if (value.trim().length < 2) {
        error = 'Please enter at least 2 characters for your name.';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = 'Please enter your email so Pawan can reply back.';
      } else if (!emailRegex.test(value.trim())) {
        error = 'Please enter a valid email address (e.g. name@domain.com).';
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        error = 'Please enter a brief message regarding your project or inquiry.';
      } else if (value.trim().length < 10) {
        error = 'Please include at least 10 characters with details of your inquiry.';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate all fields
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);

    setTouched({ name: true, email: true, message: true });
    setFieldErrors({ name: nameErr, email: emailErr, message: msgErr });

    if (nameErr || emailErr || msgErr) {
      return;
    }

    setStatus('loading');

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
        setFieldErrors({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
      } else {
        throw new Error(result.error || 'Failed to dispatch email.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Unable to send message right now. Please reach out via LinkedIn or direct email.');
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
            <p className="readable-measure" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.55', marginBottom: '28px', maxWidth: '65ch' }}>
              Have an engineering opportunity, a research inquiry, or a cloud architecture project to discuss? Drop a note below or reach out directly.
            </p>
            
            {/* Direct Email Link with Scale 0.97 on Press and 44px Tap Target */}
            <motion.a 
              whileTap={{ scale: 0.97 }}
              href="mailto:me@joshipawan.com.np" 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
                color: '#FFFFFF',
                fontWeight: '600',
                textDecoration: 'none',
                minHeight: '44px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '32px',
                transition: 'border-color 0.15s ease, background 0.15s ease'
              }}
            >
              <Mail size={18} style={{ color: '#60A5FA' }} />
              <span>me@joshipawan.com.np</span>
              <ArrowUpRight size={15} style={{ opacity: 0.7 }} />
            </motion.a>

            {/* Quick Links with 44px Tap Targets */}
            <div>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '12px', letterSpacing: '0.08em' }}>
                DIRECT CHANNELS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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
                      fontSize: '13px',
                      fontWeight: '500',
                      color: 'var(--text-secondary)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      minHeight: '44px',
                      padding: '10px 16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'background 0.15s ease, color 0.15s ease'
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
            borderRadius: '20px', 
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: 'var(--shadow-soft-sm)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#FFFFFF' }}>
              Send a Direct Message
            </h3>

            {/* Rules Applied:
                1. Give every state its center (centered success state).
                2. Use a pulse to confirm success.
                3. Bring the new state in as the old state leaves (mode="wait").
                4. Make exits about 20% shorter than entrances (entrance 200ms, exit 160ms).
                5. Keep label close to input (4px margin).
                6. Error goes beside the field and shows how to fix it.
                7. One filled button per section.
                8. Scale buttons to 0.97 on press.
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
                    padding: '36px 24px',
                    borderRadius: '16px',
                    background: 'rgba(34, 197, 94, 0.06)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                    color: '#4ADE80',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: '16px',
                    boxShadow: '0 0 32px rgba(34, 197, 94, 0.08)'
                  }}
                >
                  <motion.div
                    animate={{ scale: [0.8, 1.25, 1], rotate: [0, 8, 0] }}
                    transition={{ duration: 0.45, ease: easeOutCubic }}
                    style={{ 
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(34, 197, 94, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CheckCircle2 size={32} style={{ color: '#4ADE80' }} />
                  </motion.div>
                  <div>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#FFFFFF' }}>
                      Message Delivered
                    </h4>
                    <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5', maxWidth: '400px' }}>
                      Thank you for reaching out. I have received your message and will get back to you shortly.
                    </p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStatus('idle')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: '500',
                      minHeight: '44px',
                      padding: '8px 18px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      marginTop: '8px'
                    }}
                  >
                    Send another note
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  noValidate
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ 
                    opacity: 0, 
                    y: -8, 
                    transition: { duration: 0.16, ease: easeOutCubic }
                  }}
                  transition={{ duration: 0.2, ease: easeOutCubic }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  {/* Field 1: Name (Label close to input, error beside/under field showing how to fix) */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <label htmlFor="name" style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                        NAME
                      </label>
                      {touched.name && fieldErrors.name && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#F87171', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                          <AlertCircle size={12} />
                          Required
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      aria-invalid={!!(touched.name && fieldErrors.name)}
                      style={{
                        width: '100%',
                        minHeight: '44px',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: touched.name && fieldErrors.name 
                          ? '1px solid rgba(239, 68, 68, 0.6)' 
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.15s ease',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        if (!(touched.name && fieldErrors.name)) {
                          e.target.style.borderColor = '#60A5FA';
                        }
                      }}
                    />
                    {touched.name && fieldErrors.name && (
                      <p style={{ margin: '4px 0 0 0', color: '#F87171', fontSize: '12px', lineHeight: '1.4' }}>
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Field 2: Email */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <label htmlFor="email" style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                        EMAIL ADDRESS
                      </label>
                      {touched.email && fieldErrors.email && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#F87171', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                          <AlertCircle size={12} />
                          Invalid Email
                        </span>
                      )}
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="name@company.com"
                      aria-invalid={!!(touched.email && fieldErrors.email)}
                      style={{
                        width: '100%',
                        minHeight: '44px',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: touched.email && fieldErrors.email 
                          ? '1px solid rgba(239, 68, 68, 0.6)' 
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.15s ease',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        if (!(touched.email && fieldErrors.email)) {
                          e.target.style.borderColor = '#60A5FA';
                        }
                      }}
                    />
                    {touched.email && fieldErrors.email && (
                      <p style={{ margin: '4px 0 0 0', color: '#F87171', fontSize: '12px', lineHeight: '1.4' }}>
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Field 3: Message */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <label htmlFor="message" style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                        MESSAGE
                      </label>
                      {touched.message && fieldErrors.message && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#F87171', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                          <AlertCircle size={12} />
                          Too Short
                        </span>
                      )}
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Details about your opportunity or project..."
                      aria-invalid={!!(touched.message && fieldErrors.message)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: touched.message && fieldErrors.message 
                          ? '1px solid rgba(239, 68, 68, 0.6)' 
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        transition: 'border-color 0.15s ease'
                      }}
                      onFocus={(e) => {
                        if (!(touched.message && fieldErrors.message)) {
                          e.target.style.borderColor = '#60A5FA';
                        }
                      }}
                    />
                    {touched.message && fieldErrors.message && (
                      <p style={{ margin: '4px 0 0 0', color: '#F87171', fontSize: '12px', lineHeight: '1.4' }}>
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Top-level Dispatch Error if server fails */}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        color: '#F87171', 
                        fontSize: '13px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid rgba(239, 68, 68, 0.25)'
                      }}
                    >
                      <AlertCircle size={16} style={{ flexShrink: 0 }} />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button: Single filled button for this section, 44px min height, 0.97 tap */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      minHeight: '44px',
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
                      boxShadow: '0 8px 24px -4px rgba(255, 255, 255, 0.12)',
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
