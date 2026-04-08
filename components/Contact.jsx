'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, Github, ArrowUpRight } from 'lucide-react'

const FiverrIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.85c-.22 0-.34.16-.34.34v5.505h-1.65v-5.505c0-.18-.12-.34-.34-.34h-.67c-.18 0-.34.16-.34.34v5.505h-1.65V9.688h1.65v.625c.34-.445.9-.74 1.54-.74h1.46v-.01c.9 0 1.49.6 1.49 1.49v.93h-.3zm-8.066 5.01c-.22.13-.476.2-.74.2-.476 0-.744-.26-.744-.78v-3.59h1.568v-1.04h-1.568V9.83h-1.65v1.853h-.824v1.04h.824v3.73c0 1.19.705 1.87 1.91 1.87.44 0 .87-.1 1.224-.3v-1.13zm-5.99-4.91c-.42-.13-.87-.22-1.34-.22-1.54 0-2.58.96-2.58 2.44s1.04 2.44 2.58 2.44c.47 0 .92-.09 1.34-.22v-1.19c-.35.18-.72.28-1.1.28-.67 0-1.18-.48-1.18-1.31s.51-1.31 1.18-1.31c.38 0 .75.1 1.1.28v-1.19zm-6.19 4.91V9.688H.112v7.195h1.65z"/>
  </svg>
)

const UpworkIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.452-5.439-5.452z"/>
  </svg>
)

const platforms = [
  {
    name: 'LinkedIn',
    desc: 'Connect with me professionally',
    url: 'https://linkedin.com/in/maheen-ghouri-811509308',
    icon: <Linkedin size={20} />,
    iconColor: '#0A66C2',
  },
  {
    name: 'GitHub',
    desc: 'Check out my code & projects',
    url: '#',
    icon: <Github size={20} />,
    iconColor: '#E6EDF3',
  },
  {
    name: 'Fiverr',
    desc: 'Hire me for freelance projects',
    url: '#',
    icon: <FiverrIcon />,
    iconColor: '#1DBF73',
  },
  {
    name: 'Upwork',
    desc: 'Work with me on Upwork',
    url: '#',
    icon: <UpworkIcon />,
    iconColor: '#14A800',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  const inputClass = "w-full bg-bg-surface focus:outline-none text-tx-primary placeholder-tx-muted text-sm font-body px-4 py-3 rounded-xl transition-colors"

  return (
    <div ref={ref} id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="font-syne font-extrabold text-6xl text-accent-emerald/20">06/</span>
          <h2 className="font-heading font-light text-3xl text-tx-primary mt-2 mb-2">
            Let&apos;s Build <span className="text-accent-emerald">Together</span>
          </h2>
          <p className="text-tx-muted text-sm font-body font-light mb-10">Have a project in mind? Let&apos;s talk.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left — heading + platform cards */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {platforms.map((p, i) => (
                  <motion.a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.12 }}
                    className="flex items-center gap-3 bg-bg-surface rounded-xl px-4 py-3 transition-colors duration-200 group hover:bg-bg-surface/80"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ color: p.iconColor }}
                    >
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading font-normal text-sm text-tx-primary">{p.name}</p>
                      <p className="text-tx-muted text-xs font-body truncate">{p.desc}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-tx-muted group-hover:text-accent-emerald transition-colors shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Contact form */}
              {submitted ? (
                <div className="rounded-xl p-6 text-center" style={{ background: 'rgba(78,204,163,0.1)' }}>
                  <p className="text-accent-emerald font-body text-sm">Message sent! I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className={inputClass}
                      placeholder="your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      className={inputClass}
                      type="email"
                      placeholder="your email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <input
                    className={inputClass}
                    placeholder="subject"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                  />
                  <textarea
                    className={inputClass}
                    placeholder="your message..."
                    rows={5}
                    style={{ resize: 'none' }}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                  {error && <p className="text-red-400 text-xs font-body">{error}</p>}
                  <button
                    type="submit"
                    className="w-full bg-accent-emerald text-bg-primary text-sm font-body font-medium py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    send message
                  </button>
                </form>
              )}
            </div>

            {/* Right — large decorative text */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-right">
                <p className="font-heading font-light text-7xl text-tx-primary/5 leading-tight">
                  Let&apos;s<br/>
                  Work<br/>
                  Together
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
