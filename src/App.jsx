import { useState, useRef } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const heroVideoRef = useRef(null)
  const [isPreloaderActive, setIsPreloaderActive] = useState(true)

  const handleStartExperience = () => {
    // 1. Direct synchronous execution inside user gesture handler:
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = false
      heroVideoRef.current.volume = 1.0
      heroVideoRef.current.currentTime = 0
      const playPromise = heroVideoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Audio play gesture error:", err)
        })
      }
    }
    // 2. Hide preloader
    setIsPreloaderActive(false)
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#ff2a2a] selection:text-white">
      <Preloader 
        isActive={isPreloaderActive} 
        onStart={handleStartExperience} 
      />
      <Navbar />
      <Hero videoRef={heroVideoRef} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App



