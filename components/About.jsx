'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import TypewriterLabel from './TypewriterLabel'

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

        {/* Bio — slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <TypewriterLabel
            text="// about me"
            className="text-[10px] text-tx-faint tracking-[3px] uppercase font-mono mb-3"
          />
          <p className="text-tx-muted text-sm leading-loose font-mono">
            I am Maheen Ghouri, an Agentic AI Full Stack Developer with a passion for
            building intelligent, autonomous web applications. I work as a developer
            and freelancer, specializing in modern web solutions powered by cutting-edge
            AI technologies. I combine strong full-stack development skills with deep
            expertise in AI agent frameworks and APIs to deliver smart, scalable digital
            products. I build Personal AI Employees — custom AI agents designed to
            automate tasks, handle workflows, and work autonomously on behalf of
            individuals and businesses. I also develop intelligent Chatbots for websites
            — custom conversational AI assistants that engage users, answer queries, and
            enhance the overall user experience — making businesses smarter and more
            responsive 24/7.
          </p>
        </motion.div>

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
