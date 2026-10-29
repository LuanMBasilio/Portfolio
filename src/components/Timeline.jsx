import Section from './Section.jsx'
import { timeline } from '../data.js'

export default function Timeline() {
  return (
    <Section id="trajetoria" kicker="04 · trajetória" title="Do técnico ao quartel, do quartel ao código">
      <ol className="timeline">
        {timeline.map((t, i) => (
          <li key={t.title} className="timeline__item reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="timeline__dot" />
            <span className="timeline__year mono">{t.year}</span>
            <div className="timeline__card">
              <h3>{t.title}</h3>
              <p className="muted small">{t.org}</p>
              <p>{t.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
