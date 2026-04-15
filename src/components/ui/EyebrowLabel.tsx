import { motion } from 'framer-motion'
import { variants, viewport } from '../../hooks/useScrollAnimation'

interface EyebrowLabelProps {
  text: string
  centered?: boolean
  linesBoth?: boolean
}

/**
 * Gold eyebrow label — "EKSPERTISE" style small caps with decorative lines.
 */
export function EyebrowLabel({ text, centered = false, linesBoth = false }: EyebrowLabelProps) {
  const textEl = (
    <span
      className="text-xs font-semibold tracking-[0.2em]"
      style={{ color: '#D4AF37', fontFamily: 'Instrument Sans, sans-serif' }}
    >
      {text}
    </span>
  )

  if (linesBoth) {
    return (
      <motion.div
        className="flex items-center gap-4"
        variants={variants.fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="w-10 h-px" style={{ backgroundColor: '#D4AF37' }} />
        {textEl}
        <div className="w-10 h-px" style={{ backgroundColor: '#D4AF37' }} />
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`flex items-center gap-4 ${centered ? 'justify-center' : ''}`}
      variants={variants.fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="w-10 h-px" style={{ backgroundColor: '#D4AF37' }} />
      {textEl}
    </motion.div>
  )
}
