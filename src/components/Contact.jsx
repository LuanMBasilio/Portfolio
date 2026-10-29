import { useState } from 'react'
import Section from './Section.jsx'
import { profile } from '../data.js'
import { MailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from './Icons.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', message: '' })

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  // Sem backend: abre o cliente de e-mail com a mensagem preenchida
  const send = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contato pelo portfólio — ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const channels = [
    { icon: MailIcon, label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
    { icon: PhoneIcon, label: 'WhatsApp', value: profile.phone, href: profile.phoneLink },
    { icon: LinkedInIcon, label: 'LinkedIn', value: '/in/luanmbasilio', href: profile.links.linkedin },
    { icon: GitHubIcon, label: 'GitHub', value: '@LuanMBasilio', href: profile.links.github },
  ]

  return (
    <Section id="contato" kicker="06 · contato" title="Vamos construir algo juntos?" subtitle="Estou aberto a estágios, vagas júnior e projetos colaborativos.">
      <div className="contact">
        <div className="contact__channels reveal">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="channel">
              <span className="channel__icon"><Icon /></span>
              <span>
                <small className="muted">{label}</small>
                <strong>{value}</strong>
              </span>
            </a>
          ))}
          <button className="btn btn--ghost btn--sm" onClick={copy}>{copied ? '✔ E-mail copiado' : 'Copiar e-mail'}</button>
        </div>

        <form className="contact__form reveal" onSubmit={send}>
          <label>
            Seu nome
            <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Como posso te chamar?" />
          </label>
          <label>
            Mensagem
            <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Conte um pouco sobre a vaga ou o projeto..." />
          </label>
          <button className="btn btn--primary" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </Section>
  )
}
