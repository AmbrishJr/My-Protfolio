import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import TiltCard from '../ui/TiltCard'
import { freelanceProjects } from '../../data/content'

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

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
)

export default function Freelance() {
  return (
    <Section id="freelance">
      <SectionHeading
        index={5}
        title="Freelance Web Development"
        kicker="Client work, shipped"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {freelanceProjects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <TiltCard className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="chip !text-[10px] uppercase tracking-widest">
                  Client site
                </span>
              </div>

              <h3 className="mt-4 text-lg text-ink sm:text-xl">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm text-ink-dim">{p.blurb}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {p.liveLink && (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="pointer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Visit <ArrowIcon />
                  </a>
                )}
                {p.repoLink && (
                  <a
                    href={p.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="pointer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    <GitHubIcon /> Repo
                  </a>
                )}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
