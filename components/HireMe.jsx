'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
    <div ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="font-syne font-extrabold text-6xl text-accent-emerald/20">05/</span>
        <h2 className="font-heading font-light text-3xl text-tx-primary mt-2 mb-12">
          Available For Your Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left column — services + rate card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-tx-muted text-xs font-body tracking-widest uppercase mb-4">AVAILABLE SERVICES</p>
            <ul className="flex flex-col gap-3 mb-10">
              {services.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.15 + i * 0.07 }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald mt-1 shrink-0 block" />
                  </motion.div>
                  <span className="text-tx-body text-sm font-body font-light">{s}</span>
                </motion.li>
              ))}
            </ul>

            {/* Rate card */}
            <motion.div
              whileHover="shimmer"
              className="relative overflow-hidden rounded-xl p-5"
              style={{ background: 'rgba(78,204,163,0.06)' }}
            >
              <p className="text-tx-muted text-xs font-body tracking-widest uppercase mb-2">HOURLY RATE</p>
              <p className="font-syne font-extrabold text-4xl text-accent-emerald mb-1">
                $-- <span className="text-lg text-tx-muted font-body font-light">/ hr</span>
              </p>
              <p className="text-tx-muted text-sm font-body font-light">Negotiable based on project scope</p>
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
            <p className="text-tx-muted text-xs font-body tracking-widest uppercase mb-4">MY WORK PROCESS</p>
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 bg-bg-surface rounded-xl px-5 py-4"
                >
                  <span className="font-syne font-bold text-accent-emerald text-sm shrink-0">{step.num}</span>
                  <div>
                    <p className="text-tx-primary text-sm font-heading font-normal mb-0.5">{step.title}</p>
                    <p className="text-tx-muted text-xs font-body font-light">{step.desc}</p>
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
