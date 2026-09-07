import { useLayoutEffect, useRef } from 'react'
import clsx from 'clsx'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import TiltCard from '../ui/TiltCard'
import { projects } from '../../data/content'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4 12L12 4M12 4H5M12 4V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Projects() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.35,
          filter: 'blur(2px)',
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 140px',
            end: `+=${(cards.length - i) * 260}`,
            scrub: true,
          },
        })
      })
    }, scope)
    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [reduced])

  return (
    <Section id="projects">
      <SectionHeading index={4} title="Selected Projects" kicker="Things I've built" />

      <div ref={scope} className="space-y-8">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className={clsx(
              'project-card',
              !reduced && 'sticky top-28 md:top-32',
            )}
          >
            <TiltCard className="overflow-hidden p-7 sm:p-9">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="chip !text-[10px] uppercase tracking-widest">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl text-ink sm:text-3xl">{p.name}</h3>
                  <p className="mt-3 text-ink-dim">{p.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="pointer"
                    className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Visit <ArrowIcon />
                  </a>
                )}
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </Section>
  )
}
