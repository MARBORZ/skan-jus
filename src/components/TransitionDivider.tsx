import { motion } from 'framer-motion'
import { viewport } from '../hooks/useScrollAnimation'

export function TransitionDivider() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundColor: '#0a0806',
        height: 160,
        width: '100%',
      }}
    >
      <motion.div
        className="flex items-center gap-6"
        style={{ width: 800 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: '#C4A45A', opacity: 0.6 }}
        />
        <motion.div
          className="flex items-center justify-center"
          style={{
            width: 32,
            height: 32,
            border: '1px solid #C4A45A',
            backgroundColor: '#0a0806',
            rotate: 45,
          }}
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: '#C4A45A', opacity: 0.6 }}
        />
      </motion.div>
    </div>
  )
}
