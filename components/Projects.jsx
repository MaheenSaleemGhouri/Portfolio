'use client'
import { useRef, useState, useEffect } from 'react'
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
  {
    number: '02',
    status: 'live',
    title: 'SafarPK — AI Travel Agent',
    description: "An AI-powered travel platform for Pakistani travelers featuring an intelligent chatbot 'Safar' that assists with bookings, packages, visa info, and trip planning in English and Roman Urdu — available 24/7.",
    tags: [
      { label: 'Next.js',     group: 'purple' },
      { label: 'OpenAI API',  group: 'pink'   },
      { label: 'Tailwind CSS',group: 'purple' },
      { label: 'Vercel',      group: 'green'  },
    ],
    liveUrl: 'https://safarpk-travels-ai-agent.vercel.app',
  },
  {
    number: '03',
    status: 'live',
    title: 'StyleAI — AI Fashion Stylist',
    description: 'A personal AI stylist that generates complete outfit looks based on occasion, style, gender, and budget. Powered by GPT-4o with a virtual wardrobe to save favorites and trending looks updated every visit.',
    tags: [
      { label: 'Next.js',     group: 'purple' },
      { label: 'OpenAI API',  group: 'pink'   },
      { label: 'Tailwind CSS',group: 'purple' },
      { label: 'Vercel',      group: 'green'  },
    ],
    liveUrl: 'https://styleai-fashion-agent.vercel.app',
  },
  {
    number: '04',
    status: 'live',
    hackathon: 'FTE Hackathon',
    title: 'Digital FTE — AI Customer Support Agent',
    description: "An AI-powered customer support system featuring 'Alex AI' that handles support tickets, technical queries, billing issues, and onboarding — built for the FTE Hackathon with an admin dashboard and intelligent ticket management.",
    tags: [
      { label: 'Next.js',     group: 'purple' },
      { label: 'AI Agent',    group: 'green'  },
      { label: 'Tailwind CSS',group: 'purple' },
      { label: 'Vercel',      group: 'green'  },
    ],
    liveUrl: 'https://digital-fte.vercel.app',
  },
]

const tagStyles = {
  frontend: { color: '#C8F5EA', bg: 'rgba(78,204,163,0.15)' },
  backend:  { color: '#F5E0A8', bg: 'rgba(232,192,112,0.15)' },
  ai:       { color: '#F5C8DC', bg: 'rgba(245,100,160,0.12)' },
  purple:   { color: '#C8B5F5', bg: 'rgba(160,100,245,0.15)' },
  pink:     { color: '#F5C8DC', bg: 'rgba(245,100,160,0.12)' },
  green:    { color: '#C8F5EA', bg: 'rgba(78,204,163,0.15)'  },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [mobile, setMobile] = useState(true)

  useEffect(() => {
    setMobile(window.innerWidth < 768)
  }, [])

  return (
    <div ref={ref} className="py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6 md:mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-tx-primary">Selected Projects</h2>
          <span className="text-tx-muted text-[11px] md:text-xs font-body mt-1 sm:mt-0">4 projects · all live</span>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={mobile ? {} : { y: -6 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="bg-bg-surface rounded-2xl p-4 md:p-6 cursor-default">
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <span className="text-tx-muted text-[10px] md:text-xs font-body">
                    {p.number}{p.featured ? ' — featured' : ''}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.hackathon && (
                      <span
                        className="text-[10px] md:text-xs font-body px-2.5 md:px-3 py-0.5 md:py-1 rounded-full"
                        style={{ color: '#E8C070', background: 'rgba(232,192,112,0.15)' }}
                      >
                        {p.hackathon}
                      </span>
                    )}
                    <span className="text-accent-emerald text-[10px] md:text-xs font-body px-2.5 md:px-3 py-0.5 md:py-1 rounded-full"
                      style={{ background: 'rgba(78,204,163,0.15)' }}
                    >
                      live
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-normal text-tx-primary text-lg md:text-xl mb-1.5 md:mb-2">{p.title}</h3>
                <p className="text-tx-muted text-xs md:text-sm font-body font-light leading-loose mb-3 md:mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {p.tags.map((tag, ti) => {
                    const style = tagStyles[tag.group] || tagStyles.frontend
                    return (
                      <motion.span
                        key={ti}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.25, delay: 0.4 + ti * 0.05 }}
                        className="text-[10px] md:text-xs font-body px-2.5 md:px-3 py-0.5 md:py-1 rounded-full"
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
                  className="inline-flex items-center gap-2 text-accent-emerald text-xs md:text-sm font-body hover:opacity-70 transition-opacity"
                >
                  {p.featured ? 'view project' : 'view live ↗'} {p.featured && <ExternalLink size={13} />}
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  )
}
