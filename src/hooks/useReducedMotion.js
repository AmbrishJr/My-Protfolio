import { useEffect, useState } from 'react'

/**
 * Returns true when the visitor has asked for reduced motion.
 * Used to disable smooth scroll, scrubbed timelines, and the WebGL scene.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * True on touch / coarse-pointer devices. Used to skip the magnetic cursor,
 * card tilt, and to lighten the 3D scene on phones.
 */
export function useIsTouch() {
  const [touch, setTouch] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: none), (pointer: coarse)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)')
    const onChange = () => setTouch(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return touch
}
