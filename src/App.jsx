import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import ScrollProgressBar from './components/layout/ScrollProgressBar'
import MagneticCursor from './components/layout/MagneticCursor'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Freelance from './components/sections/Freelance'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useReducedMotion } from './hooks/useReducedMotion'
import { ScrollTrigger } from './lib/gsap'

export default function App() {
  const reduced = useReducedMotion()
  useSmoothScroll(!reduced)

  // Recalculate ScrollTrigger positions once fonts/images have settled.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    const t = setTimeout(refresh, 400)
    window.addEventListener('load', refresh)
    return () => {
      clearTimeout(t)
      window.removeEventListener('load', refresh)
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative">
        <ScrollProgressBar />
        <MagneticCursor />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Freelance />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
