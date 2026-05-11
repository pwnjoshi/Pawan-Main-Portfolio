import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Insights from './components/Insights'
import Terminal from './components/Terminal'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

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
        <Navbar />
        <Hero />
        <Experience />
        <Terminal />
        <Projects />
        <Insights />
        <TechStack />
        <Footer />
      </main>
    </>
  )
}

export default App
