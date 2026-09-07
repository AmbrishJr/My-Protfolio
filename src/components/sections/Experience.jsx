import { useLayoutEffect, useRef } from 'react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { experience } from '../../data/content'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Experience() {
  const scope = useRef(null)
  const line = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced) {
      if (line.current) line.current.style.transform = 'scaleY(1)'
      return undefined
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 65%',
            end: 'bottom 75%',
            scrub: true,
          },
        },
      )

      gsap.utils.toArray('.xp-dot').forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0.4, opacity: 0.3 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: { trigger: dot, start: 'top 80%', end: 'top 55%', scrub: true },
          },
        )
      })
    }, scope)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [reduced])

  return (
    <Section id="experience">
      <SectionHeading index={3} title="Experience" kicker="Where I've worked" />

      <div ref={scope} className="relative pl-8 sm:pl-10">
        {/* rail */}
        <div className="absolute left-[3px] top-2 h-full w-px bg-line sm:left-[7px]" />
        <div
          ref={line}
          className="absolute left-[3px] top-2 h-full w-px origin-top bg-accent shadow-glow-sm sm:left-[7px]"
        />

        <div className="space-y-14">
          {experience.map((job) => (
            <Reveal key={job.company + job.period} className="relative">
              <span className="xp-dot absolute -left-8 top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-bg sm:-left-10 sm:h-3.5 sm:w-3.5" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl text-ink">
                  {job.role}{' '}
                  <span className="text-ink-dim">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-ink-faint">
                  {job.period} — {job.location}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-ink-dim">
                {job.points.map((pt, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
