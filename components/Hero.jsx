'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const lines = [
  { text: 'Maheen Ghouri',  color: 'text-tx-primary'    },
  { text: 'Agentic AI',     color: 'text-accent-emerald' },
  { text: 'Full Stack Developer', color: 'text-tx-primary'    },
]

const subtitleWords = [
  'I', 'build', 'intelligent', 'web', 'apps,', 'personal', 'AI',
  'employees', '&', 'custom', 'chatbots', '—', 'turning', 'complex',
  'AI', 'into', 'real-world', 'solutions.',
]

const marqueeSkills = [
  'Next.js', 'React', 'Python', 'FastAPI', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'MySQL', 'OpenAI API', 'Claude API', 'Vercel', 'Git',
  'REST APIs', 'AI Agents', 'Chatbots', 'Full Stack',
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

  const marqueeContent = marqueeSkills.map((skill, i) => (
    <span key={i} className="flex items-center gap-4 md:gap-6 shrink-0">
      <span className="text-[#8A9AA4] text-xs md:text-sm font-body whitespace-nowrap">{skill}</span>
      <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent-emerald shrink-0" />
    </span>
  ))

  return (
    <>
      <div className="min-h-screen flex items-center pt-20 pb-10 md:pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 md:gap-12 items-center">

          {/* Left content */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-bg-surface px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs text-tx-muted mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent-emerald rounded-full animate-pulse" />
              working + freelancing
            </div>

            {/* Typewriter heading */}
            <h1 className="font-heading font-light text-3xl md:text-5xl leading-tight mb-3 md:mb-4">
              {lines.map((line, i) => (
                <span key={i} className={`${line.color} block`}>
                  {i < lineIndex
                    ? line.text
                    : i === lineIndex
                    ? line.text.slice(0, charIndex)
                    : ''}
                  {i === lineIndex && !done && (
                    <span className="animate-pulse text-accent-emerald">|</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Word-stagger subtitle */}
            <p className="text-tx-muted text-xs md:text-sm leading-relaxed max-w-md mb-6 md:mb-8 font-body font-light italic">
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

            <div className="flex gap-3 md:gap-4 flex-wrap">
              <motion.button
                onClick={() => scrollTo('#projects')}
                className="relative overflow-hidden bg-accent-emerald text-bg-primary text-xs md:text-sm font-body font-medium px-5 md:px-6 py-2.5 md:py-3 rounded-lg"
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
                className="text-tx-muted text-xs md:text-sm font-body px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:text-tx-primary transition-colors"
                style={{ border: '1px solid rgba(128,144,160,0.2)' }}
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
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative p-2 md:p-3 md:animate-float">
              <div
                className="absolute inset-0 rounded-full border border-dashed border-accent-emerald/40 md:animate-spin"
                style={{
                  animationDuration: '8s',
                  boxShadow: '0 0 18px rgba(78,204,163,0.2)',
                }}
              />
              <div className="w-44 h-44 md:w-72 md:h-72 rounded-full relative overflow-hidden" style={{ border: '2px solid rgba(78,204,163,0.3)' }}>
                <img
                  src="/image.png"
                  alt="Maheen Ghouri"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 25%' }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Tech marquee */}
      <div className="bg-bg-elevated py-3 md:py-4 overflow-hidden">
        <div className="flex gap-4 md:gap-6 animate-marquee" style={{ width: 'max-content' }}>
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </>
  )
}
