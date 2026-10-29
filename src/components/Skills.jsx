import Section from './Section.jsx'
import { skillGroups } from '../data.js'

const marquee = ['Java', 'C#', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'OpenCV', 'Git', 'HTML', 'CSS', 'TCP/IP', 'Streamlit', 'discord.js']

export default function Skills() {
  // Efeito de brilho que segue o cursor dentro do card
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <Section id="skills" kicker="02 · habilidades" title="Minha caixa de ferramentas" subtitle="Tecnologias e fundamentos que uso para tirar ideias do papel.">
      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <article key={g.title} className="skill-card reveal" style={{ transitionDelay: `${i * 60}ms` }} onMouseMove={onMove}>
            <span className="skill-card__icon mono">{g.icon}</span>
            <h3>{g.title}</h3>
            <ul className="chips">
              {g.items.map(item => <li key={item} className="chip">{item}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </Section>
  )
}
