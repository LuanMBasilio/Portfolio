import { useEffect, useState } from 'react'

// Revela elementos com a classe .reveal quando entram na tela
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.12 },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Efeito de digitação que alterna entre várias frases
export function useTypewriter(words, { typeMs = 70, deleteMs = 35, holdMs = 1600 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? deleteMs : typeMs
    if (!deleting && text === word) delay = holdMs

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex(i => i + 1)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs])

  return text
}

// Seção ativa no menu conforme a rolagem
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}
