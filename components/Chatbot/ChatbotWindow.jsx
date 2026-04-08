'use client'
import { useEffect, useRef } from 'react'

const quickChips = [
  'What services do you offer?',
  'Kya ap available hain?',
  'View projects',
  'Rate kya hai?',
]

export default function ChatbotWindow({
  isOpen, messages, input, setInput,
  isLoading, sendMessage, handleKeyDown, resetChat,
}) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  if (!isOpen) return null

  return (
    <div
      className="fixed z-50 flex flex-col animate-slideUp"
      style={{
        bottom: '96px',
        right: '20px',
        width: 'min(360px, calc(100vw - 40px))',
        height: 'min(480px, calc(100vh - 140px))',
        background: '#111619',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2.5 shrink-0"
        style={{
          padding: '14px 16px',
          borderBottom: '0.5px solid #1E2830',
          borderRadius: '16px 16px 0 0',
          background: '#161C20',
        }}
      >
        <div className="relative shrink-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(78,204,163,0.15)',
              border: '0.5px solid rgba(78,204,163,0.3)',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '14px',
              color: '#4ECCA3',
            }}
          >
            MG
          </div>
          <span
            className="absolute rounded-full"
            style={{
              bottom: '1px', right: '1px',
              width: '9px', height: '9px',
              background: '#4ECCA3',
              border: '1.5px solid #161C20',
            }}
          />
        </div>
        <div className="flex-1">
          <p style={{ margin: 0, fontSize: '13px', fontWeight: 500, color: '#FFFFFF' }}>
            Maheen&apos;s AI Assistant
          </p>
          <p style={{ margin: 0, fontSize: '11px', color: '#4ECCA3' }}>
            Online &bull; Reply karta hai 24/7
          </p>
        </div>
        <button
          onClick={resetChat}
          aria-label="Reset chat"
          title="New chat"
          className="shrink-0 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-[rgba(78,204,163,0.1)]"
          style={{
            width: '32px',
            height: '32px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <svg width="15" height="15" fill="none" stroke="#8090A0" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 2v6h-6" />
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M3 22v-6h6" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto flex flex-col gap-2.5"
        style={{ padding: '14px 12px' }}
      >
        {messages.map((msg, i) => (
          <div key={i}>
            <div
              className="flex"
              style={{ justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
            >
              <div
                style={{
                  maxWidth: '80%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'user'
                    ? '16px 4px 16px 16px'
                    : '4px 16px 16px 16px',
                  background: msg.role === 'user' ? '#4ECCA3' : '#1E2830',
                  color: msg.role === 'user' ? '#0B0D0E' : '#D0D8E0',
                  fontSize: '12px',
                  lineHeight: '1.7',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: msg.role === 'user' ? '500' : '300',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {msg.content}
              </div>
            </div>

            {/* Quick chips after welcome message */}
            {i === 0 && messages.length === 1 && msg.role === 'assistant' && (
              <div className="flex flex-wrap gap-1.5 mt-2 ml-1">
                {quickChips.map((q, ci) => (
                  <button
                    key={ci}
                    onClick={() => sendMessage(q)}
                    className="transition-colors hover:bg-[rgba(78,204,163,0.15)]"
                    style={{
                      fontSize: '10px',
                      padding: '5px 11px',
                      background: 'rgba(78,204,163,0.08)',
                      border: '0.5px solid rgba(78,204,163,0.25)',
                      color: '#4ECCA3',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div
              className="flex gap-1.5"
              style={{
                background: '#1E2830',
                borderRadius: '4px 16px 16px 16px',
                padding: '12px 16px',
              }}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="inline-block rounded-full animate-chatBounce"
                  style={{
                    width: '6px',
                    height: '6px',
                    background: '#4A5A66',
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        className="flex items-center gap-2 shrink-0"
        style={{ padding: '10px 12px', borderTop: '0.5px solid #1E2830' }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Kuch poochein ya type your question..."
          disabled={isLoading}
          className="flex-1 outline-none"
          style={{
            background: '#1A2024',
            border: 'none',
            color: '#D0D8E0',
            fontSize: '12px',
            padding: '10px 14px',
            borderRadius: '8px',
            fontFamily: 'Inter, sans-serif',
          }}
        />
        <button
          onClick={() => sendMessage()}
          disabled={isLoading || !input.trim()}
          className="shrink-0 flex items-center justify-center transition-colors duration-200"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            background: input.trim() ? '#4ECCA3' : '#1E2830',
            border: 'none',
            cursor: input.trim() ? 'pointer' : 'default',
          }}
        >
          <svg
            width="16" height="16" fill="none"
            stroke={input.trim() ? '#0B0D0E' : '#3A4A54'}
            strokeWidth="2" viewBox="0 0 24 24"
          >
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
