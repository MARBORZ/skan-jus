import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorState = 'default' | 'hover' | 'click'

/**
 * Custom triangle cursor with a trailing ring follower.
 * Only shown on pointer:fine devices (mouse). Hidden on touch/mobile.
 * Uses useSpring for smooth framerate-independent movement.
 */
export function CustomCursor() {
  const [state, setState] = useState<CursorState>('default')
  const [visible, setVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Main cursor — snappy, near-instant tracking
  const cursorX = useSpring(mouseX, { damping: 28, stiffness: 900, mass: 0.3 })
  const cursorY = useSpring(mouseY, { damping: 28, stiffness: 900, mass: 0.3 })


  useEffect(() => {
    // Only activate on devices with precise pointer (mouse)
    const hasFinePinter = window.matchMedia('(pointer: fine)').matches
    if (!hasFinePinter) return
    setIsTouchDevice(false)

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onDown = () => setState('click')
    const onUp = () => setState((prev) => (prev === 'click' ? 'default' : prev))
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]')) {
        setState('hover')
      }
    }
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]')) {
        setState((prev) => (prev === 'hover' ? 'default' : prev))
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [mouseX, mouseY, visible])

  if (isTouchDevice) return null

  const isHover = state === 'hover'
  const isClick = state === 'click'

  return (
    <>
      {/* ── Main cursor — triangle arrow ───────────────── */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          // Offset so the tip of the arrow is the hotspot
          translateX: -2,
          translateY: -2,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: isClick ? 0.72 : isHover ? 1.25 : 1,
        }}
        transition={{ duration: 0.14, ease: 'easeOut' }}
      >
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Classic cursor arrow shape */}
          <path
            d="M2 2 L2 21 L7 15.5 L10 23.5 L13.5 22 L10.5 14 L18 14 Z"
            fill={isHover ? '#D4AF37' : '#FFFFFF'}
            stroke={isHover ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.6)'}
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

    </>
  )
}
