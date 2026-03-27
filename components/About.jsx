'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import TypewriterLabel from './TypewriterLabel'

const bioText = `I am Maheen Ghouri — an Agentic AI Full Stack Developer and Digital Marketing Strategist who helps businesses grow smarter in the digital age. On the AI & Development side, I build intelligent, autonomous web applications powered by cutting-edge AI — crafting Personal AI Employees that automate tasks and handle workflows without human intervention, developing custom AI Chatbots that engage your website visitors and convert them into customers 24/7, and delivering complete Full Stack web solutions using Next.js, Python, and modern AI APIs like OpenAI and Claude. On the Digital Marketing side, I design and execute data-driven Social Media Marketing strategies across Facebook and Instagram — from content creation and campaign planning to audience targeting and brand growth — amplified further by the power of Agentic AI tools for maximum online visibility and measurable results. I sit at the intersection of AI and marketing — which means I don't just build your digital presence, I make it intelligent, automated, and growth-driven. Let's build something powerful together.`

const bioWords = bioText.split(' ')

const stats = [
  { label: 'projects done', value: '3+',       numPart: 3, suffix: '+', color: 'text-accent-purple' },
  { label: 'status',        value: 'active',    numPart: null,           color: 'text-accent-green'  },
  { label: 'open for',      value: 'freelance', numPart: null,           color: 'text-tx-primary'    },
]

function CountStat({ stat, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || stat.numPart === null) return
    let c = 0
    const interval = setInterval(() => {
      c += 1
      setCount(c)
      if (c >= stat.numPart) clearInterval(interval)
    }, 180)
    return () => clearInterval(interval)
  }, [inView, stat.numPart])

  return (
    <span className={`font-syne font-extrabold text-xl ${stat.color}`}>
      {stat.numPart !== null ? `${count}${stat.suffix}` : stat.value}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-20 px-6 border-t border-border-default">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Bio — word by word typewriter */}
        <div>
          <TypewriterLabel
            text="// about me"
            className="text-[10px] text-tx-faint tracking-[3px] uppercase font-mono mb-3"
          />
          <p className="text-tx-muted text-sm leading-loose font-mono">
            {bioWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.25, delay: 0.3 + i * 0.045 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Stat cards — stagger slide up */}
        <div className="flex flex-col gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 * i }}
              className="bg-bg-surface border border-border-default rounded-xl px-5 py-4 flex justify-between items-center"
            >
              <span className="text-tx-faint text-xs font-mono">{s.label}</span>
              <CountStat stat={s} inView={inView} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
