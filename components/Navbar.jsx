'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'about',  href: '#about'    },
  { label: 'skills', href: '#skills'   },
  { label: 'work',   href: '#projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-default'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollTo('#hero')}
          className="font-syne font-extrabold text-accent-purple text-lg tracking-tight"
        >
          Maheen.dev
        </button>

        <div className="flex items-center gap-6">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="relative text-tx-muted hover:text-accent-purple text-xs font-mono transition-colors duration-200 pb-0.5 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px bg-accent-purple w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>
          ))}

          <motion.button
            onClick={() => scrollTo('#contact')}
            className="text-accent-purple border border-accent-purple/40 text-xs font-mono px-4 py-2 rounded-full"
            whileHover={{
              boxShadow: '0 0 14px rgba(167,139,250,0.45)',
              borderColor: 'rgba(167,139,250,0.9)',
              backgroundColor: 'rgba(167,139,250,0.1)',
            }}
            transition={{ duration: 0.2 }}
          >
            hire me →
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
