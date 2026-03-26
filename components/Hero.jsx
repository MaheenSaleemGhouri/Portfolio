'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const lines = [
  { text: 'Maheen Ghouri',  color: 'text-tx-primary'   },
  { text: 'Agentic AI',     color: 'text-accent-purple' },
  { text: 'Full Stack Dev', color: 'text-tx-primary'   },
]

const subtitleWords = [
  'I', 'build', 'intelligent', 'web', 'apps,', 'personal', 'AI',
  'employees', '&', 'custom', 'chatbots', '—', 'turning', 'complex',
  'AI', 'into', 'real-world', 'solutions.',
]

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone]           = useState(false)

  useEffect(() => {
    if (done) return
    const current = lines[lineIndex]
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex(c => c + 1), 130)
      return () => clearTimeout(t)
    } else if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => { setLineIndex(l => l + 1); setCharIndex(0) }, 500)
      return () => clearTimeout(t)
    } else {
      setDone(true)
    }
  }, [lineIndex, charIndex, done])

  return (
    <div className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_180px] gap-12 items-center">

        {/* Left content */}
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <div className="inline-flex items-center gap-2 bg-bg-surface border border-border-default px-4 py-2 rounded-full text-xs text-tx-muted mb-6">
            <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
            working + freelancing
          </div>

          {/* Typewriter heading */}
          <h1 className="font-syne font-extrabold text-4xl md:text-5xl leading-tight mb-4">
            {lines.map((line, i) => (
              <span key={i} className={`${line.color} block`}>
                {i < lineIndex
                  ? line.text
                  : i === lineIndex
                  ? line.text.slice(0, charIndex)
                  : ''}
                {i === lineIndex && !done && (
                  <span className="animate-pulse text-accent-purple">|</span>
                )}
              </span>
            ))}
          </h1>

          {/* Word-stagger subtitle */}
          <p className="text-tx-muted text-sm leading-relaxed max-w-md mb-8 font-mono italic">
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.05 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          <div className="flex gap-4 flex-wrap">
            {/* Shimmer primary button */}
            <motion.button
              onClick={() => scrollTo('#projects')}
              className="relative overflow-hidden bg-accent-purple text-bg-primary text-xs font-mono font-medium px-6 py-3 rounded-lg"
              whileHover="hover"
            >
              <span className="relative z-10">view my work</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: '-100%' }}
                variants={{ hover: { x: '100%' } }}
                transition={{ duration: 0.45, ease: 'linear' }}
              />
            </motion.button>

            <a
              href="/cv.pdf"
              download="Maheen_Ghouri_CV.pdf"
              className="text-tx-muted border border-border-default text-xs font-mono px-6 py-3 rounded-lg hover:border-tx-muted transition-colors"
            >
              download cv
            </a>
          </div>
        </motion.div>

        {/* Right — floating photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex justify-center md:justify-end"
        >
          <motion.div
            className="relative p-3"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
          >
            {/* Spinning glow border */}
            <div
              className="absolute inset-0 rounded-full border border-dashed border-accent-purple/40 animate-spin"
              style={{
                animationDuration: '8s',
                boxShadow: '0 0 18px rgba(167,139,250,0.2)',
              }}
            />
            <div className="w-72 h-72 border-2 border-accent-purple/30 rounded-full relative overflow-hidden">
              <img
                src="/profile.png"
                alt="Maheen Ghouri"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
