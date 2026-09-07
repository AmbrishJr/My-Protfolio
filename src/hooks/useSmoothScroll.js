import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'

/**
 * Wires Lenis smooth scrolling to GSAP's ticker and ScrollTrigger so that
 * scrubbed animations stay in sync. No-ops when the visitor prefers reduced
 * motion — native scrolling is left untouched.
 *
 * Exposes the Lenis instance on window.__lenis so the navbar can request
 * anchored scrolls.
 */
export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const onTick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
      delete window.__lenis
    }
  }, [enabled])
}

/** Smoothly scroll to an element id (falls back to native when Lenis is off). */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -72, duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
