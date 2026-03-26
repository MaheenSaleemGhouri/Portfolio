'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import TypewriterLabel from './TypewriterLabel'

const tagColors = {
  purple: 'text-accent-purple bg-accent-purple/10 border-accent-purple/20',
  green:  'text-accent-green bg-accent-green/10 border-accent-green/20',
  orange: 'text-accent-orange bg-accent-orange/10 border-accent-orange/20',
  blue:   'text-accent-blue bg-accent-blue/10 border-accent-blue/20',
}

const projects = [
  {
    number: '01',
    featured: true,
    status: 'live',
    title: 'Physical AI & Humanoid Robotics',
    description: 'An intelligent, interactive online book that explores Physical AI and Humanoid Robotics — bridging digital intelligence and physical systems. Covers robot perception, motor control, and AI-driven humanoid behavior, with an AI chatbot assistant to guide learners through complex concepts.',
    tags: [
      { label: 'Next.js',    color: 'purple' },
      { label: 'Python',     color: 'green'  },
      { label: 'OpenAI API', color: 'orange' },
      { label: 'Claude API', color: 'orange' },
      { label: 'Vercel',     color: 'green'  },
    ],
    liveUrl: 'https://ai-book-delta-fawn.vercel.app',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-20 px-6 border-t border-border-default">
      <div className="max-w-6xl mx-auto">
        <TypewriterLabel
          text="// selected work"
          className="text-[10px] text-tx-faint tracking-[3px] uppercase font-mono mb-6"
        />
        <div className="flex flex-col gap-4">

          {projects.map((p, i) => (
            /* Outer: fade-in + hover lift */
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Inner: border glow pulse */}
              <motion.div
                animate={inView ? {
                  boxShadow: [
                    '0 0 0px rgba(167,139,250,0)',
                    '0 0 22px rgba(167,139,250,0.3)',
                    '0 0 0px rgba(167,139,250,0)',
                  ],
                } : {}}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
                }}
                className="bg-bg-surface border border-accent-purple/30 rounded-xl p-6 cursor-default"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-tx-faint text-[10px] font-mono">0{i + 1} — featured</span>
                  {/* Blinking live badge */}
                  <motion.span
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-accent-green text-[10px] font-mono border border-accent-green/30 px-3 py-1 rounded-full"
                  >
                    live
                  </motion.span>
                </div>

                <h3 className="font-syne font-extrabold text-tx-primary text-lg mb-2">{p.title}</h3>
                <p className="text-tx-muted text-xs font-mono leading-loose mb-4">{p.description}</p>

                {/* Tags — pop in with stagger */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag, ti) => (
                    <motion.span
                      key={ti}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.25, delay: 0.4 + ti * 0.05 }}
                      className={`${tagColors[tag.color]} border text-[10px] font-mono px-3 py-1 rounded`}
                    >
                      {tag.label}
                    </motion.span>
                  ))}
                </div>

                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-purple text-xs font-mono hover:opacity-70 transition-opacity"
                >
                  view project <ExternalLink size={12} />
                </a>
              </motion.div>
            </motion.div>
          ))}

          {/* Placeholder cards */}
          {['02', '03'].map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
              className="bg-bg-surface border border-dashed border-border-default rounded-xl p-6 opacity-40 flex items-center gap-4"
            >
              <span className="text-tx-faint text-[10px] font-mono">{num}</span>
              <span className="text-tx-faint text-xs font-mono italic">next project coming soon...</span>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  )
}
