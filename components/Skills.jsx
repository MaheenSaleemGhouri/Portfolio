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

const groups = [
  {
    label: 'Frontend',
    chipStyle: { color: '#C8F5EA', bg: 'rgba(78,204,163,0.15)' },
    skills: [
      { name: 'Next.js',      Icon: SiNextdotjs  },
      { name: 'React.js',     Icon: SiReact      },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    label: 'Backend',
    chipStyle: { color: '#F5E0A8', bg: 'rgba(232,192,112,0.15)' },
    skills: [
      { name: 'Python',    Icon: SiPython   },
      { name: 'FastAPI',   Icon: SiFastapi   },
      { name: 'Node.js',   Icon: SiNodedotjs },
      { name: 'REST APIs', Icon: Globe       },
    ],
  },
  {
    label: 'Database & Tools',
    chipStyle: { color: '#D8E4EC', bg: 'rgba(216,228,236,0.1)' },
    skills: [
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MySQL',      Icon: SiMysql      },
      { name: 'Git',        Icon: SiGit        },
      { name: 'GitHub',     Icon: SiGithub     },
      { name: 'Vercel',     Icon: SiVercel     },
    ],
  },
  {
    label: 'AI & Marketing',
    chipStyle: { color: '#F5C8DC', bg: 'rgba(245,100,160,0.12)' },
    skills: [
      { name: 'OpenAI API',       Icon: SiOpenai    },
      { name: 'Claude API',       Icon: Sparkles    },
      { name: 'Digital Marketing', Icon: TrendingUp  },
      { name: 'Social Media',     Icon: Share2      },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section heading — always on top on mobile */}
        <div className="mb-8 md:mb-0 md:float-left md:w-[280px] md:mr-12">
          <span className="font-syne font-extrabold text-4xl md:text-6xl text-accent-emerald/20">03/</span>
          <h2 className="font-heading font-light text-2xl md:text-3xl text-tx-primary mt-1 md:mt-2">Tech Stack</h2>
        </div>

        {/* Skill groups */}
        <div className="flex flex-col gap-6 md:gap-8 md:overflow-hidden">
          {groups.map((group, gi) => (
            <div key={group.label}>
              <p className="text-tx-muted text-[10px] md:text-xs font-body tracking-widest uppercase mb-2 md:mb-3">{group.label}</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: gi * 0.1 + si * 0.04 }}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-body"
                    style={{
                      color: group.chipStyle.color,
                      background: group.chipStyle.bg,
                    }}
                  >
                    <skill.Icon size={12} className="md:w-[14px] md:h-[14px]" />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="clear-both" />
      </div>
    </div>
  )
}
