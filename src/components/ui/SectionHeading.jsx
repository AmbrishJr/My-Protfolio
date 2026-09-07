import Reveal from './Reveal'

/**
 * Section title with an index number (e.g. "01") and a trailing rule.
 */
export default function SectionHeading({ index, title, kicker }) {
  return (
    <Reveal className="mb-14 flex flex-col gap-4">
      {kicker && <span className="eyebrow">{kicker}</span>}
      <div className="flex items-end gap-4">
        {index && (
          <span className="font-mono text-sm text-accent">
            {String(index).padStart(2, '0')}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl">{title}</h2>
        <span className="mb-2 hidden h-px flex-1 bg-line sm:block" />
      </div>
    </Reveal>
  )
}
