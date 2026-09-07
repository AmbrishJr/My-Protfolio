import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import clsx from 'clsx'
import { useIsTouch, useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Wrapper that tilts toward the pointer in 3D and lifts a soft accent glow.
 * Falls back to a plain div on touch / reduced motion.
 */
export default function TiltCard({ children, className = '', max = 8 }) {
  const ref = useRef(null)
  const touch = useIsTouch()
  const reduced = useReducedMotion()
  const disabled = touch || reduced

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 20,
  })
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 20,
  })

  const onMove = (e) => {
    if (disabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  if (disabled) {
    return <div className={clsx('card', className)}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={clsx(
        'card group relative transition-shadow duration-300 hover:shadow-glow-sm',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
