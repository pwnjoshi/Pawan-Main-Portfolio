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
import Cursor from './components/Cursor'
import Particles from './components/Particles'

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Hide preloader after page fully loads or after 1.5s
    const hidePreloader = () => setShowPreloader(false);
    
    window.addEventListener('load', hidePreloader);
    const timer = setTimeout(hidePreloader, 1500);

    return () => {
      window.removeEventListener('load', hidePreloader);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}
      <main style={{ display: showPreloader ? 'none' : 'block' }}>
        <Particles />
        <Cursor />
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
