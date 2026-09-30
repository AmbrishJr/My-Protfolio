import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import TiltCard from '../ui/TiltCard'
import {
  achievements,
  certifications,
  languages,
  volunteering,
} from '../../data/content'

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        index={6}
        title="Achievements & More"
        kicker="Contests, certs, community"
      />

      {/* achievements */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <TiltCard className="h-full p-6">
              <div className="font-mono text-2xl text-accent">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-3 text-lg text-ink">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-dim">{a.detail}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* certs + languages */}
      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="eyebrow mb-5">Certifications</h3>
          <ul className="divide-y divide-line">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <span className="text-ink">
                  {c.name}{' '}
                  <span className="text-ink-faint">· {c.issuer}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-ink-faint">
                  {c.date}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="left">
          <h3 className="eyebrow mb-5">Languages</h3>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between gap-4">
                <span className="text-ink">{l.name}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {l.level}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="eyebrow mb-4 mt-10">Volunteering</h3>
          <ul className="space-y-4">
            {volunteering.map((v) => (
              <li key={v.org}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-ink">{v.org}</span>
                  <span className="shrink-0 font-mono text-xs text-ink-faint">
                    {v.year}
                  </span>
                </div>
                <p className="text-sm text-ink-dim">{v.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
