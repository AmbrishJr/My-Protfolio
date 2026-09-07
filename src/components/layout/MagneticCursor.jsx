import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsTouch, useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Custom two-part cursor: a small dot that tracks precisely and a ring that
 * lags behind. The ring grows over elements marked data-cursor="pointer".
 * Disabled entirely on touch devices and for reduced-motion visitors.
 */
export default function MagneticCursor() {
  const touch = useIsTouch()
  const reduced = useReducedMotion()
  const enabled = !touch && !reduced

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!enabled) return undefined

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target
      setHovering(Boolean(el?.closest?.('[data-cursor="pointer"], a, button')))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[80] -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 1 : 0.5 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="pointer-events-none fixed left-0 top-0 z-[80] -ml-4 -mt-4 h-8 w-8 rounded-full border border-accent"
      />
    </>
  )
}
