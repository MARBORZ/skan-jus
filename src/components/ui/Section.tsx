import type { ReactNode, CSSProperties } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  bg?: string
  style?: CSSProperties
  className?: string
  /** Use section-pad class (default true) */
  padded?: boolean
}

/**
 * Consistent full-width section wrapper with responsive padding.
 * max-width 1440px, centered, responsive horizontal + vertical padding.
 */
export function Section({
  children,
  id,
  bg = '#0A0A0A',
  style,
  className = '',
  padded = true,
}: SectionProps) {
  return (
    <section id={id} style={{ backgroundColor: bg, width: '100%' }}>
      <div
        className={`section-wrap ${padded ? 'section-pad' : ''} ${className}`}
        style={style}
      >
        {children}
      </div>
    </section>
  )
}
