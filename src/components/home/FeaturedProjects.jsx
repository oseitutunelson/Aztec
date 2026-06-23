import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import ProjectCard from '../ProjectCard'
import BeforeAfter from '../BeforeAfter'
import Reveal from '../Reveal'
import Button from '../Button'
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/site'

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="bg-ink py-24 text-white sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="— Recent Work" title={<>Take A Look At Our<br className="hidden sm:block" /> Latest Projects</>} light />
          <Reveal>
            <Button to="/projects" variant="outline-light">All Projects</Button>
          </Reveal>
        </div>

        {/* filters */}
        <div className="mt-12 flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                filter === c
                  ? 'border-accent bg-accent text-ink'
                  : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div layout className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-ink-800 p-3"
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* before / after feature */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="eyebrow text-accent">— Before & After</span>
              <h3 className="display mt-5 text-4xl sm:text-5xl">
                The transformation<br /> speaks for itself
              </h3>
              <p className="mt-5 max-w-md text-white/60">
                Drag the slider to see how our renovation and remodeling teams turn
                tired structures into refined, modern spaces.
              </p>
              <Link to="/services" className="mt-7 inline-flex">
                <Button variant="accent">Explore Renovation</Button>
              </Link>
            </div>
          </Reveal>
          <Reveal direction="left">
            <BeforeAfter
              before="photo-1581094794329-c8112a89af12"
              after="photo-1600585154340-be6161a56a0c"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
