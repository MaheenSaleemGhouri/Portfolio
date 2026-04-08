'use client'
import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { Monitor, Sparkles, MessageSquare } from 'lucide-react'

const services = [
  {
    Icon: Monitor,
    num: '01',
    title: 'Full Stack Web Apps',
    description: 'Modern, fast & scalable web applications built with Next.js & Python backend.',
  },
  {
    Icon: Sparkles,
    num: '02',
    title: 'Personal AI Employees',
    description: 'Custom AI agents that automate tasks & work autonomously on behalf of individuals and businesses.',
  },
  {
    Icon: MessageSquare,
    num: '03',
    title: 'Website Chatbots',
    description: 'Intelligent AI chatbots that engage users, answer queries, and keep your business responsive 24/7.',
  },
]

function ServiceCard({ svc, i, inView }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10])
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => {
    mx.set(0); my.set(0); setHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="bg-bg-surface rounded-xl p-6 cursor-default transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={hovered ? { y: [0, -5, 0] } : { y: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(78,204,163,0.1)' }}
        >
          <svc.Icon size={18} color="#4ECCA3" />
        </motion.div>
        <span className="font-syne font-extrabold text-accent-emerald/30 text-sm">{svc.num}</span>
      </div>
      <h3 className="font-heading font-normal text-tx-primary text-lg mb-2">{svc.title}</h3>
      <p className="text-tx-muted text-sm font-body font-light leading-relaxed">{svc.description}</p>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="font-syne font-extrabold text-6xl text-accent-emerald/20">02/</span>
        <h2 className="font-heading font-light text-3xl text-tx-primary mt-2 mb-10">What I Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  )
}
