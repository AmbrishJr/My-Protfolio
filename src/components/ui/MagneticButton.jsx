import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import clsx from 'clsx'
import { useIsTouch } from '../../hooks/useReducedMotion'

/**
 * Button / link that eases toward the pointer while hovered.
 * Renders as <a> when `href` is given, otherwise <button>.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'solid',
  className = '',
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null)
  const touch = useIsTouch()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 })

  const handleMove = (e) => {
    if (touch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 will-change-transform'
  const styles = {
    solid: 'bg-accent text-[#05270f] hover:bg-white',
    outline:
      'border border-line text-ink hover:border-accent hover:text-accent bg-transparent',
    ghost: 'text-ink-dim hover:text-accent',
  }

  const Tag = href ? motion.a : motion.button
  const linkProps = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' }
    : { type: 'button' }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={clsx(base, styles[variant], className)}
      data-cursor="pointer"
      {...linkProps}
      {...rest}
    >
      {children}
    </Tag>
  )
}
