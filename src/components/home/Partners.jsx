import { PARTNERS } from '../../data/site'

// Infinite logo marquee.
export default function Partners() {
  const row = [...PARTNERS, ...PARTNERS]
  return (
    <section className="border-y border-ink/10 bg-white py-14">
      <div className="container-wide">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">
          Trusted by leading developers, suppliers & institutions
        </p>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {row.map((p, i) => (
            <span
              key={i}
              className="font-display text-3xl font-bold text-ink/25 transition-colors hover:text-ink"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
