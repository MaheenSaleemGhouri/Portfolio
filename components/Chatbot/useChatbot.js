'use client'
import { useState, useCallback } from 'react'

export default function useChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Maheen's AI assistant \u{1F44B} Ask me anything about her work, skills, or services!\n\nYa Roman Urdu mein pooch sakte hain — main samjhunga! \u{1F60A}",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = useCallback(async (overrideInput) => {
    const text = (overrideInput || input).trim()
    if (!text || isLoading) return

    const userMsg = { role: 'user', content: text }
    const updatedMessages = [...messages, userMsg]

    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      const data = await res.json()

      if (data.error) throw new Error(data.error)

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.reply },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "Oops! Kuch masla ho gaya. Thodi der baad try karein. \u{1F64F}",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [input, messages, isLoading])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const resetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm Maheen's AI assistant \u{1F44B} Ask me anything about her work, skills, or services!\n\nYa Roman Urdu mein pooch sakte hain — main samjhunga! \u{1F60A}",
      },
    ])
    setInput('')
    setIsLoading(false)
  }

  return {
    isOpen, setIsOpen,
    messages,
    input, setInput,
    isLoading,
    sendMessage,
    handleKeyDown,
    resetChat,
  }
}
