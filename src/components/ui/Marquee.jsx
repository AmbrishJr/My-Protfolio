/**
 * Infinite horizontal ticker. The list is rendered twice and translated -50%
 * so the loop is seamless. Pauses on hover.
 */
export default function Marquee({ items, className = '' }) {
  return (
    <div
      className={`group relative flex overflow-hidden border-y border-line py-5 ${className}`}
    >
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-sm uppercase tracking-widest text-ink-faint"
          >
            {item}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  )
}
