import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('Home')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // highlight active section
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      sections.forEach(s => {
        if (!s) return
        const rect = s.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) setActive(s.id.charAt(0).toUpperCase() + s.id.slice(1))
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id.toLowerCase())
      if (element) {
        const offset = 80 // Account for fixed navbar height
        const top = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 10)
  }

  return (
    <motion.nav
      initial={{ y: -80, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-6 left-1/2 z-50 transition-all duration-300 rounded-full border border-white/10 ${
        scrolled
          ? 'bg-black/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent backdrop-blur-md'
      }`}
    >
      <div className="px-5 flex items-center justify-between h-14 gap-4">
        {/* Logo */}
        <button onClick={() => scrollTo('Home')} className="flex items-center gap-2 group">
          <span className="font-black text-xl tracking-tight text-white group-hover:neon-text transition-all duration-300">
            Karthikeya.
          </span>
          <span className="font-mono text-neon-yellow text-sm font-semibold">&lt;/&gt;</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
                  ${active === link
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('Contact')}
          className="hidden lg:block relative p-[1.5px] rounded-full overflow-hidden group hover:scale-105 transition-transform duration-200 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 rounded-full"></span>
          <span className="relative flex items-center justify-center px-6 py-2 rounded-full bg-[#1e1b2e] text-white text-sm font-medium transition-colors group-hover:bg-opacity-0">
            Say Hello
          </span>
        </button>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-neon-yellow transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-neon-yellow transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-neon-yellow transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-dark-900/95 backdrop-blur-xl border-b border-neon-yellow/10"
          >
            <ul className="px-6 py-4 flex flex-col gap-2">
              {links.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${active === link
                        ? 'bg-neon-yellow/10 text-neon-yellow border border-neon-yellow/25'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo('Contact')}
                  className="w-full mt-2 py-3 rounded-lg bg-neon-yellow text-black font-bold text-sm hover:shadow-neon transition-shadow duration-200"
                >
                  Let's Talk
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
