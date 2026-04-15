import { motion } from 'framer-motion'
import { variants, viewport, useAnimationConfig } from '../hooks/useScrollAnimation'
import { FOOTER_NAV } from '../constants/content'

export function Footer() {
  const { shouldAnimate } = useAnimationConfig()

  return (
    <footer style={{ backgroundColor: '#050505', width: '100%' }}>
      <div className="section-wrap section-pad flex flex-col gap-12">
        {/* Top Row */}
        <motion.div
          className="footer-top"
          variants={shouldAnimate ? variants.stagger : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          {/* Brand */}
          <motion.div
            variants={shouldAnimate ? variants.fadeUp : undefined}
            className="flex flex-col gap-5"
            style={{ maxWidth: 320 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-0.5 h-7 flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
              <span
                className="text-white font-normal tracking-[0.15em]"
                style={{ fontFamily: 'Fraunces, serif', fontSize: 18 }}
              >
                SKAN JUS
              </span>
            </div>
            <p
              className="text-sm m-0"
              style={{
                color: '#444444',
                fontFamily: 'Instrument Sans, sans-serif',
                lineHeight: 1.65,
                maxWidth: 280,
              }}
            >
              Juridisk rådgivning av høyeste kaliber.
              <br />
              Aker Brygge, Oslo.
            </p>
          </motion.div>

          {/* Nav Columns */}
          <div className="footer-nav-cols">
            {FOOTER_NAV.map((col) => (
              <motion.div
                key={col.title}
                variants={shouldAnimate ? variants.fadeUp : undefined}
                className="flex flex-col gap-5"
              >
                <span
                  className="font-semibold"
                  style={{
                    color: '#D4AF37',
                    fontFamily: 'Instrument Sans, sans-serif',
                    fontSize: 10,
                    letterSpacing: '0.25em',
                  }}
                >
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm no-underline transition-colors duration-300"
                    style={{ color: '#444444', fontFamily: 'Instrument Sans, sans-serif' }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = '#888888')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = '#444444')
                    }
                  >
                    {link}
                  </a>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }} />

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          variants={shouldAnimate ? variants.fadeIn : undefined}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewport}
        >
          <span
            className="text-xs"
            style={{
              color: '#2A2A2A',
              fontFamily: 'Instrument Sans, sans-serif',
              letterSpacing: '0.03em',
            }}
          >
            © 2025 SKAN JUS AS. Alle rettigheter forbeholdt.
          </span>

          <div className="flex items-center flex-wrap gap-6 sm:gap-8">
            {['Personvern', 'Vilkår', 'Advokatetiske regler'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs no-underline transition-colors duration-300"
                style={{ color: '#2A2A2A', fontFamily: 'Instrument Sans, sans-serif' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = '#555555')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = '#2A2A2A')
                }
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
