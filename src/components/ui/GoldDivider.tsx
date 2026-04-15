import { motion } from 'framer-motion'
import { viewport } from '../../hooks/useScrollAnimation'

interface GoldDividerProps {
  opacity?: number
  animate?: boolean
}

export function GoldDivider({ opacity = 0.35, animate = true }: GoldDividerProps) {
  if (!animate) {
    return (
      <div
        className="w-full h-px"
        style={{ backgroundColor: '#D4AF37', opacity }}
      />
    )
  }

  return (
    <motion.div
      className="w-full h-px"
      style={{ backgroundColor: '#D4AF37', opacity }}
      initial={{ scaleX: 0, transformOrigin: 'left' }}
      whileInView={{ scaleX: 1 }}
      viewport={viewport}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    />
  )
}
