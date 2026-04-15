import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { variants, viewport, useAnimationConfig } from '../hooks/useScrollAnimation'

export function CTASection() {
  const { shouldAnimate } = useAnimationConfig()

  return (
    <Section id="kontakt" bg="#0A0A0A">
      <div className="flex flex-col items-center gap-8 md:gap-10 text-center">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4"
          variants={shouldAnimate ? variants.fadeIn : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          <div className="w-10 h-px hidden sm:block" style={{ backgroundColor: '#D4AF37' }} />
          <span
            className="text-xs font-semibold tracking-[0.2em]"
            style={{ color: '#D4AF37', fontFamily: 'Instrument Sans, sans-serif' }}
          >
            DISKRÉ — KONFIDENSIELT — PRESIST
          </span>
          <div className="w-10 h-px hidden sm:block" style={{ backgroundColor: '#D4AF37' }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-normal leading-[1.05] text-center m-0"
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            color: '#FFFFFF',
            maxWidth: 900,
            whiteSpace: 'pre-line',
          }}
          variants={shouldAnimate ? variants.fadeUp : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          {'La oss beskytte det\nsom betyr mest.'}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="font-normal text-center m-0"
          style={{
            fontFamily: 'Instrument Sans, sans-serif',
            fontSize: 16,
            color: '#666666',
            maxWidth: 560,
            letterSpacing: '0.03em',
          }}
          variants={shouldAnimate ? variants.fadeUp : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          Diskré. Effektiv. Med Oslo og internasjonalt nettverk.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center flex-wrap justify-center gap-4 md:gap-6"
          variants={shouldAnimate ? variants.fadeUp : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          <a
            href="mailto:kontakt@skanjus.no"
            className="flex items-center justify-center no-underline transition-all duration-300"
            style={{
              backgroundColor: '#D4AF37',
              color: '#0A0A0A',
              fontFamily: 'Instrument Sans, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
              padding: '18px 48px',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = '#c09b2a'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF37'
            }}
          >
            Book Konsultasjon
          </a>

          <a
            href="tel:+4722000000"
            className="flex items-center justify-center no-underline transition-all duration-300"
            style={{
              color: '#666666',
              border: '1px solid #333333',
              fontFamily: 'Instrument Sans, sans-serif',
              fontSize: 13,
              letterSpacing: '0.07em',
              padding: '18px 48px',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#555555'
              el.style.color = '#AAAAAA'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#333333'
              el.style.color = '#666666'
            }}
          >
            Tlf: +47 22 00 00 00
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
