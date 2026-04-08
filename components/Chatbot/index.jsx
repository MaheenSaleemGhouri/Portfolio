'use client'
import useChatbot from './useChatbot'
import ChatbotButton from './ChatbotButton'
import ChatbotWindow from './ChatbotWindow'

export default function Chatbot() {
  const chat = useChatbot()

  return (
    <>
      <ChatbotWindow
        isOpen={chat.isOpen}
        messages={chat.messages}
        input={chat.input}
        setInput={chat.setInput}
        isLoading={chat.isLoading}
        sendMessage={chat.sendMessage}
        handleKeyDown={chat.handleKeyDown}
      />
      <ChatbotButton
        isOpen={chat.isOpen}
        setIsOpen={chat.setIsOpen}
      />
    </>
  )
}
