import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'
import { variants, viewport, useAnimationConfig } from '../hooks/useScrollAnimation'
import { EXPERTISE_ITEMS } from '../constants/content'
import type { ExpertiseItem } from '../types'

function ExpertiseIcon({ name }: { name: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'shield' && (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      )}
      {name === 'briefcase' && (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </>
      )}
      {name === 'trending-down' && (
        <>
          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
          <polyline points="17 18 23 18 23 12" />
        </>
      )}
    </svg>
  )
}

function ExpertiseCard({
  item,
  shouldAnimate,
}: {
  item: ExpertiseItem
  shouldAnimate: boolean
}) {
  return (
    <motion.div
      variants={shouldAnimate ? variants.fadeUp : undefined}
      className="expertise-card flex flex-col gap-5 flex-1"
    >
      <ExpertiseIcon name={item.icon} />
      <h3
        className="font-normal leading-[1.15] text-white m-0"
        style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(22px, 2vw, 28px)',
          whiteSpace: 'pre-line',
        }}
      >
        {item.title}
      </h3>
      <p
        className="text-sm m-0"
        style={{
          color: '#666666',
          fontFamily: 'Instrument Sans, sans-serif',
          lineHeight: 1.65,
        }}
      >
        {item.description}
      </p>
    </motion.div>
  )
}

export function Expertise() {
  const { shouldAnimate } = useAnimationConfig()

  return (
    <Section id="ekspertise" bg="#0A0A0A">
      <div className="flex flex-col gap-8 md:gap-16">
        <SectionHeader
          eyebrow="EKSPERTISE"
          title="Vår Praksis"
          shouldAnimate={shouldAnimate}
        />

        <motion.div
          className="expertise-grid"
          variants={shouldAnimate ? variants.stagger : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          {EXPERTISE_ITEMS.map((item) => (
            <ExpertiseCard
              key={item.icon}
              item={item}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
