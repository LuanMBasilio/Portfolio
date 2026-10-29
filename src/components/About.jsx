import Section from './Section.jsx'
import { about, stats, profile } from '../data.js'
import { PinIcon } from './Icons.jsx'

export default function About() {
  return (
    <Section id="sobre" kicker="01 · sobre mim" title="Código com disciplina de quartel">
      <div className="about">
        <div className="about__card reveal">
          <div className="avatar">
            <span>LB</span>
          </div>
          <h3>{profile.name}</h3>
          <p className="muted">{profile.role}</p>
          <p className="about__loc"><PinIcon width={16} height={16} /> {profile.location}</p>
        </div>

        <div className="about__text reveal">
          {about.map((p, i) => <p key={i}>{p}</p>)}
          <div className="stats">
            {stats.map(s => (
              <div key={s.label} className="stat">
                <strong className="gradient-text">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
