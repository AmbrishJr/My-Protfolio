import { Suspense, lazy, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '../../data/site'
import { scrollToId } from '../../hooks/useSmoothScroll'
import { useReducedMotion, useIsTouch } from '../../hooks/useReducedMotion'
import MagneticButton from '../ui/MagneticButton'

const HeroCanvas = lazy(() => import('../three/HeroCanvas'))

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const word = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const touch = useIsTouch()
  const show3d = !reduced

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const nameWords = site.name.split(/(\.)/).filter(Boolean) // e.g. ["Ambrish", ".", "S"]

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* backdrop */}
      <motion.div
        style={{ opacity: reduced ? 1 : canvasOpacity }}
        className="absolute inset-0"
      >
        {show3d ? (
          <Suspense fallback={<GradientFallback />}>
            <HeroCanvas />
          </Suspense>
        ) : (
          <GradientFallback />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/40 to-bg" />
      </motion.div>

      {/* content */}
      <motion.div
        style={{ y: reduced ? 0 : contentY, opacity: reduced ? 1 : contentOpacity }}
        className="container-px relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_0.9fr]"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="eyebrow mb-5"
          >
            {site.location} — available for internships & freelance
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl"
          >
            {nameWords.map((w, i) => (
              <span
                key={i}
                className={`inline-block overflow-hidden align-bottom ${w === '.' ? '' : 'mr-3'}`}
              >
                <motion.span
                  variants={word}
                  className={`inline-block ${w === '.' ? 'text-accent' : ''}`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg text-ink-dim sm:text-xl"
          >
            <span className="text-ink">{site.roleTitle}.</span> {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton onClick={() => scrollToId('projects')}>
              View work
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => scrollToId('contact')}>
              Get in touch
            </MagneticButton>
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-xs"
          onMouseMove={(e) => {
            if (touch || reduced) return
            const r = e.currentTarget.getBoundingClientRect()
            const rx = ((e.clientY - r.top) / r.height - 0.5) * -10
            const ry = ((e.clientX - r.left) / r.width - 0.5) * 10
            e.currentTarget.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = ''
          }}
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-accent/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface">
            <img
              src={site.photo}
              alt={`${site.name} — portrait`}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/20" />
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollToId('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint"
        data-cursor="pointer"
      >
        Scroll
        <span className="relative block h-10 w-px bg-line">
          <motion.span
            animate={{ y: [0, 28, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 block h-3 w-px bg-accent"
          />
        </span>
      </motion.button>
    </section>
  )
}

function GradientFallback() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_35%,rgba(74,222,128,0.18),transparent_70%),radial-gradient(40%_40%_at_20%_70%,rgba(47,158,92,0.12),transparent_70%)]" />
  )
}
