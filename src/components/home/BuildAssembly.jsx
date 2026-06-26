import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SectionHeading from '../SectionHeading'

// Scroll-driven SVG building assembly: foundation → frame → walls → roof → reveal.
// Pinned section; the building assembles as the user scrolls through it.
const STEPS = [
  { title: 'Foundation', text: 'We set a precise, engineered foundation built to carry the full structure.' },
  { title: 'Structural Frame', text: 'Steel and concrete frames assemble into a rigid, code-compliant skeleton.' },
  { title: 'Walls & Floors', text: 'Floor plates and envelope take shape, defining every space.' },
  { title: 'Roof & Crown', text: 'The roof completes the form and seals the building against the elements.' },
  { title: 'Finished Build', text: 'A refined, handover-ready building — delivered to a luxury standard.' },
]

export default function BuildAssembly() {
  const root = useRef(null)
  const progressBar = useRef(null)

  // useLayoutEffect so cleanup runs synchronously before React unmounts the
  // pinned node — otherwise GSAP's pin-spacer breaks removeChild on navigation.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = {
        foundation: '.ba-foundation',
        frame: '.ba-frame',
        walls: '.ba-wall',
        floors: '.ba-floor',
        roof: '.ba-roof',
        glow: '.ba-glow',
        windows: '.ba-window',
      }

      // initial states
      gsap.set(els.foundation, { scaleY: 0, transformOrigin: 'bottom' })
      gsap.set(els.frame, { opacity: 0, y: 16 })
      gsap.set(els.walls, { scaleY: 0, transformOrigin: 'bottom' })
      gsap.set(els.floors, { scaleX: 0, transformOrigin: 'left' })
      gsap.set(els.roof, { y: -40, opacity: 0 })
      gsap.set(els.windows, { opacity: 0 })
      gsap.set(els.glow, { opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=2600',
          scrub: 1,
          pin: '.ba-stage',
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressBar.current)
              progressBar.current.style.transform = `scaleX(${self.progress})`
            const idx = Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length))
            const cards = root.current.querySelectorAll('.ba-step')
            cards.forEach((c, i) => c.classList.toggle('is-active', i === idx))
          },
        },
      })

      tl.to(els.foundation, { scaleY: 1, duration: 1, ease: 'power2.out' })
        .to(els.frame, { opacity: 1, y: 0, duration: 1.2, stagger: 0.06 }, '>-0.2')
        .to(els.walls, { scaleY: 1, duration: 1.2, stagger: 0.05 }, '>-0.4')
        .to(els.floors, { scaleX: 1, duration: 1, stagger: 0.04 }, '>-0.6')
        .to(els.roof, { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.4)' }, '>-0.2')
        .to(els.windows, { opacity: 1, duration: 0.8, stagger: 0.02 }, '>-0.3')
        .to(els.glow, { opacity: 1, duration: 1 }, '>-0.4')
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative bg-ink text-white">
      <div className="ba-stage relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

        <div className="container-wide relative grid w-full gap-12 lg:grid-cols-2 lg:items-center">
          {/* Copy column */}
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="— How It Rises"
              title={<>From Foundation<br />To Finish</>}
              light
              size="lg"
            />
            <p className="mt-6 max-w-md text-white/60">
              Scroll to watch a building come together exactly the way we deliver it —
              stage by stage, engineered at every step.
            </p>

            <div className="mt-10 space-y-3">
              {STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className="ba-step rounded-2xl border border-white/10 px-5 py-4 transition-all duration-300 data-[active]:border-accent"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-xs font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold">{s.title}</h4>
                      <p className="ba-step-text mt-0.5 text-xs leading-relaxed text-white/50">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div ref={progressBar} className="h-full w-full origin-left scale-x-0 bg-accent" />
            </div>
          </div>

          {/* SVG building column */}
          <div className="order-1 flex items-end justify-center lg:order-2">
            <svg viewBox="0 0 320 360" className="h-[44vh] w-auto max-h-[460px] lg:h-[70vh]">
              {/* glow */}
              <ellipse className="ba-glow" cx="160" cy="330" rx="150" ry="22" fill="#ff6b2c" opacity="0.18" />

              {/* foundation */}
              <rect className="ba-foundation" x="60" y="312" width="200" height="22" fill="#ff6b2c" rx="2" />

              {/* structural frame (lines) */}
              <g className="ba-frame" stroke="#5a5a5a" strokeWidth="2" fill="none">
                <path d="M80 312 V96 M240 312 V96 M80 96 H240" />
                <path d="M120 312 V96 M160 312 V96 M200 312 V96" />
                <path d="M80 250 H240 M80 190 H240 M80 130 H240" />
              </g>

              {/* walls (3 rising blocks) */}
              <rect className="ba-wall" x="82" y="252" width="76" height="58" fill="#1d1d1f" />
              <rect className="ba-wall" x="162" y="252" width="76" height="58" fill="#202024" />
              <rect className="ba-wall" x="82" y="192" width="156" height="58" fill="#1a1a1c" />
              <rect className="ba-wall" x="82" y="132" width="156" height="58" fill="#1d1d1f" />
              <rect className="ba-wall" x="100" y="98" width="120" height="34" fill="#202024" />

              {/* floor lines (accent) */}
              <rect className="ba-floor" x="82" y="250" width="156" height="3" fill="#ff6b2c" />
              <rect className="ba-floor" x="82" y="190" width="156" height="3" fill="#ff6b2c" />
              <rect className="ba-floor" x="82" y="130" width="156" height="3" fill="#ff6b2c" />

              {/* windows */}
              <g className="ba-window" fill="#ff6b2c" opacity="0.85">
                <rect x="94" y="262" width="14" height="18" />
                <rect x="118" y="262" width="14" height="18" />
                <rect x="178" y="262" width="14" height="18" />
                <rect x="202" y="262" width="14" height="18" />
                <rect x="100" y="202" width="14" height="18" />
                <rect x="148" y="202" width="14" height="18" />
                <rect x="196" y="202" width="14" height="18" />
                <rect x="100" y="142" width="14" height="18" />
                <rect x="148" y="142" width="14" height="18" />
                <rect x="196" y="142" width="14" height="18" />
              </g>

              {/* roof / crown */}
              <g className="ba-roof">
                <rect x="96" y="86" width="128" height="14" fill="#0c0c0c" />
                <rect x="150" y="58" width="6" height="30" fill="#ff6b2c" />
                <circle cx="153" cy="56" r="4" fill="#ff6b2c" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .ba-step.is-active { border-color: #ff6b2c; background: rgba(255,107,44,0.06); }
        .ba-step.is-active .ba-step-text { color: rgba(255,255,255,0.8); }
      `}</style>
    </section>
  )
}
