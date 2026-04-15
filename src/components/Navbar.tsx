import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../constants/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        style={{
          backgroundColor: scrolled || menuOpen ? 'rgba(10,10,10,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(212,175,55,0.12)' : 'none',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <nav
          className="flex items-center justify-between h-20 nav-pad"
          style={{ maxWidth: 1440, margin: '0 auto' }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline">
            <div className="w-0.5 h-8 flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
            <span
              className="text-white text-xl tracking-[0.15em] font-normal"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              SKAN JUS
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-12 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden md:flex items-center justify-center no-underline transition-all duration-300"
            style={{
              color: '#D4AF37',
              border: '1px solid #D4AF37',
              fontFamily: 'Instrument Sans, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
              padding: '12px 28px',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#D4AF37'
              el.style.color = '#0A0A0A'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'transparent'
              el.style.color = '#D4AF37'
            }}
          >
            Book Konsultasjon
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            style={{ background: 'none', border: 'none', padding: 0 }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
          >
            <motion.span
              className="block h-px w-6"
              style={{ backgroundColor: '#FFFFFF', transformOrigin: 'center' }}
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-px w-6"
              style={{ backgroundColor: '#FFFFFF' }}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px w-6"
              style={{ backgroundColor: '#FFFFFF', transformOrigin: 'center' }}
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ overflow: 'hidden', borderTop: '1px solid rgba(212,175,55,0.12)' }}
            >
              <div className="flex flex-col py-6 nav-pad gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm no-underline tracking-widest"
                    style={{ color: '#888888', fontFamily: 'Instrument Sans, sans-serif' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#kontakt"
                  className="self-start no-underline text-xs font-semibold tracking-widest py-3 px-8"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#0A0A0A',
                    fontFamily: 'Instrument Sans, sans-serif',
                    letterSpacing: '0.12em',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Book Konsultasjon
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-xs font-normal no-underline transition-colors duration-300"
      style={{
        color: '#999999',
        fontFamily: 'Instrument Sans, sans-serif',
        letterSpacing: '0.08em',
      }}
      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#D4AF37')}
      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#999999')}
    >
      {label}
    </a>
  )
}
