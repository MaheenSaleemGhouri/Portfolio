'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const bioText = `I am Maheen Ghouri, an Agentic AI Full Stack Developer and Digital Marketing Strategist who helps businesses grow smarter in the digital age. On the AI & Development side, I build intelligent, autonomous web applications powered by cutting-edge AI, crafting Personal AI Employees that automate tasks and handle workflows without human intervention, developing custom AI Chatbots that engage your website visitors and convert them into customers 24/7, and delivering complete Full Stack web solutions using Next.js, Python, and modern AI APIs like OpenAI and Claude. On the Digital Marketing side, I design and execute data-driven Social Media Marketing strategies across Facebook and Instagram, from content creation and campaign planning to audience targeting and brand growth, amplified further by the power of Agentic AI tools for maximum online visibility and measurable results. I sit at the intersection of AI and marketing, which means I don't just build your digital presence, I make it intelligent, automated, and growth-driven. Let's build something powerful together.`

const bioWords = bioText.split(' ')
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768

const tags = ['AI Developer', 'Full Stack', 'Next.js', 'Python', 'Digital Marketing', 'Freelancer']

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(isMobile())
  }, [])

  return (
    <div ref={ref} className="py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="font-heading font-bold text-2xl md:text-3xl text-tx-primary mb-6 md:mb-8">Who I Am</h2>

        <div>
          {mobile ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-tx-body text-xs md:text-sm leading-loose font-body font-semibold italic mb-5 md:mb-6"
            >
              {bioText}
            </motion.p>
          ) : (
            <p className="text-tx-body text-xs md:text-sm leading-loose font-body font-semibold italic mb-5 md:mb-6">
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
          )}

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.25, delay: 0.5 + i * 0.05 }}
                className="text-accent-emerald text-[10px] md:text-xs font-body px-2.5 md:px-3 py-1 rounded-full"
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
