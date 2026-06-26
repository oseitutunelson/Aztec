import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { unsplash } from '../../lib/img'

// Imagery — swap these Unsplash ids for licensed brand photography when available.
const HERO_WORKER = 'photo-1504307651254-35680f356dfd' // foreman in hi-vis + hard hat
const HERO_WORKER_ALT = 'photo-1581094794329-c8112a89af12' // engineer reviewing plans
const HERO_TEAM = 'photo-1541888946425-d81bb19240f5' // crew on site

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Warm dark gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #1a0d08 0%, #2a1410 45%, #3a1c12 100%)',
        }}
      />
      {/* Accent glow + blueprint texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 78% 40%, rgba(255, 107, 44, 0.22) 0%, transparent 65%)',
          }}
        />
        <div className="absolute inset-0 blueprint-grid opacity-[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-wide w-full px-6 pb-12 pt-28 sm:px-8 lg:px-12 lg:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* Left: copy */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                From Aspirations to Achievements Nurturing Ideal Realities
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
              >
                Embarking on a journey with a shared vision, we are dedicated to
                transforming aspirations into remarkable achievements. We work
                side by side with our clients.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent-400"
                >
                  Get started
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  <span>Free consultation</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    <Icon name="arrow" size={16} />
                  </span>
                </Link>
              </motion.div>

              {/* Inset image card */}
              <motion.div
                variants={itemVariants}
                className="mt-16 flex items-center gap-5"
              >
                <div className="h-24 w-36 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-xl sm:h-28 sm:w-44">
                  <img
                    src={unsplash(HERO_TEAM, { w: 400 })}
                    alt="Construction crew on site"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="max-w-[14rem] text-lg font-semibold leading-snug text-white">
                  New Constructors Shaping Tomorrow&rsquo;s World
                </p>
              </motion.div>
            </motion.div>

            {/* Right: layered worker imagery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative hidden h-[34rem] lg:block"
              aria-hidden="true"
            >
              <div className="absolute right-0 top-0 h-[30rem] w-[22rem] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <img
                  src={unsplash(HERO_WORKER, { w: 900 })}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-2 h-[18rem] w-[15rem] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <img
                  src={unsplash(HERO_WORKER_ALT, { w: 700 })}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -inset-6 -z-10 rounded-full bg-accent/15 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom readability scrim */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1a0d08] to-transparent" />
    </section>
  )
}
