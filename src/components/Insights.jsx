import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Loader } from 'lucide-react';

const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Fetch articles from dev.to API for user pwnjoshi
        const response = await fetch('https://dev.to/api/articles?username=pwnjoshi&per_page=6');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts from dev.to');
        }

        const data = await response.json();
        
        // Transform dev.to data to our format
        const transformedPosts = data.slice(0, 3).map((post) => ({
          id: post.id,
          title: post.title,
          date: new Date(post.published_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
          }),
          excerpt: post.description || post.body_markdown?.substring(0, 150) + '...',
          tags: post.tag_list.slice(0, 3), // First 3 tags
          link: post.url,
          cover: post.cover_image
        }));

        setInsights(transformedPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
        // Fallback: set empty or default posts
        setInsights([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <section id="insights" className="section-gap">
      <div className="container">
        <div style={{ marginBottom: '80px' }}>
          <div className="mono-label" style={{ marginBottom: '16px' }}>/ WRITTEN THOUGHTS</div>
          <h2 className="display-text" style={{ fontSize: '48px', marginBottom: '24px' }}>The Insights</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-dim)', maxWidth: '500px' }}>
            Deep dives into AI, cloud architecture, and lessons learned. Powered by dev.to.
          </p>
        </div>

        {loading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            gap: '12px'
          }}>
            <Loader size={24} style={{ animation: 'spin 1s linear infinite' }} />
            <span style={{ color: 'var(--text-dim)' }}>Loading insights...</span>
          </div>
        ) : error || insights.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
            <p style={{ color: 'var(--text-dim)', marginBottom: '16px' }}>
              {error ? `Could not load posts: ${error}` : 'No posts found. Check out my dev.to profile directly!'}
            </p>
            <a 
              href="https://dev.to/pwnjoshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              Visit my dev.to <ArrowRight size={16} />
            </a>
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {insights.map((post, index) => (
                <motion.a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="elite-card insights-card"
                  style={{
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                    height: '100%'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-hairline)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top accent line */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--accent), transparent)',
                    opacity: 0.5
                  }} />

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <Calendar size={14} style={{ color: 'var(--accent)' }} />
                      <span className="mono-label" style={{ fontSize: '10px', color: 'var(--text-dim)' }}>
                        {post.date}
                      </span>
                    </div>

                    <h3 className="display-text" style={{ fontSize: '20px', marginBottom: '12px', lineHeight: '1.3' }}>
                      {post.title}
                    </h3>

                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-dim)',
                      marginBottom: '24px',
                      lineHeight: '1.6'
                    }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="mono-label"
                          style={{
                            fontSize: '9px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            color: 'var(--accent)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--accent)',
                      fontSize: '14px',
                      fontWeight: '500',
                      width: 'fit-content'
                    }}
                    whileHover={{ x: 4 }}
                  >
                    Read on dev.to <ArrowRight size={16} />
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* CTA to see all posts */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginTop: '80px' }}
            >
              <a 
                href="https://dev.to/pwnjoshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary" 
                style={{ display: 'inline-flex' }}
              >
                View all insights on dev.to <ArrowRight size={16} />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Insights;
