import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { variants, useAnimationConfig } from '../hooks/useScrollAnimation'
import { IMAGES } from '../constants/content'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { shouldAnimate } = useAnimationConfig()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Parallax — framerate-independent via Framer Motion's RAF
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', shouldAnimate ? '22%' : '0%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', shouldAnimate ? '8%' : '0%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, shouldAnimate ? 0 : 1])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: 600, backgroundColor: '#0A0A0A' }}
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.50) 50%, rgba(10,10,10,0.93) 100%)',
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: 160,
          background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center nav-pad"
        style={{ y: contentY, opacity: contentOpacity, zIndex: 3, maxWidth: 1440, margin: '0 auto', left: 0, right: 0 }}
      >
        <motion.div
          variants={shouldAnimate ? variants.staggerSlow : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          animate="visible"
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <motion.div
            variants={shouldAnimate ? variants.slideLeft : undefined}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="w-10 h-px flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
            <span
              className="text-xs font-semibold tracking-[0.2em]"
              style={{ color: '#D4AF37', fontFamily: 'Instrument Sans, sans-serif' }}
            >
              AKER BRYGGE, OSLO
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={shouldAnimate ? variants.fadeUp : undefined}
            className="font-normal leading-[1.05] m-0"
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(44px, 6.5vw, 96px)',
              color: '#FFFFFF',
              maxWidth: 900,
              letterSpacing: '-0.01em',
            }}
          >
            Diskresjon.
            <br />
            Integritet.
            <br />
            Resultater.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={shouldAnimate ? variants.fadeUp : undefined}
            className="font-normal leading-relaxed mt-8 md:mt-10"
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              fontSize: 'clamp(14px, 1.1vw, 18px)',
              color: '#888888',
              maxWidth: 580,
            }}
          >
            Spesialisert juridisk rådgivning for private
            <br className="hidden sm:block" />
            {' '}formuer og komplekse forretningsstrukturer.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={shouldAnimate ? variants.fadeUp : undefined}
            className="flex items-center flex-wrap gap-4 md:gap-6 mt-10 md:mt-14"
          >
            <a
              href="#kontakt"
              className="flex items-center justify-center no-underline transition-all duration-300"
              style={{
                backgroundColor: '#D4AF37',
                color: '#0A0A0A',
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.12em',
                padding: '14px 36px',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = '#c09b2a'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF37'
              }}
            >
              Kontakt Oss
            </a>
            <a
              href="#ekspertise"
              className="flex items-center justify-center no-underline transition-colors duration-300 text-xs tracking-wider"
              style={{ color: '#999999', fontFamily: 'Instrument Sans, sans-serif', padding: '14px 16px' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = '#FFFFFF')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = '#999999')
              }
            >
              Les Mer →
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
