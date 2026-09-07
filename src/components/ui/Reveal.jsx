import { motion } from 'framer-motion'

const OFFSET = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * In-view reveal. Slides + fades its children once, when scrolled into view.
 * Respects reduced motion automatically (framer-motion reads the media query).
 */
export default function Reveal({
  children,
  as = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div
  const from = OFFSET[direction] ?? OFFSET.up

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
