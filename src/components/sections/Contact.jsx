import { useState } from 'react'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import MagneticButton from '../ui/MagneticButton'
import { site } from '../../data/site'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <Section id="contact">
      <div className="card relative overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(74,222,128,0.14),transparent_70%)]" />

        <Reveal className="relative">
          <span className="eyebrow">Contact</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Let’s build something{' '}
            <span className="text-gradient">worth shipping</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-dim">
            Open to internships, freelance builds, and research collaborations.
            The fastest way to reach me is email.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href={`mailto:${site.email}`}>
              {site.email}
            </MagneticButton>
            <MagneticButton variant="outline" onClick={copyEmail}>
              {copied ? 'Copied ✓' : 'Copy email'}
            </MagneticButton>
            <MagneticButton variant="outline" href={site.resume} download>
              Download résumé ↓
            </MagneticButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="link-underline text-ink-dim hover:text-accent"
              >
                {s.label}
              </a>
            ))}
            <a
              href={`tel:${site.phone.replace(/\s+/g, '')}`}
              className="link-underline text-ink-dim hover:text-accent"
              data-cursor="pointer"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
