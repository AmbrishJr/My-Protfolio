import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { nav, site } from '../../data/site'
import { scrollToId } from '../../hooks/useSmoothScroll'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV_IDS = nav.map((n) => n.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-[65] transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <button
          onClick={() => scrollToId('top')}
          className="font-mono text-sm font-semibold tracking-tight text-ink"
          data-cursor="pointer"
        >
          {site.name}
          <span className="text-accent">.</span>
        </button>

        {/* desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                data-cursor="pointer"
                className={clsx(
                  'relative font-mono text-xs uppercase tracking-widest transition-colors',
                  active === item.id
                    ? 'text-accent'
                    : 'text-ink-dim hover:text-ink',
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                  />
                )}
              </button>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Résumé
            </a>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          data-cursor="pointer"
        >
          <span className="relative block h-4 w-6">
            <span
              className={clsx(
                'absolute left-0 block h-0.5 w-6 bg-ink transition-all',
                open ? 'top-1.5 rotate-45' : 'top-0',
              )}
            />
            <span
              className={clsx(
                'absolute left-0 top-1.5 block h-0.5 w-6 bg-ink transition-all',
                open && 'opacity-0',
              )}
            />
            <span
              className={clsx(
                'absolute left-0 block h-0.5 w-6 bg-ink transition-all',
                open ? 'top-1.5 -rotate-45' : 'top-3',
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-line bg-bg/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className={clsx(
                      'block w-full py-3 text-left font-mono text-sm uppercase tracking-widest',
                      active === item.id ? 'text-accent' : 'text-ink-dim',
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-3 font-mono text-sm uppercase tracking-widest text-accent"
                >
                  Résumé ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
