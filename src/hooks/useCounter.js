import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Counts from 0 up to `target` once the element scrolls into view.
 * Returns [ref, displayValue].
 */
export function useCounter(target, { duration = 1400, decimals = 0 } = {}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [value, setValue] = useState(reduced ? target : 0)

  useEffect(() => {
    if (reduced) {
      setValue(target)
      return undefined
    }
    const node = ref.current
    if (!node) return undefined

    let raf = 0
    let start = 0
    let done = false

    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Number((target * eased).toFixed(decimals)))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done) {
          done = true
          raf = requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration, decimals, reduced])

  return [ref, value]
}
