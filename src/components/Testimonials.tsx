import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'
import { variants, viewport, useAnimationConfig } from '../hooks/useScrollAnimation'
import { TESTIMONIALS } from '../constants/content'
import type { Testimonial } from '../types'

function TestimonialCard({
  item,
  shouldAnimate,
}: {
  item: Testimonial
  shouldAnimate: boolean
}) {
  return (
    <motion.div
      variants={shouldAnimate ? variants.fadeUp : undefined}
      className="flex flex-col gap-6 flex-1"
      style={{
        backgroundColor: '#0D0D0D',
        padding: 40,
        border: '1px solid #222222',
      }}
      whileHover={
        shouldAnimate
          ? { borderColor: 'rgba(212,175,55,0.25)', transition: { duration: 0.3 } }
          : undefined
      }
    >
      <p
        className="font-normal flex-1 m-0"
        style={{
          color: '#CCCCCC',
          fontFamily: 'Instrument Sans, sans-serif',
          fontSize: 15,
          lineHeight: 1.7,
        }}
      >
        {item.quote}
      </p>

      <div className="h-px w-10" style={{ backgroundColor: 'rgba(212,175,55,0.6)' }} />

      <div className="flex flex-col">
        <span
          className="font-semibold text-white text-sm"
          style={{ fontFamily: 'Instrument Sans, sans-serif', lineHeight: 1.5 }}
        >
          {item.author}
        </span>
        <span
          className="text-sm"
          style={{ color: '#666666', fontFamily: 'Instrument Sans, sans-serif', lineHeight: 1.5 }}
        >
          {item.role}
        </span>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const { shouldAnimate } = useAnimationConfig()

  return (
    <Section id="klienter" bg="#0A0A0A">
      <div className="flex flex-col gap-12 md:gap-16">
        <SectionHeader
          eyebrow="KLIENTOMTALER"
          title="Tillit bygget gjennom resultater."
          maxWidth={700}
          shouldAnimate={shouldAnimate}
        />

        <motion.div
          className="testimonials-grid"
          variants={shouldAnimate ? variants.stagger : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.author} item={t} shouldAnimate={shouldAnimate} />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
