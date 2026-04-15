import { motion } from 'framer-motion'
import { EyebrowLabel } from './ui/EyebrowLabel'
import { variants, viewport, useAnimationConfig } from '../hooks/useScrollAnimation'
import { STATS, IMAGES } from '../constants/content'

export function TrustBlock() {
  const { shouldAnimate } = useAnimationConfig()

  return (
    <section id="om-oss" style={{ backgroundColor: '#0A0A0A', width: '100%' }}>
      <div className="trust-layout section-wrap">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center gap-10 md:gap-12 flex-1 section-pad"
          style={{ zIndex: 2, maxWidth: 760 }}
          variants={shouldAnimate ? variants.stagger : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          <EyebrowLabel text="TILLIT OG ERFARING" />

          <motion.h2
            variants={shouldAnimate ? variants.fadeUp : undefined}
            className="font-normal m-0"
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              maxWidth: 560,
              whiteSpace: 'pre-line',
            }}
          >
            {'Beskyttelse av verdier\npå tvers av\ngenerasjoner.'}
          </motion.h2>

          {/* Stats */}
          <motion.div
            variants={shouldAnimate ? variants.fadeUp : undefined}
            className="stats-row"
          >
            {STATS.map((stat, i) => (
              <div key={stat.value} className="flex items-center gap-8 sm:gap-16">
                {i > 0 && (
                  <div
                    className="h-14 w-px hidden sm:block"
                    style={{ backgroundColor: 'rgba(212,175,55,0.3)' }}
                  />
                )}
                <div className="flex flex-col gap-2">
                  <span
                    className="font-normal leading-none"
                    style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 3.3vw, 48px)', color: '#D4AF37' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs tracking-wider"
                    style={{ color: '#666666', fontFamily: 'Instrument Sans, sans-serif', letterSpacing: '0.05em' }}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="trust-right-img absolute right-0 top-0 bottom-0"
          style={{ width: 560 }}
          variants={shouldAnimate ? variants.slideRight : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          <img
            src={IMAGES.trust}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.5 }}
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #0A0A0A 0%, transparent 45%)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
