import { useEffect } from 'react'
import Lenis from 'lenis'
import CosmicBackground from './components/CosmicBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="bg-transparent min-h-screen overflow-x-hidden relative text-white">
      {/* Global Scroll-Driven Cosmic Background */}
      <CosmicBackground />
      
      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
