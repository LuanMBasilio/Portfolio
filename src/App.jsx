import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks.js'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch {}
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  useReveal()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
