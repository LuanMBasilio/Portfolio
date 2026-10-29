export default function Section({ id, kicker, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <header className="section__head reveal">
          <span className="kicker mono">{kicker}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
