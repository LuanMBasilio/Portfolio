import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/* ---------- FP-Matcher: duas digitais com pontos-chave ligados ---------- */
function ridges(cx, cy, seed) {
  return Array.from({ length: 9 }, (_, i) => {
    const rx = 10 + i * 7
    const ry = 14 + i * 8.5
    const gap = (seed + i * 37) % 360
    return { rx, ry, gap, cx, cy }
  })
}

const KEYPOINTS = [
  [-18, -30], [22, -22], [-30, 4], [28, 10], [-10, 34], [14, 40], [4, -8], [-38, -14],
]

export function FingerprintDemo() {
  const [matches, setMatches] = useState(0)
  const left = useMemo(() => ridges(70, 80, 20), [])
  const right = useMemo(() => ridges(210, 80, 60), [])

  useEffect(() => {
    const t = setInterval(() => setMatches(m => (m >= KEYPOINTS.length ? 0 : m + 1)), 550)
    return () => clearInterval(t)
  }, [])

  const score = Math.round((matches / KEYPOINTS.length) * 100)

  return (
    <div className="demo demo--fp">
      <svg viewBox="0 0 280 165" className="fp-svg" role="img" aria-label="Animação de correspondência de digitais">
        {[left, right].map((set, s) => (
          <g key={s} className="fp-ridges">
            {set.map((r, i) => (
              <ellipse
                key={i}
                cx={r.cx}
                cy={r.cy}
                rx={r.rx}
                ry={r.ry}
                pathLength="100"
                strokeDasharray={`${78 - (i % 3) * 4} ${22 + (i % 3) * 4}`}
                strokeDashoffset={r.gap / 3.6}
              />
            ))}
          </g>
        ))}
        {KEYPOINTS.slice(0, matches).map(([x, y], i) => (
          <g key={i} className="fp-match">
            <line x1={70 + x} y1={80 + y} x2={210 + x * 0.95} y2={80 + y * 1.02} />
            <circle cx={70 + x} cy={80 + y} r="3" />
            <circle cx={210 + x * 0.95} cy={80 + y * 1.02} r="3" />
          </g>
        ))}
        <rect className="fp-scan" x="0" y="0" width="280" height="3" />
      </svg>
      <div className="demo__footer mono">
        <span>ORB keypoints: {matches * 125}</span>
        <span className={score > 70 ? 'ok' : ''}>match: {score}%</span>
      </div>
    </div>
  )
}

/* ---------- Alice Bot: chat do Discord simulado ---------- */
const SCRIPT = [
  { who: 'user', text: '/encomendar item:Espada Lendária qtd:2' },
  { who: 'bot', title: '📦 Encomenda registrada', text: 'Pedido #0427 adicionado à fila. Posição: 3º' },
  { who: 'user', text: '/enquete pergunta:Treino sexta às 20h?' },
  { who: 'bot', title: '📊 Enquete criada', text: '✅ Sim   ❌ Não   — votação aberta por 24h' },
  { who: 'user', text: '/roll' },
  { who: 'bot', title: '🎲 Rolagem', text: 'Você tirou 17 de 20!' },
]

export function ChatDemo() {
  const [count, setCount] = useState(1)
  const boxRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setCount(c => (c >= SCRIPT.length ? 1 : c + 1)), 1700)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const el = boxRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [count])

  return (
    <div className="demo demo--chat">
      <div className="chat__head mono"># regimento-selva</div>
      <div className="chat__body" ref={boxRef}>
        {SCRIPT.slice(0, count).map((m, i) => (
          <div key={i} className={`msg msg--${m.who}`}>
            <span className="msg__avatar">{m.who === 'bot' ? 'A' : 'U'}</span>
            <div>
              <span className="msg__name">{m.who === 'bot' ? <>Alice <em>BOT</em></> : 'soldado_01'}</span>
              {m.who === 'bot' ? (
                <div className="embed">
                  <strong>{m.title}</strong>
                  <p>{m.text}</p>
                </div>
              ) : (
                <p className="mono">{m.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- BlackJack: contagem Hi-Lo jogável ---------- */
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const SUITS = ['♠', '♥', '♦', '♣']
const hiLo = r => (['2', '3', '4', '5', '6'].includes(r) ? 1 : ['10', 'J', 'Q', 'K', 'A'].includes(r) ? -1 : 0)

function newShoe(decks) {
  const shoe = []
  for (let d = 0; d < decks; d++) for (const s of SUITS) for (const r of RANKS) shoe.push({ r, s })
  for (let i = shoe.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shoe[i], shoe[j]] = [shoe[j], shoe[i]]
  }
  return shoe
}

export function CardCounterDemo() {
  const DECKS = 2
  const [shoe, setShoe] = useState(() => newShoe(DECKS))
  const [drawn, setDrawn] = useState([])
  const running = drawn.reduce((acc, c) => acc + hiLo(c.r), 0)
  const decksLeft = Math.max(shoe.length / 52, 0.25)
  const trueCount = running / decksLeft

  const draw = () => {
    if (!shoe.length) return
    setDrawn(d => [shoe[0], ...d].slice(0, 60))
    setShoe(s => s.slice(1))
  }
  const reset = () => { setShoe(newShoe(DECKS)); setDrawn([]) }

  const hint = trueCount >= 2 ? 'Vantagem do jogador — aumente a aposta' : trueCount <= -1 ? 'Baralho frio — aposte o mínimo' : 'Neutro — aposta padrão'

  return (
    <div className="demo demo--cards">
      <div className="cards-row">
        {drawn.slice(0, 5).map((c, i) => (
          <div key={shoe.length + i} className={`pcard ${['♥', '♦'].includes(c.s) ? 'pcard--red' : ''}`} style={{ '--i': i }}>
            <span>{c.r}</span><span>{c.s}</span>
            <em className={`pcard__val ${hiLo(c.r) > 0 ? 'pos' : hiLo(c.r) < 0 ? 'neg' : ''}`}>{hiLo(c.r) > 0 ? '+1' : hiLo(c.r) < 0 ? '−1' : '0'}</em>
          </div>
        ))}
        {!drawn.length && <p className="muted small">Clique em “Tirar carta” para começar</p>}
      </div>
      <div className="counter-stats mono">
        <div><small>running</small><strong>{running > 0 ? `+${running}` : running}</strong></div>
        <div><small>true count</small><strong>{trueCount.toFixed(1)}</strong></div>
        <div><small>cartas</small><strong>{shoe.length}</strong></div>
      </div>
      <p className="hint small">{hint}</p>
      <div className="demo__actions">
        <button className="btn btn--sm btn--primary" onClick={draw} disabled={!shoe.length}>Tirar carta</button>
        <button className="btn btn--sm btn--ghost" onClick={reset}>Embaralhar</button>
      </div>
    </div>
  )
}

/* ---------- Ordenação: visualizador de algoritmos ---------- */
function framesFor(algo, input) {
  const a = [...input]
  const frames = []
  const push = (hi = [], sorted = []) => frames.push({ arr: [...a], hi, sorted })

  if (algo === 'bubble') {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        push([j, j + 1])
        if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]]
      }
    }
  } else if (algo === 'insertion') {
    for (let i = 1; i < a.length; i++) {
      let j = i
      while (j > 0 && a[j - 1] > a[j]) {
        push([j - 1, j])
        ;[a[j - 1], a[j]] = [a[j], a[j - 1]]
        j--
      }
      push([j])
    }
  } else {
    const quick = (lo, hi) => {
      if (lo >= hi) return
      const pivot = a[hi]
      let i = lo
      for (let j = lo; j < hi; j++) {
        push([j, hi])
        if (a[j] < pivot) { [a[i], a[j]] = [a[j], a[i]]; i++ }
      }
      ;[a[i], a[hi]] = [a[hi], a[i]]
      push([i])
      quick(lo, i - 1)
      quick(i + 1, hi)
    }
    quick(0, a.length - 1)
  }
  frames.push({ arr: [...a], hi: [], sorted: a.map((_, i) => i) })
  return frames
}

const randomArray = () => Array.from({ length: 26 }, () => 8 + Math.floor(Math.random() * 92))

export function SortDemo() {
  const [algo, setAlgo] = useState('quick')
  const [base, setBase] = useState(randomArray)
  const [frame, setFrame] = useState(0)
  const [playing, setPlaying] = useState(false)
  const frames = useMemo(() => framesFor(algo, base), [algo, base])

  useEffect(() => {
    if (!playing) return
    if (frame >= frames.length - 1) { setPlaying(false); return }
    const t = setTimeout(() => setFrame(f => f + 1), algo === 'quick' ? 45 : 18)
    return () => clearTimeout(t)
  }, [playing, frame, frames.length, algo])

  const current = frames[Math.min(frame, frames.length - 1)]
  const choose = a => { setAlgo(a); setFrame(0); setPlaying(false) }
  const shuffle = () => { setBase(randomArray()); setFrame(0); setPlaying(false) }
  const done = frame >= frames.length - 1

  return (
    <div className="demo demo--sort">
      <div className="seg" role="tablist">
        {[['bubble', 'Bubble'], ['insertion', 'Insertion'], ['quick', 'Quick']].map(([k, l]) => (
          <button key={k} role="tab" aria-selected={algo === k} className={algo === k ? 'on' : ''} onClick={() => choose(k)}>{l}</button>
        ))}
      </div>
      <div className="bars">
        {current.arr.map((v, i) => (
          <span
            key={i}
            style={{ height: `${v}%` }}
            className={current.hi.includes(i) ? 'hi' : current.sorted.includes(i) ? 'done' : ''}
          />
        ))}
      </div>
      <div className="demo__footer mono">
        <span>passos: {frame}/{frames.length - 1}</span>
        <span>{algo === 'quick' ? 'O(n log n)' : 'O(n²)'}</span>
      </div>
      <div className="demo__actions">
        <button className="btn btn--sm btn--primary" onClick={() => (done ? (setFrame(0), setPlaying(true)) : setPlaying(p => !p))}>
          {playing ? 'Pausar' : done ? 'Repetir' : 'Ordenar'}
        </button>
        <button className="btn btn--sm btn--ghost" onClick={shuffle}>Novo array</button>
      </div>
    </div>
  )
}

/* ---------- APS: mini jogo de coleta ---------- */
const COLORS = [
  { name: 'vermelho', hex: '#ff5d73' },
  { name: 'azul', hex: '#4da3ff' },
  { name: 'verde', hex: '#3ddc97' },
  { name: 'amarelo', hex: '#ffc94d' },
]
const W = 300
const H = 170
const P = 18
const D = 18

function spawnDots() {
  return COLORS.map((c, id) => ({ id, x: 10 + Math.random() * (W - D - 20), y: 10 + Math.random() * (H - D - 20) }))
}

export function GameDemo() {
  const [player, setPlayer] = useState({ x: W / 2 - P / 2, y: H / 2 - P / 2 })
  const [dots, setDots] = useState(spawnDots)
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 4))
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(30)
  const [running, setRunning] = useState(false)
  const keys = useRef({})
  const areaRef = useRef(null)

  const start = () => {
    setScore(0); setTime(30); setDots(spawnDots()); setTarget(Math.floor(Math.random() * 4)); setRunning(true)
    areaRef.current?.focus()
  }

  // Cronômetro
  useEffect(() => {
    if (!running) return
    if (time <= 0) { setRunning(false); return }
    const t = setTimeout(() => setTime(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [running, time])

  // Loop de movimento
  useEffect(() => {
    if (!running) return
    let raf
    const step = () => {
      const k = keys.current
      const dx = (k.ArrowRight || k.d ? 1 : 0) - (k.ArrowLeft || k.a ? 1 : 0)
      const dy = (k.ArrowDown || k.s ? 1 : 0) - (k.ArrowUp || k.w ? 1 : 0)
      if (dx || dy) {
        setPlayer(p => ({
          x: Math.max(0, Math.min(W - P, p.x + dx * 3)),
          y: Math.max(0, Math.min(H - P, p.y + dy * 3)),
        }))
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [running])

  // Colisão AABB, como no jogo original
  useEffect(() => {
    if (!running) return
    const hit = dots.find(d => player.x < d.x + D && player.x + P > d.x && player.y < d.y + D && player.y + P > d.y)
    if (!hit) return
    setScore(s => (hit.id === target ? s + 10 : Math.max(0, s - 5)))
    setDots(spawnDots())
    setTarget(Math.floor(Math.random() * 4))
  }, [player, dots, target, running])

  const onKey = useCallback((e, down) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(k)) {
      e.preventDefault()
      keys.current[k] = down
    }
  }, [])

  // Toque/clique: o jogador se move em direção ao ponto clicado
  const onPoint = e => {
    if (!running) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * W - P / 2
    const y = ((e.clientY - r.top) / r.height) * H - P / 2
    setPlayer({ x: Math.max(0, Math.min(W - P, x)), y: Math.max(0, Math.min(H - P, y)) })
  }

  return (
    <div className="demo demo--game">
      <div className="game__hud mono">
        <span>alvo: <b style={{ color: COLORS[target].hex }}>● {COLORS[target].name}</b></span>
        <span>⏱ {time}s</span>
        <span>★ {score}</span>
      </div>
      <div
        ref={areaRef}
        className="game__area"
        tabIndex={0}
        onKeyDown={e => onKey(e, true)}
        onKeyUp={e => onKey(e, false)}
        onBlur={() => { keys.current = {} }}
        onPointerDown={onPoint}
        aria-label="Área do jogo. Use as setas ou WASD para mover."
      >
        <svg viewBox={`0 0 ${W} ${H}`}>
          {dots.map(d => (
            <rect key={d.id} x={d.x} y={d.y} width={D} height={D} rx="5" fill={COLORS[d.id].hex} />
          ))}
          <rect x={player.x} y={player.y} width={P} height={P} rx="4" className="game__player" />
        </svg>
        {!running && (
          <div className="game__overlay">
            {time === 0 && <p className="mono">Fim de jogo! Pontuação: {score}</p>}
            <button className="btn btn--sm btn--primary" onClick={start}>{time === 0 ? 'Jogar de novo' : 'Jogar'}</button>
            <p className="small muted">Setas / WASD ou toque para mover</p>
          </div>
        )}
      </div>
    </div>
  )
}

export const DEMOS = {
  fingerprint: FingerprintDemo,
  chat: ChatDemo,
  cards: CardCounterDemo,
  sort: SortDemo,
  game: GameDemo,
}
