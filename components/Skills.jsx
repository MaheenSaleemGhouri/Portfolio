'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Sparkles } from 'lucide-react'
import {
  SiNextdotjs, SiReact, SiTailwindcss,
  SiPython, SiFastapi, SiNodedotjs,
  SiPostgresql, SiMysql, SiGit, SiGithub,
  SiOpenai, SiVercel,
} from 'react-icons/si'
import TypewriterLabel from './TypewriterLabel'

const skills = [
  { name: 'Next.js',      Icon: SiNextdotjs,   color: '#A78BFA', glow: 'rgba(167,139,250,0.5)' },
  { name: 'React.js',     Icon: SiReact,        color: '#60CFFA', glow: 'rgba(96,207,250,0.5)'  },
  { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#38BDF8', glow: 'rgba(56,189,248,0.5)'  },
  { name: 'Python',       Icon: SiPython,       color: '#FFD43B', glow: 'rgba(255,212,59,0.5)'  },
  { name: 'FastAPI',      Icon: SiFastapi,      color: '#34D399', glow: 'rgba(52,211,153,0.5)'  },
  { name: 'Node.js',      Icon: SiNodedotjs,    color: '#6BBF47', glow: 'rgba(107,191,71,0.5)'  },
  { name: 'REST APIs',    Icon: Globe,          color: '#60A5FA', glow: 'rgba(96,165,250,0.5)'  },
  { name: 'PostgreSQL',   Icon: SiPostgresql,   color: '#4479A1', glow: 'rgba(68,121,161,0.5)'  },
  { name: 'MySQL',        Icon: SiMysql,        color: '#F29111', glow: 'rgba(242,145,17,0.5)'  },
  { name: 'Git',          Icon: SiGit,          color: '#F05032', glow: 'rgba(240,80,50,0.5)'   },
  { name: 'GitHub',       Icon: SiGithub,       color: '#E6EDF3', glow: 'rgba(230,237,243,0.4)' },
  { name: 'OpenAI API',   Icon: SiOpenai,       color: '#10A37F', glow: 'rgba(16,163,127,0.5)'  },
  { name: 'Claude API',   Icon: Sparkles,       color: '#A78BFA', glow: 'rgba(167,139,250,0.5)' },
  { name: 'Vercel',       Icon: SiVercel,       color: '#E6EDF3', glow: 'rgba(230,237,243,0.4)' },
]

function SkillCard({ skill, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-bg-surface border border-border-default rounded-3xl p-5 flex flex-col items-center gap-3 cursor-default transition-colors duration-200 hover:border-opacity-60"
      style={{
        boxShadow: hovered ? `0 0 18px ${skill.glow}` : 'none',
        borderColor: hovered ? skill.color + '60' : undefined,
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
      }}
    >
      <motion.div
        animate={hovered ? { y: -4, scale: 1.15 } : { y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <skill.Icon size={28} color={skill.color} />
      </motion.div>
      <span className="text-[10px] font-mono text-tx-muted text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  )
}

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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  )
}
