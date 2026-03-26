'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import TypewriterLabel from './TypewriterLabel'

const skillGroups = [
  {
    color: 'text-accent-purple bg-accent-purple/10 border-accent-purple/30',
    glow:  'rgba(167,139,250,0.5)',
    skills: ['Next.js', 'React.js', 'Tailwind CSS'],
  },
  {
    color: 'text-accent-green bg-accent-green/10 border-accent-green/30',
    glow:  'rgba(52,211,153,0.5)',
    skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs'],
  },
  {
    color: 'text-accent-blue bg-accent-blue/10 border-accent-blue/30',
    glow:  'rgba(96,165,250,0.5)',
    skills: ['PostgreSQL', 'MySQL', 'Git & GitHub'],
  },
  {
    color: 'text-accent-orange bg-accent-orange/10 border-accent-orange/30',
    glow:  'rgba(251,146,60,0.5)',
    skills: ['OpenAI API', 'Claude API', 'Vercel'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-20 px-6 border-t border-border-default">
      <div className="max-w-6xl mx-auto">
        <TypewriterLabel
          text="// skills & tools"
          className="text-[10px] text-tx-faint tracking-[3px] uppercase font-mono mb-6"
        />
        <div className="flex flex-wrap gap-3">
          {skillGroups.map((group, gi) =>
            group.skills.map((skill, si) => (
              <motion.span
                key={`${gi}-${si}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: (gi * 4 + si) * 0.04 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: `0 0 10px ${group.glow}`,
                }}
                className={`${group.color} border text-xs font-mono px-4 py-1.5 rounded-full cursor-default`}
              >
                {skill}
              </motion.span>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
