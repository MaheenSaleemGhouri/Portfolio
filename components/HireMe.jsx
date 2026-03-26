'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Quote } from 'lucide-react'
import TypewriterLabel from './TypewriterLabel'

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
    <div ref={ref} className="py-20 px-6 border-t border-border-default">
      <div className="max-w-6xl mx-auto">
        <TypewriterLabel
          text="// work with me"
          className="text-[10px] text-tx-faint tracking-[3px] uppercase font-mono mb-3"
        />
        <h2 className="font-syne font-extrabold text-3xl text-tx-primary mb-12">
          Let&apos;s <span className="text-accent-purple">Collaborate</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-tx-faint text-[10px] font-mono tracking-widest mb-4">AVAILABLE SERVICES</p>
            <ul className="flex flex-col gap-3 mb-10">
              {services.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  {/* Spring pop checkmark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.15 + i * 0.07 }}
                  >
                    <CheckCircle2 size={15} className="text-accent-green mt-0.5 shrink-0" />
                  </motion.div>
                  <span className="text-tx-muted text-xs font-mono">{s}</span>
                </motion.li>
              ))}
            </ul>

            {/* Rate card with shimmer on hover */}
            <motion.div
              whileHover="shimmer"
              className="relative overflow-hidden bg-bg-surface border border-accent-purple/30 rounded-xl p-5"
            >
              <p className="text-tx-faint text-[10px] font-mono tracking-widest mb-2">HOURLY RATE</p>
              <p className="font-syne font-extrabold text-4xl text-accent-purple mb-1">
                $-- <span className="text-lg text-tx-muted">/ hr</span>
              </p>
              <p className="text-tx-muted text-xs font-mono">Negotiable based on project scope</p>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                variants={{ shimmer: { x: '100%' } }}
                transition={{ duration: 0.55, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>

          {/* Right column */}
          <div>
            <p className="text-tx-faint text-[10px] font-mono tracking-widest mb-4">MY WORK PROCESS</p>
            <div className="flex flex-col gap-3 mb-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 bg-bg-surface border border-border-default rounded-xl px-5 py-4"
                >
                  <span className="font-syne font-bold text-accent-purple text-sm shrink-0">{step.num}</span>
                  <div>
                    <p className="text-tx-primary text-xs font-syne font-bold mb-0.5">{step.title}</p>
                    <p className="text-tx-muted text-[11px] font-mono">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-tx-faint text-[10px] font-mono tracking-widest mb-4">TESTIMONIALS</p>
            <div className="flex flex-col gap-3">
              {[1, 2].map(i => (
                <div key={i} className="border border-dashed border-border-default rounded-xl p-5 opacity-50">
                  <Quote size={14} className="text-tx-faint mb-2" />
                  <p className="text-tx-muted text-xs font-mono italic mb-2">Client testimonial coming soon...</p>
                  <p className="text-tx-faint text-[10px] font-mono">— Client Name, Company</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
