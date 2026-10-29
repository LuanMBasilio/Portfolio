import { useEffect, useRef } from 'react'
import { profile } from '../data.js'
import { useTypewriter } from '../hooks.js'
import { GitHubIcon, LinkedInIcon, ShieldIcon } from './Icons.jsx'

// Rede de partículas animada que reage ao mouse
function ParticleField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: -9999, y: -9999 }
    let w, h, particles, raf

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(90, Math.floor((w * h) / 14000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }))
    }

    const draw = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--particle').trim() || '124,92,255'
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < 120) {
          p.x += (dx / d) * 1.2
          p.y += (dy / d) * 1.2
        }
        ctx.fillStyle = `rgba(${color},0.8)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(${color},${0.22 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const onMove = e => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const onLeave = () => { mouse.x = mouse.y = -9999 }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.parentElement.addEventListener('mousemove', onMove)
    canvas.parentElement.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('mousemove', onMove)
      canvas.parentElement?.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />
}

function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="dot dot--r" /><span className="dot dot--y" /><span className="dot dot--g" />
        <span className="terminal__title">luan@portfolio: ~</span>
      </div>
      <div className="terminal__body">
        <p><span className="prompt">$</span> whoami</p>
        <p className="out">luan_basilio — dev &amp; estudante de CC</p>
        <p><span className="prompt">$</span> cat stack.json</p>
        <pre className="out code">{`{
  "langs": ["Java", "C#", "Python", "JS"],
  "web":   ["React", "Node.js", "HTML/CSS"],
  "data":  ["SQL", "Modelagem"],
  "sec":   "TryHackMe 🛡"
}`}</pre>
        <p><span className="prompt">$</span> status --disponivel</p>
        <p className="out ok">✔ aberto a estágio e vagas júnior</p>
        <p><span className="prompt">$</span> <span className="caret" /></p>
      </div>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="inicio" className="hero">
      <ParticleField />
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />

      <div className="container hero__inner">
        <div className="hero__text">
          <span className="badge"><span className="pulse" /> Disponível para oportunidades</span>
          <h1 className="hero__title">
            Olá, eu sou <br />
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero__typed" aria-live="polite">
            <span className="mono accent">&gt;</span> {typed}<span className="cursor">|</span>
          </p>
          <p className="hero__lead">
            Estudante de Ciência da Computação que constrói aplicações web, bots e ferramentas com foco em código limpo,
            lógica sólida e — graças ao Exército — muita disciplina.
          </p>

          <div className="hero__cta">
            <a href="#projetos" className="btn btn--primary">Ver projetos</a>
            <a href="#curriculo" className="btn btn--ghost">Currículo</a>
          </div>

          <div className="hero__socials">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={profile.links.tryhackme} target="_blank" rel="noreferrer" aria-label="TryHackMe"><ShieldIcon /></a>
          </div>
        </div>

        <div className="hero__visual">
          <Terminal />
          <div className="float-chip float-chip--a">☕ Java</div>
          <div className="float-chip float-chip--b">🐍 Python</div>
          <div className="float-chip float-chip--c">⚛ React</div>
        </div>
      </div>

      <a href="#sobre" className="scroll-hint" aria-label="Rolar para baixo"><span /></a>
    </section>
  )
}
