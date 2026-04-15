import { motion } from 'framer-motion'
import { EyebrowLabel } from './ui/EyebrowLabel'
import { variants, viewport, useAnimationConfig } from '../hooks/useScrollAnimation'
import { BIO } from '../constants/content'

export function Biography() {
  const { shouldAnimate } = useAnimationConfig()

  return (
    <section
      id="om-partneren"
      className="bio-layout overflow-hidden"
      style={{ backgroundColor: '#0A0A0A', width: '100%' }}
    >
      {/* Photo */}
      <motion.div
        className="bio-photo flex-shrink-0"
        variants={shouldAnimate ? variants.slideLeft : undefined}
        initial={shouldAnimate ? 'hidden' : false}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={viewport}
      >
        <img
          src={BIO.photo}
          alt={BIO.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Fade right for desktop */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to left, #0A0A0A 0%, transparent 40%)' }}
        />
        {/* Fade bottom for mobile */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, #0A0A0A 100%)' }}
        />
      </motion.div>

      {/* Bio Content */}
      <motion.div
        className="flex-1 flex flex-col justify-center gap-6 section-pad"
        variants={shouldAnimate ? variants.stagger : undefined}
        initial={shouldAnimate ? 'hidden' : false}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={viewport}
      >
        <EyebrowLabel text={BIO.eyebrow} />

        <motion.h2
          variants={shouldAnimate ? variants.fadeUp : undefined}
          className="font-normal leading-[1.05] m-0"
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            color: '#FFFFFF',
          }}
        >
          {BIO.name}
        </motion.h2>

        <motion.p
          variants={shouldAnimate ? variants.fadeUp : undefined}
          className="font-semibold text-xs tracking-[0.2em] m-0"
          style={{ color: '#D4AF37', fontFamily: 'Instrument Sans, sans-serif' }}
        >
          {BIO.title}
        </motion.p>

        <motion.div
          variants={shouldAnimate ? variants.fadeIn : undefined}
          className="h-px w-16"
          style={{ backgroundColor: 'rgba(212,175,55,0.4)' }}
        />

        {BIO.paragraphs.map((para, i) => (
          <motion.p
            key={i}
            variants={shouldAnimate ? variants.fadeUp : undefined}
            className="font-normal text-sm m-0"
            style={{ color: '#AAAAAA', fontFamily: 'Instrument Sans, sans-serif', lineHeight: 1.75 }}
          >
            {para}
          </motion.p>
        ))}

        {/* Credentials */}
        <motion.div
          variants={shouldAnimate ? variants.stagger : undefined}
          className="flex flex-wrap gap-8 mt-2"
        >
          {BIO.credentials.map((cred) => (
            <motion.div
              key={cred.school}
              variants={shouldAnimate ? variants.fadeUp : undefined}
              className="flex flex-col gap-1"
            >
              <span
                className="text-xs font-normal"
                style={{ color: '#666666', fontFamily: 'Instrument Sans, sans-serif', lineHeight: 1.6 }}
              >
                {cred.school}
                <br />
                {cred.degree}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
