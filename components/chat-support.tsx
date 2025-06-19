"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
}

const commonQuestions = [
  "What are the eligibility requirements?",
  "How long is the recruitment process?",
  "What documents do I need to apply?",
  "When is the next recruitment drive?",
  "How can I check my application status?",
]

const predefinedResponses: Record<string, string> = {
  eligibility:
    "The basic eligibility requirements include Pakistani citizenship, age between 18-28 years (varies by position), good physical and mental health, and relevant educational qualifications. For specific positions, please check our recruitment page.",
  process:
    "The recruitment process typically takes 2-3 months and includes application submission, initial screening, written tests, physical fitness tests, interviews, medical examinations, and background checks.",
  documents:
    "Required documents include CNIC, educational certificates, recent photographs, and a resume/CV. Additional documents may be required depending on the position you're applying for.",
  drive:
    "Our next recruitment drive is scheduled for August 2025. Keep checking our website for official announcements and specific dates.",
  status:
    "You can check your application status by logging into our recruitment portal using your reference number, or by contacting our recruitment office directly at recruitment@pakairdefense.gov.pk.",
  default:
    "Thank you for your inquiry. Our recruitment team will review your question and get back to you shortly. For immediate assistance, please call our recruitment hotline at +92-XXX-XXXXXXX during office hours.",
}

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Welcome to Pakistan Air Defense Forces recruitment support! How can I assist you with your recruitment inquiries today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate agent typing
    setTimeout(() => {
      const response = getResponse(inputValue)
      const agentMessage: Message = {
        id: `agent-${Date.now()}`,
        content: response,
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("eligibility") || lowerQuestion.includes("requirements")) {
      return predefinedResponses.eligibility
    } else if (
      lowerQuestion.includes("process") ||
      lowerQuestion.includes("how long") ||
      lowerQuestion.includes("duration")
    ) {
      return predefinedResponses.process
    } else if (lowerQuestion.includes("document") || lowerQuestion.includes("need to apply")) {
      return predefinedResponses.documents
    } else if (
      lowerQuestion.includes("next") ||
      lowerQuestion.includes("recruitment drive") ||
      lowerQuestion.includes("when")
    ) {
      return predefinedResponses.drive
    } else if (lowerQuestion.includes("status") || lowerQuestion.includes("check")) {
      return predefinedResponses.status
    } else {
      return predefinedResponses.default
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: question,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate agent typing
    setTimeout(() => {
      const response = getResponse(question)
      const agentMessage: Message = {
        id: `agent-${Date.now()}`,
        content: response,
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentMessage])
      setIsTyping(false)
    }, 1500)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 shadow-lg bg-green-600 hover:bg-green-700",
          isOpen && "hidden",
        )}
        aria-label="Open chat support"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[350px] md:w-[400px] shadow-xl border-green-200 flex flex-col h-[500px] max-h-[80vh]">
          <CardHeader className="bg-green-600 text-white py-3 px-4 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Support Agent" />
                <AvatarFallback className="bg-green-700 text-white">PAD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm">Recruitment Support</h3>
                <p className="text-xs text-green-100">Pakistan Air Defense Forces</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-700 h-8 w-8"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex flex-col max-w-[80%] space-y-1",
                  message.sender === "user" ? "ml-auto items-end" : "mr-auto items-start",
                )}
              >
                <div
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm",
                    message.sender === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-800 border border-gray-200",
                  )}
                >
                  {message.content}
                </div>
                <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex max-w-[80%] mr-auto">
                <div className="rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-800 border border-gray-200 flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Typing...</span>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500">Common questions:</p>
                {commonQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-left justify-start h-auto py-2 text-sm w-full"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{question}</span>
                  </Button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="p-3 border-t">
            <div className="flex w-full items-center space-x-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button
                type="button"
                size="icon"
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="bg-green-600 hover:bg-green-700 h-10 w-10"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
