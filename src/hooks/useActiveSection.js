import { useEffect, useState } from 'react'

/**
 * Observes the given section ids and returns whichever is currently dominant
 * in the viewport. Drives the navbar's active-link state.
 */
export function useActiveSection(ids, rootMargin = '-45% 0px -50% 0px') {
  const [active, setActive] = useState(ids[0] ?? null)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin, threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return active
}
