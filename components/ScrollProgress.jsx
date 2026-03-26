'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const update = () => {
      const { scrollY, innerHeight } = window
      const { scrollHeight } = document.documentElement
      setWidth((scrollY / (scrollHeight - innerHeight)) * 100)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-accent-purple z-[100] transition-none pointer-events-none"
      style={{ width: `${width}%` }}
    />
  )
}
