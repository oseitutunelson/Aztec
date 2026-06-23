import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import Icon from '../Icon'
import Reveal from '../Reveal'
import { HOME_SERVICE_CARDS, SERVICE_CATEGORIES } from '../../data/site'

// Card variants exactly matching the uploaded design: white / black / yellow.
const VARIANT = {
  light: 'bg-white text-ink border border-ink/10',
  dark: 'bg-ink text-white',
  accent: 'bg-accent text-ink',
}
const ARROW_BG = {
  light: 'bg-ink text-white',
  dark: 'bg-accent text-ink',
  accent: 'bg-ink text-white',
}

export default function Services() {
  return (
    <section id="services" className="bg-bone py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading eyebrow="— Our Service" title={<>A Comprehensive Set<br className="hidden sm:block" /> Of Services</>} />
        <div className="mt-10 h-px w-full bg-ink/10" />

        {/* Signature 3 cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {HOME_SERVICE_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className={`group flex h-full min-h-[320px] flex-col justify-between rounded-3xl p-8 ${VARIANT[c.variant]}`}
              >
                <div>
                  <span className="mb-10 inline-block">
                    <Icon name={c.icon} size={48} className="opacity-90" />
                  </span>
                  <h3 className="font-display text-2xl font-bold leading-tight">{c.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${c.variant === 'dark' ? 'text-white/60' : c.variant === 'accent' ? 'text-ink/70' : 'text-muted'}`}>
                    {c.text}
                  </p>
                </div>
                <Link to="/services" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold">
                  Learn More
                  <span className={`grid h-8 w-8 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${ARROW_BG[c.variant]}`}>
                    <Icon name="arrow" size={14} />
                  </span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Full category grid */}
        <div className="mt-20">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <h3 className="display text-3xl sm:text-4xl">Every discipline, under one roof</h3>
              <Link to="/services" className="link-underline text-sm font-semibold text-ink/70">
                Explore all services →
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col bg-bone p-7 transition-colors duration-300 hover:bg-ink hover:text-white"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink/5 text-ink transition-colors group-hover:bg-accent group-hover:text-ink">
                      <Icon name={s.icon} size={24} />
                    </span>
                    <Icon name="arrow" size={18} className="text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                  <h4 className="mt-6 font-display text-xl font-bold">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted group-hover:text-white/60">
                    {s.blurb}
                  </p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/40 group-hover:text-accent">
                    {s.items.length} services
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
