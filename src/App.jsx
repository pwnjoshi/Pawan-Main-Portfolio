import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import TechStack from './components/TechStack'
import Insights from './components/Insights'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Particles from './components/Particles'

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Hide preloader after page loads or fast fallback
    const hidePreloader = () => setShowPreloader(false);
    
    if (document.readyState === 'complete') {
      setShowPreloader(false);
    } else {
      window.addEventListener('load', hidePreloader);
      const timer = setTimeout(hidePreloader, 800);
      return () => {
        window.removeEventListener('load', hidePreloader);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <>
      {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}
      <main style={{ minHeight: '100vh', opacity: showPreloader ? 0 : 1, transition: 'opacity 0.3s ease' }}>
        <Particles />
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Certifications />
        <Insights />
        <TechStack />
        <Footer />
      </main>
    </>
  )
}

export default App
