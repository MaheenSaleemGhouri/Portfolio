'use client'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function TypewriterLabel({ text, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || count >= text.length) return
    const t = setTimeout(() => setCount(c => c + 1), 55)
    return () => clearTimeout(t)
  }, [inView, count, text])

  return (
    <p ref={ref} className={className}>
      {text.slice(0, count)}
      {count < text.length && <span className="opacity-60">|</span>}
    </p>
  )
}
