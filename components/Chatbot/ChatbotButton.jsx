'use client'

export default function ChatbotButton({ isOpen, setIsOpen }) {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50">
      {!isOpen && (
        <span
          className="absolute -inset-1 rounded-full animate-chatPing"
          style={{ background: 'rgba(78,204,163,0.3)' }}
        />
      )}

      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="relative w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
        style={{ background: '#4ECCA3' }}
      >
        {isOpen ? (
          <svg width="20" height="20" fill="none" stroke="#0B0D0E" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" fill="none" stroke="#0B0D0E" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>
    </div>
  )
}
