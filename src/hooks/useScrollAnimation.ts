import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

/** Standard ease curve */
const EASE = [0.25, 0.1, 0.25, 1] as const

/** Shared animation variants */
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  } satisfies Variants,

  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  } satisfies Variants,

  slideLeft: {
    hidden: { opacity: 0, x: -64 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
  } satisfies Variants,

  slideRight: {
    hidden: { opacity: 0, x: 64 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
  } satisfies Variants,

  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  } satisfies Variants,

  staggerSlow: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
  } satisfies Variants,

  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
  } satisfies Variants,
}

/** Standard viewport — trigger once, 80px before element enters view */
export const viewport = { once: true, margin: '-80px' } as const

/**
 * Returns whether animations should run.
 * Disables on mobile (<768px) and when OS prefers reduced motion.
 * Uses time-based transitions throughout — framerate independent.
 */
export function useAnimationConfig() {
  const prefersReduced = useReducedMotion()
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  )

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  const shouldAnimate = !prefersReduced && !isMobile

  return { shouldAnimate, isMobile }
}
