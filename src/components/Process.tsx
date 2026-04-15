import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'
import { variants, viewport, useAnimationConfig } from '../hooks/useScrollAnimation'
import { PROCESS_STEPS } from '../constants/content'
import type { ProcessStep } from '../types'

function StepCard({ step, shouldAnimate }: { step: ProcessStep; shouldAnimate: boolean }) {
  return (
    <motion.div
      variants={shouldAnimate ? variants.fadeUp : undefined}
      className="flex flex-col gap-5"
      style={{ backgroundColor: '#0D0D0D', padding: '48px 40px' }}
      whileHover={shouldAnimate ? { backgroundColor: '#111111' } : undefined}
      transition={{ duration: 0.2 }}
    >
      <span
        className="font-normal leading-none"
        style={{ fontFamily: 'Fraunces, serif', fontSize: 36, color: '#D4AF37' }}
      >
        {step.number}
      </span>
      <h3
        className="font-normal text-white m-0"
        style={{ fontFamily: 'Fraunces, serif', fontSize: 20 }}
      >
        {step.title}
      </h3>
      <p
        className="text-sm m-0"
        style={{ color: '#777777', fontFamily: 'Instrument Sans, sans-serif', lineHeight: 1.65 }}
      >
        {step.description}
      </p>
    </motion.div>
  )
}

export function Process() {
  const { shouldAnimate } = useAnimationConfig()

  return (
    <Section id="prosess" bg="#050505">
      <div className="flex flex-col gap-12 md:gap-16">
        <SectionHeader
          eyebrow="VÅR TILNÆRMING"
          title={'Systematisk. Grundig.\nResultatdrevet.'}
          multiline
          shouldAnimate={shouldAnimate}
        />

        <motion.div
          className="process-grid"
          variants={shouldAnimate ? variants.stagger : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          {PROCESS_STEPS.map((step) => (
            <StepCard key={step.number} step={step} shouldAnimate={shouldAnimate} />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
