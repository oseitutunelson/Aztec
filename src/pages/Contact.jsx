import { useState } from 'react'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { COMPANY, SERVICE_CATEGORIES } from '../data/site'

const CONTACT_CARDS = [
  { icon: 'phone', label: 'Call Us', value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/[^+\d]/g, '')}` },
  { icon: 'mail', label: 'Email Us', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: 'whatsapp', label: 'WhatsApp', value: 'Chat with our team', href: `https://wa.me/${COMPANY.whatsapp}` },
  { icon: 'pin', label: 'Visit Us', value: COMPANY.address, href: '#map' },
]

const OFFICES = [
  { city: 'Inglewood (HQ)', address: COMPANY.address, phone: COMPANY.phone },
  { city: 'Seattle', address: '210 Pioneer Sq, Seattle, WA 98104', phone: '+1 (206) 555-0188' },
  { city: 'Austin', address: '500 Congress Ave, Austin, TX 78701', phone: '+1 (512) 555-0123' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  }

  return (
    <>
      <Seo title="Contact ArkNova — Request a Quote" description="Get in touch with ArkNova for a free consultation or project estimate. Offices, phone, email and WhatsApp." />
      <PageHero
        eyebrow="— Contact"
        title="Let's Build Together"
        intro="Tell us about your project. We'll get back to you within one business day."
        image="photo-1497366754035-f200968a6e72"
      />

      {/* Contact cards */}
      <section className="bg-white py-16">
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a href={c.href} className="group block h-full rounded-3xl border border-ink/10 p-7 transition-colors hover:border-ink hover:bg-ink hover:text-white">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-ink"><Icon name={c.icon} size={24} /></span>
                <p className="mt-5 text-xs uppercase tracking-wide text-ink/40 group-hover:text-white/50">{c.label}</p>
                <p className="mt-1 font-display text-lg font-bold">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-bone py-24 sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
              <SectionHeading eyebrow="— Request a Quote" title="Start your project" size="md" />
              <form onSubmit={submit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required value={form.name} onChange={update('name')} placeholder="Jane Cooper" />
                  <Field label="Email" type="email" required value={form.email} onChange={update('email')} placeholder="jane@email.com" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone" value={form.phone} onChange={update('phone')} placeholder="+1 (555) 000-0000" />
                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink">Service</label>
                    <select value={form.service} onChange={update('service')} className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none">
                      <option value="">Select a service</option>
                      {SERVICE_CATEGORIES.map((s) => <option key={s.slug}>{s.title}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink">Estimated Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {['< $50k', '$50k–$250k', '$250k–$1M', '$1M+'].map((b) => (
                      <button type="button" key={b} onClick={() => setForm((f) => ({ ...f, budget: b }))} className={`rounded-full border px-4 py-2 text-sm transition-colors ${form.budget === b ? 'border-ink bg-ink text-white' : 'border-ink/15 text-ink/70 hover:border-ink'}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink">Project Details</label>
                  <textarea value={form.message} onChange={update('message')} rows={5} placeholder="Tell us about your project, location and timeline..." className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none" />
                </div>
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-ink transition-colors hover:bg-accent-400">
                  Send Request
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"><Icon name="arrow" size={14} /></span>
                </button>
                {sent && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 rounded-xl bg-accent/15 px-4 py-3 text-sm font-medium text-ink">
                    <Icon name="check" size={18} /> Thank you — we&apos;ll be in touch within one business day.
                  </motion.p>
                )}
              </form>
            </div>
          </Reveal>

          {/* Info column */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-ink p-8 text-white">
                <h3 className="font-display text-xl font-bold">Our Offices</h3>
                <div className="mt-6 space-y-6">
                  {OFFICES.map((o) => (
                    <div key={o.city} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <p className="font-display text-lg font-bold text-accent">{o.city}</p>
                      <p className="mt-1 text-sm text-white/60">{o.address}</p>
                      <p className="mt-1 text-sm text-white/60">{o.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-ink/10 bg-white p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-ink"><Icon name="clock" size={22} /></span>
                  <div>
                    <p className="font-display text-lg font-bold">Office Hours</p>
                    <p className="text-sm text-muted">{COMPANY.hours}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="bg-white pb-24">
        <div className="container-wide">
          <div className="overflow-hidden rounded-3xl border border-ink/10">
            <iframe
              title="ArkNova office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.52%2C37.70%2C-122.35%2C37.83&layer=mapnik"
              className="h-[420px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, required, type = 'text', ...rest }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input type={type} required={required} {...rest} className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none" />
    </div>
  )
}

