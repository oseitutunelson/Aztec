import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SectionHeading from '../SectionHeading'
import { PROCESS } from '../../data/site'

// Horizontal-scrolling pinned process timeline driven by GSAP ScrollTrigger.
export default function Process() {
  const root = useRef(null)
  const track = useRef(null)

  // useLayoutEffect so the cleanup (ctx.revert) runs synchronously on unmount,
  // un-wrapping the ScrollTrigger pin-spacer BEFORE React removes the DOM node.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = track.current
      if (!el) return
      const getScroll = () => el.scrollWidth - window.innerWidth + 96

      gsap.to(el, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${getScroll()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      // progress line
      gsap.fromTo(
        '.proc-progress',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${getScroll()}`,
            scrub: 1,
          },
        }
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden bg-bone py-0">
      <div className="flex h-screen flex-col justify-center">
        <div className="container-wide">
          <SectionHeading eyebrow="— Construction Process" title="How we deliver, step by step" size="md" />
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 top-[88px] h-px w-full bg-ink/10" />
          <div className="proc-progress absolute left-0 top-[88px] h-0.5 w-full origin-left bg-accent" />

          <div ref={track} className="flex gap-6 px-6 sm:px-8 lg:px-12">
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="group relative w-[78vw] shrink-0 pt-20 sm:w-[42vw] lg:w-[26vw]"
              >
                {/* node */}
                <span className="absolute left-0 top-[78px] grid h-5 w-5 -translate-y-1/2 place-items-center">
                  <span className="h-3 w-3 rounded-full bg-ink transition-colors group-hover:bg-accent" />
                </span>

                <div className="rounded-3xl border border-ink/10 bg-white p-8 transition-all duration-300 group-hover:border-accent group-hover:shadow-xl">
                  <span className="font-display text-6xl font-extrabold text-ink/10 transition-colors group-hover:text-accent">
                    {p.n}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-wide mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Scroll to advance →</p>
        </div>
      </div>
    </section>
  )
}
