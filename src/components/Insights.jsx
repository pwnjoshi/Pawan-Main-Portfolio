import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const FALLBACK_ARTICLES = [
  {
    id: 'sbg-geu',
    title: 'AWS Student Builder Group GEU: Engineering the Future Through Cloud, AI, and Innovation',
    date: '2026',
    excerpt: 'How we built a thriving builder community at Graphic Era University focused on hands-on cloud computing, Amazon Web Services, and agentic AI.',
    tags: ['aws', 'cloud', 'community'],
    link: 'https://dev.to/pwnjoshi/aws-student-builder-group-geu-engineering-the-future-through-cloud-ai-and-innovation-35nf'
  },
  {
    id: 'ec2-ssh',
    title: 'EC2 SSH Not Connecting? Here Are the 5 Things That Were Wrong (And How I Fixed Them)',
    date: '2026',
    excerpt: 'A practical debugging guide covering security groups, network ACLs, key permissions, and VPC routing issues when troubleshooting SSH into AWS EC2 instances.',
    tags: ['aws', 'ec2', 'devops'],
    link: 'https://dev.to/pwnjoshi/ec2-ssh-not-connecting-here-are-the-5-things-that-were-wrong-and-how-i-fixed-them-4ccp'
  },
  {
    id: 'aws-roadmap',
    title: 'How Students Can Learn AWS Without Spending Any Money (Real Roadmap)',
    date: '2026',
    excerpt: 'A step-by-step cost-free roadmap for engineering students to master AWS infrastructure, prepare for certifications, and build real portfolio systems.',
    tags: ['aws', 'beginners', 'cloud'],
    link: 'https://dev.to/pwnjoshi/how-students-can-learn-aws-without-spending-any-money-real-roadmap-5h32'
  }
];

const Insights = () => {
  const [articles, setArticles] = useState(FALLBACK_ARTICLES);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=pwnjoshi&per_page=4');
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const transformed = data.slice(0, 3).map((post) => ({
            id: String(post.id),
            title: post.title,
            date: new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            }),
            excerpt: post.description || (post.body_markdown ? post.body_markdown.substring(0, 140) + '...' : ''),
            tags: post.tag_list ? post.tag_list.slice(0, 3) : ['cloud', 'aws'],
            link: post.url
          }));
          setArticles(transformed);
        }
      } catch {
        // Retain fallback seamlessly without displaying error slop
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="insights" className="section-gap" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="mono-label" style={{ marginBottom: '12px', color: '#60A5FA' }}>
              / 04 &mdash; WRITING &amp; NOTES
            </div>
            <h2 className="display-text" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
              Articles &amp; <span style={{ color: '#60A5FA' }}>Engineering Notes</span>
            </h2>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: '15px', maxWidth: '420px', lineHeight: '1.6' }}>
            Practical write-ups on AWS cloud architecture, agent orchestration, and production debugging.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="insights-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '24px' 
        }}>
          {articles.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-30px" }}
              whileTap={{ scale: 0.97 }}
              className="elite-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                textDecoration: 'none',
                color: 'inherit',
                minHeight: '260px',
                transition: 'border-color 0.25s ease, transform 0.25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Meta row: Date + Reading tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '11px', 
                    color: 'var(--text-dim)',
                    letterSpacing: '0.05em'
                  }}>
                    {post.date}
                  </span>
                  
                  <ArrowUpRight size={16} style={{ color: '#60A5FA', opacity: 0.8 }} />
                </div>

                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  color: '#FFFFFF', 
                  lineHeight: '1.35', 
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {post.title}
                </h3>

                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--text-dim)', 
                  lineHeight: '1.6', 
                  margin: 0 
                }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Tag row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      background: 'rgba(255, 255, 255, 0.035)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all on dev.to */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <motion.a
            whileTap={{ scale: 0.97 }}
            href="https://dev.to/pwnjoshi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#F1F5F9',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'background 0.15s ease'
            }}
          >
            <BookOpen size={15} style={{ color: '#60A5FA' }} />
            <span>Read more articles on Dev.to</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Insights;
