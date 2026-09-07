import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { about, education, stats } from '../../data/content'
import { useCounter } from '../../hooks/useCounter'

function Stat({ value, prefix = '', suffix = '', label }) {
  const decimals = Number.isInteger(value) ? 0 : 2
  const [ref, current] = useCounter(value, { decimals })
  const shown = decimals ? current.toFixed(decimals) : Math.round(current)

  return (
    <div ref={ref} className="border-l border-line pl-4">
      <div className="font-mono text-3xl font-semibold text-ink sm:text-4xl">
        {prefix}
        {shown}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-ink-faint">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index={1} title="About" kicker="Who I am" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-lg text-ink-dim">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08} as="p">
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal direction="left" className="card h-fit p-6">
          <span className="eyebrow">Education</span>
          <h3 className="mt-3 text-xl text-ink">{education.school}</h3>
          <p className="mt-1 text-sm text-ink-dim">{education.degree}</p>
          <div className="mt-4 flex items-center justify-between font-mono text-sm">
            <span className="text-ink-faint">{education.period}</span>
            <span className="text-accent">{education.score}</span>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </Section>
  )
}
