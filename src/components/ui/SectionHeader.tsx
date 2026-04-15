import { motion } from 'framer-motion'
import { EyebrowLabel } from './EyebrowLabel'
import { variants, viewport } from '../../hooks/useScrollAnimation'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  /** Allow \n line breaks in title */
  multiline?: boolean
  maxWidth?: number
  shouldAnimate?: boolean
}

/**
 * Reusable section header: eyebrow label + h2 title.
 */
export function SectionHeader({
  eyebrow,
  title,
  multiline = false,
  maxWidth = 700,
  shouldAnimate = true,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-8">
      <EyebrowLabel text={eyebrow} />
      <motion.h2
        className="font-normal"
        style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(28px, 3.5vw, 52px)',
          color: '#FFFFFF',
          lineHeight: 1.1,
          maxWidth,
          whiteSpace: multiline ? 'pre-line' : 'normal',
        }}
        variants={variants.fadeUp}
        initial={shouldAnimate ? 'hidden' : false}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={viewport}
      >
        {title}
      </motion.h2>
    </div>
  )
}
