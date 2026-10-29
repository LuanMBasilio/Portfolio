import { useState } from 'react'
import Section from './Section.jsx'
import { projects, profile } from '../data.js'
import { DEMOS } from './Demos.jsx'
import { GitHubIcon, ArrowIcon } from './Icons.jsx'

const FILTERS = [
  ['all', 'Todos'],
  ['java', 'Java'],
  ['python', 'Python'],
  ['javascript', 'JavaScript'],
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const list = projects.filter(p => filter === 'all' || p.category === filter)

  return (
    <Section
      id="projetos"
      kicker="03 · projetos"
      title="Projetos que você pode testar"
      subtitle="Cada card traz uma mini-demonstração interativa inspirada no projeto original."
    >
      <div className="filters reveal" role="tablist" aria-label="Filtrar projetos">
        {FILTERS.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={filter === k} className={filter === k ? 'on' : ''} onClick={() => setFilter(k)}>
            {l}
            <span className="count">{k === 'all' ? projects.length : projects.filter(p => p.category === k).length}</span>
          </button>
        ))}
      </div>

      <div className="projects">
        {list.map(p => {
          const Demo = DEMOS[p.demo]
          return (
            <article key={p.id} className={`project ${p.featured ? 'project--featured' : ''}`}>
              <div className="project__demo">
                <Demo />
              </div>
              <div className="project__body">
                <span className="project__tagline mono">{p.tagline}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="chips">
                  {p.tags.map(t => <li key={t} className="chip chip--outline">{t}</li>)}
                </ul>
                <a href={p.repo} target="_blank" rel="noreferrer" className="link-arrow">
                  <GitHubIcon width={18} height={18} /> Ver código <ArrowIcon width={16} height={16} />
                </a>
              </div>
            </article>
          )
        })}
      </div>

      <div className="center reveal">
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
          <GitHubIcon width={18} height={18} /> Mais no GitHub
        </a>
      </div>
    </Section>
  )
}
