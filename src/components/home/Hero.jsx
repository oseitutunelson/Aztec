import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import HeroCanvas from '../../three/HeroCanvas'
import Button from '../Button'
import Counter from '../Counter'
import Icon from '../Icon'
import { STATS } from '../../data/site'

const headlineWords = ['Building', 'Excellence', 'From', 'Design', 'To', 'Completion']

export default function Hero() {
  const scrollRef = useRef(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const h = el.offsetHeight || window.innerHeight
      scrollRef.current = Math.min(1, Math.max(0, window.scrollY / h))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-ink text-white">
      {/* 3D scene */}
      <HeroCanvas scrollRef={scrollRef} />

      {/* gradients for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/20 to-ink" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent" />

      {/* floating blueprint chips */}
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[22%] hidden glass rounded-2xl px-5 py-4 lg:block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-ink">
            <Icon name="crane" size={20} />
          </span>
          <div>
            <p className="text-xs text-white/50">Now building</p>
            <p className="text-sm font-semibold">9 active sites</p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 flex min-h-screen flex-col justify-end">
        <div className="container-wide pb-12 pt-32">
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="eyebrow text-accent">— Premium Construction & Engineering</span>
          </motion.div>

          {/* headline with word-by-word reveal */}
          <h1 className="display max-w-5xl text-[13vw] leading-[0.9] sm:text-7xl lg:text-8xl xl:text-[8.5rem]">
            {headlineWords.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block pr-[0.18em]"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w === 'Excellence' || w === 'Completion' ? (
                    <span className="text-accent">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            We deliver world-class architectural design, construction, engineering,
            renovation, and project management solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="accent">Request Quote</Button>
            <Button to="/projects" variant="outline-light">View Projects</Button>
          </motion.div>

          {/* inline stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label} className="bg-ink/40 px-5 py-5 backdrop-blur-sm">
                <div className="font-display text-3xl font-extrabold text-accent">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/50">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* scroll cue */}
        <div className="container-wide pb-6">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40"
          >
            <span className="h-8 w-px bg-white/30" />
            Scroll to explore
          </motion.div>
        </div>
      </div>
    </section>
  )
}
