import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import Icon from '../Icon'
import { WHY_US } from '../../data/site'

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="— Why Choose Us"
          title="Built on trust, delivered with precision"
          intro="Six reasons clients choose ArkNova to design and build their most important projects."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 p-8 transition-colors hover:border-ink"
              >
                {/* number watermark */}
                <span className="absolute -right-2 -top-4 font-display text-8xl font-extrabold text-ink/[0.04]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-ink text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                  <Icon name={w.icon} size={26} />
                </span>
                <h3 className="relative mt-6 font-display text-xl font-bold">{w.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">{w.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

