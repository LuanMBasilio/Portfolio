import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks.js'
import { SunIcon, MoonIcon } from './Icons.jsx'

const SECTIONS = [
  ['sobre', 'Sobre'],
  ['skills', 'Skills'],
  ['projetos', 'Projetos'],
  ['trajetoria', 'Trajetória'],
  ['curriculo', 'Currículo'],
  ['contato', 'Contato'],
]
const IDS = ['inicio', ...SECTIONS.map(s => s[0])]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__logo-mark">LB</span>
          <span className="nav__logo-text">luan<span className="accent">.dev</span></span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Principal">
          {SECTIONS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Alternar tema">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className={`burger ${open ? 'burger--open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
