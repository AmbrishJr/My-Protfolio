import { site } from '../../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-px flex flex-col items-center justify-between gap-4 text-xs text-ink-faint sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {site.name}. Built with React, Three.js & GSAP.
        </p>
        <div className="flex items-center gap-5 font-mono">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
              data-cursor="pointer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
