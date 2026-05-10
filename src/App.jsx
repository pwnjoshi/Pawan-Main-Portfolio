import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Terminal from './components/Terminal'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Terminal />
      <Projects />
      <TechStack />
      <Footer />
    </main>
  )
}

export default App
