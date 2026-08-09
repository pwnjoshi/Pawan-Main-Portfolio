import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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
      // Using FormSubmit AJAX dispatcher configured with custom sender identifier
      const response = await fetch('https://formsubmit.co/ajax/joshipawan2021@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          sender: 'site@joshipawan.com.np',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name} via site@joshipawan.com.np`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please email directly at joshipawan2021@gmail.com');
    }
  };

  return (
    <footer id="contact" style={{ padding: '80px 0 60px', borderTop: '1px solid var(--border-hairline)' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          
          {/* Left Column: Direct Contact & Info */}
          <div>
            <div className="mono-label" style={{ marginBottom: '16px' }}>/ GET IN TOUCH</div>
            <h2 className="display-text" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', marginBottom: '24px', lineHeight: '1.1' }}>
              Let's build <span style={{ color: 'var(--accent)' }}>together.</span>
            </h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px', maxWidth: '440px' }}>
              Have a project in mind, an opportunity to share, or just want to discuss AI systems and cloud architecture? Drop a message.
            </p>
            
            <a href="mailto:joshipawan2021@gmail.com" className="display-text" style={{ fontSize: 'clamp(16px, 1.8vw, 22px)', color: 'var(--primary)', textDecoration: 'none', borderBottom: '2px solid var(--accent)', display: 'inline-block', marginBottom: '24px' }}>
              joshipawan2021@gmail.com
            </a>

            <div style={{ marginTop: '16px' }}>
              <p className="mono-label" style={{ marginBottom: '12px', color: 'var(--text-dim)' }}>
                Support the project if you find it useful.
              </p>
              <a
                href="https://ko-fi.com/pawanjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ display: 'inline-flex' }}
              >
                Contribute on Ko-fi
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="elite-card" style={{ padding: '32px', borderRadius: '20px', background: 'rgba(15, 15, 20, 0.6)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: '#FFFFFF' }}>
              Send a Direct Message
            </h3>

            {status === 'success' ? (
              <div style={{
                padding: '24px',
                borderRadius: '12px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#4ADE80',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <CheckCircle2 size={24} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Message Sent!</h4>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
                    Thank you for reaching out. Your message from site@joshipawan.com.np has been sent to joshipawan2021@gmail.com.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label htmlFor="name" className="mono-label" style={{ display: 'block', marginBottom: '6px', color: 'var(--text-dim)', fontSize: '11px' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Mercer"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mono-label" style={{ display: 'block', marginBottom: '6px', color: 'var(--text-dim)', fontSize: '11px' }}>
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mono-label" style={{ display: 'block', marginBottom: '6px', color: 'var(--text-dim)', fontSize: '11px' }}>
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontSize: '13px' }}>
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    fontWeight: '600',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    opacity: status === 'loading' ? 0.7 : 1
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom Links */}
        <div className="footer-bottom" style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p className="mono-label" style={{ color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2026 PAWAN JOSHI / ENGINEERED FOR IMPACT</p>

          <div className="footer-links" style={{ display: 'flex', gap: '24px' }}>
            <a href="https://linkedin.com/in/pwnjoshi" target="_blank" rel="noopener noreferrer" className="mono-label" style={{ textDecoration: 'none', color: 'var(--text-dim)' }}>LinkedIn</a>
            <a href="https://github.com/pwnjoshi" target="_blank" rel="noopener noreferrer" className="mono-label" style={{ textDecoration: 'none', color: 'var(--text-dim)' }}>GitHub</a>
            <a href="https://x.com/pwnjoshidev" target="_blank" rel="noopener noreferrer" className="mono-label" style={{ textDecoration: 'none', color: 'var(--text-dim)' }}>Twitter</a>
            <a href="https://builder.aws.com/community/@pawanjoshidev" target="_blank" rel="noopener noreferrer" className="mono-label" style={{ textDecoration: 'none', color: 'var(--text-dim)' }}>AWS Builder</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
