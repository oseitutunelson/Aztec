import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import BeforeAfter from '../components/BeforeAfter'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { PROJECTS, PROJECT_CATEGORIES } from '../data/site'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [layout, setLayout] = useState('masonry')
  const list = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      <Seo title="Projects — Aztec Construction Portfolio" description="Explore Aztec's portfolio of residential, commercial, hospitality, mixed-use and infrastructure projects." />
      <PageHero
        eyebrow="— Portfolio"
        title="Projects That Define Skylines"
        intro="A selection of the buildings we have designed, engineered and delivered."
        image="photo-1545324418-cc1a3fa10c00"
      />

      {/* stat band */}
      <section className="bg-white py-12">
        <div className="container-wide grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { v: 480, s: '+', l: 'Projects' },
            { v: 5, s: '', l: 'Sectors' },
            { v: 27, s: '+', l: 'Years' },
            { v: 100, s: '%', l: 'On-time' },
          ].map((x) => (
            <Reveal key={x.l}>
              <div className="text-center">
                <p className="font-display text-4xl font-extrabold text-ink"><Counter value={x.v} suffix={x.s} /></p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">{x.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* controls */}
      <section className="bg-bone py-16 sm:py-20">
        <div className="container-wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                    filter === c ? 'border-ink bg-ink text-white' : 'border-ink/15 text-ink/70 hover:border-ink'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex gap-1 rounded-full border border-ink/15 p-1">
              {['masonry', 'grid'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLayout(l)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition-colors ${layout === l ? 'bg-accent text-ink' : 'text-ink/50'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* gallery */}
          {layout === 'masonry' ? (
            <div className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3 [&>*]:mb-8 [&>*]:break-inside-avoid">
              <AnimatePresence>
                {list.map((p, i) => (
                  <motion.div key={p.slug} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={i % 3 === 1 ? 'lg:pt-10' : ''}>
                    <ProjectCard project={p} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {list.map((p, i) => (
                  <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                    <ProjectCard project={p} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* before/after */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-wide">
          <SectionHeading eyebrow="— Transformations" title="Before & after" align="center" />
          <div className="mx-auto mt-12 max-w-4xl">
            <BeforeAfter before="photo-1574359411659-15573a27fd0c" after="photo-1600566753086-00f18fb6b3ea" />
          </div>
        </div>
      </section>
    </>
  )
}
