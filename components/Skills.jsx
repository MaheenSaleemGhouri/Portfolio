'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiNextdotjs, SiReact, SiTailwindcss,
  SiPython, SiFastapi, SiNodedotjs,
  SiPostgresql, SiMysql, SiGit, SiGithub,
  SiOpenai, SiVercel,
} from 'react-icons/si'
import { Globe, Sparkles, TrendingUp, Share2 } from 'lucide-react'

const skills = [
  { name: 'Next.js',      Icon: SiNextdotjs,   color: '#FFFFFF' },
  { name: 'React.js',     Icon: SiReact,        color: '#61DAFB' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'Python',       Icon: SiPython,       color: '#3776AB' },
  { name: 'FastAPI',      Icon: SiFastapi,      color: '#009688' },
  { name: 'Node.js',      Icon: SiNodedotjs,    color: '#339933' },
  { name: 'REST APIs',    Icon: Globe,          color: '#F5E0A8' },
  { name: 'PostgreSQL',   Icon: SiPostgresql,   color: '#4169E1' },
  { name: 'MySQL',        Icon: SiMysql,        color: '#4479A1' },
  { name: 'Git',          Icon: SiGit,          color: '#F05032' },
  { name: 'GitHub',       Icon: SiGithub,       color: '#E6EDF3' },
  { name: 'Vercel',       Icon: SiVercel,       color: '#FFFFFF' },
  { name: 'OpenAI API',   Icon: SiOpenai,       color: '#10A37F' },
  { name: 'Claude API',   Icon: Sparkles,       color: '#D4A574' },
  { name: 'Marketing',    Icon: TrendingUp,     color: '#F472B6' },
  { name: 'Social Media', Icon: Share2,         color: '#A78BFA' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-tx-primary mb-8 md:mb-12">Tech Stack</h2>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.04 }}
              whileHover={{ y: -8, scale: 1.1 }}
              className="flex flex-col items-center gap-2 cursor-default group"
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-shadow duration-300 group-hover:shadow-lg"
                style={{
                  background: 'rgba(26,32,36,0.8)',
                  border: '1.5px solid rgba(128,144,160,0.15)',
                }}
                whileHover={{
                  borderColor: skill.color,
                  boxShadow: `0 0 20px ${skill.color}30`,
                }}
              >
                <skill.Icon
                  size={26}
                  className="md:w-[32px] md:h-[32px] transition-colors duration-300"
                  style={{ color: skill.color }}
                />
              </motion.div>
              <span className="text-tx-muted text-[11px] md:text-xs font-body italic text-center leading-tight group-hover:text-tx-primary transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
