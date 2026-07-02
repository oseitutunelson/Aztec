import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV, COMPANY } from '../data/site'
import Logo from './Logo'
import Button from './Button'
import Icon from './Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'mx-auto mt-3 max-w-wide rounded-full border border-white/10 bg-ink/85 px-2 py-2 backdrop-blur-xl sm:mx-4 lg:mx-6'
            : 'bg-transparent px-0 py-4'
        }`}
      >
        <nav className="container-wide flex items-center justify-between">
          <Link to="/" aria-label="ArkNova home" className="shrink-0">
            <Logo className="text-white" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive ? 'text-accent' : 'text-white/80 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-accent"
            >
              <Icon name="phone" size={16} />
              {COMPANY.phone}
            </a>

            <Button to="/contact" variant="accent" arrow={false} className="!rounded-lg !py-2.5 !px-6">
              Contact us
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pt-28 pb-10">
              <ul className="flex flex-col gap-2">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <Link
                      to={item.to}
                      className="display block py-2 text-5xl text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button to="/contact" variant="accent" className="w-full">
                  Contact us
                </Button>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-white/80 transition-colors hover:text-accent">
                    <Icon name="phone" size={18} />
                    <span className="text-lg font-semibold">{COMPANY.phone}</span>
                  </a>
                  <a href={`tel:${COMPANY.phone2}`} className="flex items-center gap-3 text-white/80 transition-colors hover:text-accent">
                    <Icon name="phone" size={18} />
                    <span className="text-lg font-semibold">{COMPANY.phone2}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

