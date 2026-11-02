import { useState } from 'react'
import Section from './Section.jsx'
import { profile, resumeBase, resumes } from '../data.js'
import { PrintIcon } from './Icons.jsx'

const clean = url => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

// A versão escolhida fica na URL (?cv=cyber) para poder enviar o link de cada currículo
function getInitialId() {
  const id = new URLSearchParams(window.location.search).get('cv')
  return resumes.some(r => r.id === id) ? id : resumes[0].id
}

export default function Resume() {
  const [id, setId] = useState(getInitialId)
  const resume = { ...resumeBase, ...resumes.find(r => r.id === id) }

  const select = next => {
    setId(next)
    const url = new URL(window.location.href)
    url.searchParams.set('cv', next)
    window.history.replaceState(null, '', url)
  }

  // Nome do PDF salvo inclui a área de foco
  const print = () => {
    const prev = document.title
    document.title = `Curriculo - ${profile.name} - ${resume.label}`
    window.print()
    document.title = prev
  }

  return (
    <Section
      id="curriculo"
      kicker="05 · currículo"
      title="Currículo"
      subtitle="Escolha a área de foco para ver a versão correspondente. Use o botão para imprimir ou salvar em PDF."
      className="section--resume"
    >
      <div className="resume-actions reveal">
        <div className="filters" role="tablist" aria-label="Área de foco do currículo">
          {resumes.map(r => (
            <button key={r.id} role="tab" aria-selected={id === r.id} className={id === r.id ? 'on' : ''} onClick={() => select(r.id)}>
              {r.label}
            </button>
          ))}
        </div>
        <button className="btn btn--primary" onClick={print}>
          <PrintIcon width={18} height={18} /> Imprimir / Salvar PDF
        </button>
      </div>

      <article className="resume reveal" aria-label="Currículo">
        <header className="resume__head">
          <div>
            <h3 className="resume__name">{profile.name}</h3>
            <p className="resume__headline">{resume.headline}</p>
          </div>
          <ul className="resume__contact">
            <li>{profile.location}</li>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.phoneLink}>{profile.phone}</a></li>
            <li><a href={profile.links.linkedin}>{clean(profile.links.linkedin)}</a></li>
            <li><a href={profile.links.github}>{clean(profile.links.github)}</a></li>
          </ul>
        </header>

        <div className="resume__grid">
          <div className="resume__main">
            <section>
              <h4>Resumo profissional</h4>
              <p>{resume.summary}</p>
            </section>

            <section>
              <h4>Experiência</h4>
              {resume.experience.map(e => (
                <div key={e.role} className="resume__entry">
                  <div className="resume__entry-head">
                    <strong>{e.role}</strong>
                    <span>{e.period}</span>
                  </div>
                  <p className="resume__org">{e.org} · {e.place}</p>
                  <ul>
                    {e.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h4>Projetos em destaque</h4>
              <ul className="resume__projects">
                {resume.projects.map(p => (
                  <li key={p.name}><strong>{p.name}</strong> — {p.text}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="resume__side">
            <section>
              <h4>Formação</h4>
              {resume.education.map(e => (
                <div key={e.course} className="resume__entry">
                  <strong>{e.course}</strong>
                  <p className="resume__org">{e.org}</p>
                  <p className="resume__period">{e.period}</p>
                </div>
              ))}
            </section>

            <section>
              <h4>Competências técnicas</h4>
              <dl className="resume__skills">
                {resume.skills.map(s => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h4>Idiomas</h4>
              <ul className="resume__plain">
                {resume.languages.map(l => <li key={l}>{l}</li>)}
              </ul>
            </section>

            <section>
              <h4>Desenvolvimento contínuo</h4>
              <ul className="resume__plain">
                {resume.extras.map(l => <li key={l}>{l}</li>)}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </Section>
  )
}
