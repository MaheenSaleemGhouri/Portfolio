'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: 'projects done', value: '3+',  numPart: 3, suffix: '+' },
  { label: 'status',        value: 'active',  numPart: null },
  { label: 'open for',      value: 'freelance', numPart: null },
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
    <span className="font-syne font-extrabold text-lg md:text-xl text-accent-emerald">
      {stat.numPart !== null ? `${count}${stat.suffix}` : stat.value}
    </span>
  )
}

const services = [
  'Full Stack Web Application Development',
  'Personal AI Employee / Agent Development',
  'Custom Website Chatbot Development',
  'AI API Integration (OpenAI, Claude)',
  'Backend Development with FastAPI & Python',
]

const steps = [
  { num: '01', title: 'Discovery',   desc: 'Understand your project requirements'   },
  { num: '02', title: 'Planning',    desc: 'Define scope, timeline & tech stack'    },
  { num: '03', title: 'Development', desc: 'Build & iterate with regular updates'   },
  { num: '04', title: 'Testing',     desc: 'Quality check & bug fixes'             },
  { num: '05', title: 'Delivery',    desc: 'Deploy & hand over with documentation' },
]

export default function HireMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-14 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-tx-primary mb-6 md:mb-8">
          Available For Your Project
        </h2>

        {/* Stat cards */}
        <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 * i }}
              className="bg-bg-surface rounded-xl px-4 md:px-5 py-3 md:py-4 flex items-center gap-3 md:gap-4 flex-1 min-w-[140px]"
            >
              <span className="text-tx-muted text-xs font-body">{s.label}</span>
              <CountStat stat={s} inView={inView} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left column — services + rate card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-tx-muted text-[10px] md:text-xs font-body tracking-widest uppercase mb-3 md:mb-4">AVAILABLE SERVICES</p>
            <ul className="flex flex-col gap-2.5 md:gap-3 mb-8 md:mb-10">
              {services.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-2.5 md:gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.15 + i * 0.07 }}
                  >
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent-emerald mt-1 shrink-0 block" />
                  </motion.div>
                  <span className="text-tx-body text-xs md:text-sm font-body font-light">{s}</span>
                </motion.li>
              ))}
            </ul>

            {/* Rate card */}
            <motion.div
              whileHover="shimmer"
              className="relative overflow-hidden rounded-xl p-4 md:p-5"
              style={{ background: 'rgba(78,204,163,0.06)' }}
            >
              <p className="text-tx-muted text-[10px] md:text-xs font-body tracking-widest uppercase mb-1.5 md:mb-2">HOURLY RATE</p>
              <p className="font-syne font-extrabold text-3xl md:text-4xl text-accent-emerald mb-1">
                $-- <span className="text-base md:text-lg text-tx-muted font-body font-light">/ hr</span>
              </p>
              <p className="text-tx-muted text-xs md:text-sm font-body font-light">Negotiable based on project scope</p>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                variants={{ shimmer: { x: '100%' } }}
                transition={{ duration: 0.55, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>

          {/* Right column — work process */}
          <div>
            <p className="text-tx-muted text-[10px] md:text-xs font-body tracking-widest uppercase mb-3 md:mb-4">MY WORK PROCESS</p>
            <div className="flex flex-col gap-2.5 md:gap-3">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-3 md:gap-4 bg-bg-surface rounded-xl px-4 md:px-5 py-3 md:py-4"
                >
                  <span className="font-syne font-bold text-accent-emerald text-xs md:text-sm shrink-0">{step.num}</span>
                  <div>
                    <p className="text-tx-primary text-xs md:text-sm font-heading font-normal mb-0.5">{step.title}</p>
                    <p className="text-tx-muted text-[10px] md:text-xs font-body font-light">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
