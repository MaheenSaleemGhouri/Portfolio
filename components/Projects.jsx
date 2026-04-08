'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    number: '01',
    featured: true,
    status: 'live',
    title: 'Physical AI & Humanoid Robotics',
    description: 'An intelligent, interactive online book that explores Physical AI and Humanoid Robotics — bridging digital intelligence and physical systems. Covers robot perception, motor control, and AI-driven humanoid behavior, with an AI chatbot assistant to guide learners through complex concepts.',
    tags: [
      { label: 'Next.js',    group: 'frontend' },
      { label: 'Python',     group: 'backend'  },
      { label: 'OpenAI API', group: 'ai'       },
      { label: 'Claude API', group: 'ai'       },
      { label: 'Vercel',     group: 'backend'  },
    ],
    liveUrl: 'https://ai-book-delta-fawn.vercel.app',
  },
]

const tagStyles = {
  frontend: { color: '#C8F5EA', bg: 'rgba(78,204,163,0.15)' },
  backend:  { color: '#F5E0A8', bg: 'rgba(232,192,112,0.15)' },
  ai:       { color: '#F5C8DC', bg: 'rgba(245,100,160,0.12)' },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="font-syne font-extrabold text-6xl text-accent-emerald/20">04/</span>
        <h2 className="font-heading font-light text-3xl text-tx-primary mt-2 mb-8">Selected Projects</h2>

        <div className="flex flex-col gap-4">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="bg-bg-surface rounded-2xl p-6 cursor-default">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-tx-muted text-xs font-body">0{i + 1} — featured</span>
                  <span className="text-accent-emerald text-xs font-body px-3 py-1 rounded-full"
                    style={{ background: 'rgba(78,204,163,0.15)' }}
                  >
                    live
                  </span>
                </div>

                <h3 className="font-heading font-normal text-tx-primary text-xl mb-2">{p.title}</h3>
                <p className="text-tx-muted text-sm font-body font-light leading-loose mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag, ti) => {
                    const style = tagStyles[tag.group] || tagStyles.frontend
                    return (
                      <motion.span
                        key={ti}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.25, delay: 0.4 + ti * 0.05 }}
                        className="text-xs font-body px-3 py-1 rounded-full"
                        style={{ color: style.color, background: style.bg }}
                      >
                        {tag.label}
                      </motion.span>
                    )
                  })}
                </div>

                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-emerald text-sm font-body hover:opacity-70 transition-opacity"
                >
                  view project <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Placeholder cards */}
          {['02', '03'].map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
              className="bg-bg-surface/30 rounded-2xl p-6 opacity-30 flex items-center gap-4"
            >
              <span className="text-tx-muted text-xs font-body">{num}</span>
              <span className="text-tx-muted text-sm font-body font-light italic">next project coming soon...</span>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  )
}
