import Lenis from 'lenis'

let lenisInstance: Lenis | null = null
let rafId: number | null = null

/**
 * Initialises Lenis smooth scroll.
 * Uses time-based duration (not lerp) so it is fully framerate-independent —
 * works correctly at 60 Hz, 120 Hz, 144 Hz and beyond.
 */
export function initLenis(): () => void {
  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time: number) {
    lenisInstance!.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)

  return () => {
    if (rafId !== null) cancelAnimationFrame(rafId)
    lenisInstance?.destroy()
    lenisInstance = null
  }
}

export function getLenis(): Lenis | null {
  return lenisInstance
}
