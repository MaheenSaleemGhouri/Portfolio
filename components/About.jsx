'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const bioText = `I am Maheen Ghouri — an Agentic AI Full Stack Developer and Digital Marketing Strategist who helps businesses grow smarter in the digital age. On the AI & Development side, I build intelligent, autonomous web applications powered by cutting-edge AI — crafting Personal AI Employees that automate tasks and handle workflows without human intervention, developing custom AI Chatbots that engage your website visitors and convert them into customers 24/7, and delivering complete Full Stack web solutions using Next.js, Python, and modern AI APIs like OpenAI and Claude. On the Digital Marketing side, I design and execute data-driven Social Media Marketing strategies across Facebook and Instagram — from content creation and campaign planning to audience targeting and brand growth — amplified further by the power of Agentic AI tools for maximum online visibility and measurable results. I sit at the intersection of AI and marketing — which means I don't just build your digital presence, I make it intelligent, automated, and growth-driven. Let's build something powerful together.`

const bioWords = bioText.split(' ')

const stats = [
  { label: 'projects done', value: '3+',       numPart: 3, suffix: '+' },
  { label: 'status',        value: 'active',    numPart: null           },
  { label: 'open for',      value: 'freelance', numPart: null           },
]

const tags = ['AI Developer', 'Full Stack', 'Next.js', 'Python', 'Digital Marketing', 'Freelancer']

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
    <span className="font-syne font-extrabold text-xl text-accent-emerald">
      {stat.numPart !== null ? `${count}${stat.suffix}` : stat.value}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left — section heading + stat cards */}
        <div>
          <span className="font-syne font-extrabold text-6xl text-accent-emerald/20">01/</span>
          <h2 className="font-heading font-light text-3xl text-tx-primary mt-2 mb-8">Who I Am</h2>

          <div className="flex flex-col gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 * i }}
                className="bg-bg-surface rounded-xl px-5 py-4 flex justify-between items-center"
              >
                <span className="text-tx-muted text-xs font-body">{s.label}</span>
                <CountStat stat={s} inView={inView} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — about text + tags */}
        <div>
          <p className="text-tx-body text-sm leading-loose font-body font-light mb-6">
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

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.25, delay: 0.5 + i * 0.05 }}
                className="text-accent-emerald text-xs font-body px-3 py-1 rounded-full"
                style={{ background: 'rgba(78,204,163,0.1)' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
