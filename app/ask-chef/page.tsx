'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Upload, ChefHat, Sparkles } from 'lucide-react'

const personalities = [
  {
    id: 'mason',
    name: 'Mason',
    description: 'Gelatinous & funny - practical tips with light sarcasm',
    avatar: '🧑‍🍳',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'connely',
    name: 'Connely',
    description: 'Hot & evil - roasty humor but accurate advice',
    avatar: '👨‍🍳',
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 'pitmaster',
    name: 'Pitmaster Pete',
    description: 'BBQ expert - low & slow specialist',
    avatar: '🔥',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    id: 'grandma',
    name: 'Grandma Rose',
    description: 'Comfort food expert - warm & nurturing',
    avatar: '👵',
    color: 'bg-pink-100 text-pink-600',
  },
]

interface Message {
  role: 'user' | 'assistant'
  content: string
  personality?: string
}

export default function AskChefPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey there! I'm Mason, your friendly cooking guide. Whether you need help with temperatures, timing, or techniques, I've got your back. What are we cooking today?",
      personality: 'mason',
    },
  ])
  const [input, setInput] = useState('')
  const [selectedPersonality, setSelectedPersonality] = useState('mason')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string[] } = {
        mason: [
          "Good question! Here's the deal...",
          "Alright, let me break this down for you...",
          "Oh, I've got some thoughts on that...",
        ],
        connely: [
          "Listen up, because I'm only saying this once...",
          "Okay okay, I'll help you out this time...",
          "Fine, here's what you need to know...",
        ],
        pitmaster: [
          "Now that's what I'm talking about! Let me tell you...",
          "Slow down there, partner. Here's the secret...",
          "BBQ wisdom coming your way...",
        ],
        grandma: [
          "Oh sweetie, let me help you with that...",
          "Dear, I've been making this for 50 years...",
          "Come here, let grandma show you...",
        ],
      }

      const personalityResponses = responses[selectedPersonality] || responses.mason
      const response = personalityResponses[Math.floor(Math.random() * personalityResponses.length)]

      const assistantMessage: Message = {
        role: 'assistant',
        content: `${response} Remember, food safety is key - always use a thermometer to check that ${input.toLowerCase().includes('chicken') ? 'chicken reaches 165°F' : 'meat reaches safe internal temperature'}. Need more specific guidance? Just ask!`,
        personality: selectedPersonality,
      }

      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const selectedPersonalityData = personalities.find(p => p.id === selectedPersonality)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <ChefHat className="text-orange-600" size={32} />
            <h1 className="text-4xl font-bold">Ask the Chef</h1>
          </div>
          <p className="text-xl text-gray-600">
            Get personalized cooking advice from our AI chefs. Upload recipes, ask questions, 
            and get expert guidance tailored to your needs.
          </p>
        </div>
      </section>

      {/* Personality Selector */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-orange-600" size={20} />
            <span className="font-semibold">Choose Your Chef:</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {personalities.map(personality => (
              <button
                key={personality.id}
                onClick={() => setSelectedPersonality(personality.id)}
                className={`flex-shrink-0 px-4 py-3 rounded-lg border-2 transition ${
                  selectedPersonality === personality.id
                    ? 'border-orange-600 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{personality.avatar}</span>
                  <div className="text-left">
                    <p className="font-semibold">{personality.name}</p>
                    <p className="text-sm text-gray-600">{personality.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 400px)', minHeight: '500px' }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                  message.role === 'user' 
                    ? 'bg-gray-200' 
                    : personalities.find(p => p.id === (message.personality || selectedPersonality))?.color || 'bg-blue-100'
                }`}>
                  {message.role === 'user' 
                    ? '👤' 
                    : personalities.find(p => p.id === (message.personality || selectedPersonality))?.avatar || '🧑‍🍳'}
                </div>

                {/* Message Bubble */}
                <div className={`flex-1 max-w-[80%] ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {message.role === 'assistant' && (
                    <p className="text-xs text-gray-500 mb-1">
                      {personalities.find(p => p.id === (message.personality || selectedPersonality))?.name}
                    </p>
                  )}
                  <div className={`inline-block px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl ${selectedPersonalityData?.color}`}>
                  {selectedPersonalityData?.avatar}
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <button className="flex-shrink-0 p-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition">
                <Upload size={20} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about temperatures, techniques, or upload a recipe..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="flex-shrink-0 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Press Enter to send • Shift + Enter for new line
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-4xl mx-auto mt-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">Quick Questions:</p>
          <div className="flex flex-wrap gap-2">
            {[
              'How do I know when chicken is done?',
              'What temperature for medium-rare steak?',
              'How long should I rest meat?',
              'Tips for crispy chicken skin?',
            ].map((question, index) => (
              <button
                key={index}
                onClick={() => setInput(question)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-orange-600 hover:text-orange-600 transition text-sm"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
