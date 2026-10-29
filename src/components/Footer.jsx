import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="mono muted small">feito com React + Vite · <a href="#inicio">voltar ao topo ↑</a></p>
      </div>
    </footer>
  )
}
