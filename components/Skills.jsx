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
    <div ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">

        {/* Left — section heading */}
        <div>
          <span className="font-syne font-extrabold text-6xl text-accent-emerald/20">03/</span>
          <h2 className="font-heading font-light text-3xl text-tx-primary mt-2">Tech Stack</h2>
        </div>

        {/* Right — skill groups */}
        <div className="flex flex-col gap-8">
          {groups.map((group, gi) => (
            <div key={group.label}>
              <p className="text-tx-muted text-xs font-body tracking-widest uppercase mb-3">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: gi * 0.1 + si * 0.04 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body"
                    style={{
                      color: group.chipStyle.color,
                      background: group.chipStyle.bg,
                    }}
                  >
                    <skill.Icon size={14} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
