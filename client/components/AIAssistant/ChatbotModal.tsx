"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { faqData } from "../../data/faqData"

interface Message {
  type: "user" | "ai"
  content: string
}

interface ChatbotModalProps {
  isOpen: boolean
  onClose: () => void
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "ai",
      content:
        "Hi! I'm your AI assistant. How can I help you today? You can select a question from the dropdown below or type your own.",
    },
  ])
  const [input, setInput] = useState("")
  const [selectedQuestion, setSelectedQuestion] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [scrollAreaRef]) //Corrected dependency

  const handleSendMessage = () => {
    if (selectedQuestion) {
      const question = selectedQuestion
      setMessages([...messages, { type: "user", content: question }])
      setSelectedQuestion("")

      // Find the answer in the FAQ data
      let answer = "I'm sorry, I don't have an answer for that question at the moment."
      faqData.forEach((category) => {
        category.items.forEach((item) => {
          if (item.question === question) {
            answer = item.answer
          }
        })
      })

      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "ai", content: answer }])
      }, 1000)
    } else if (input.trim()) {
      setMessages([
        ...messages,
        { type: "user", content: input },
        {
          type: "ai",
          content:
            "I'm sorry, but for now, I can only respond to predefined questions. Please select a question from the dropdown menu above. We're working on improving the AI chatbot to handle custom queries in the future.",
        },
      ])
      setInput("")
    }
  }

  const handleQuestionSelect = (value: string) => {
    setSelectedQuestion(value)
    handleSendMessage()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white sm:max-w-[425px] h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">AI Assistant</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-grow pr-4" ref={scrollAreaRef}>
          <div className="space-y-4 pb-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start space-x-2 ${
                    message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <Avatar className={message.type === "ai" ? "bg-blue-500" : "bg-green-500"}>
                    <AvatarFallback>{message.type === "ai" ? "AI" : "You"}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`p-3 rounded-lg ${message.type === "user" ? "bg-green-600" : "bg-blue-600"} max-w-[80%]`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex flex-col mt-4 space-y-2">
          <p className="text-sm text-gray-400 mb-2">
            Note: Currently, only predefined questions are supported. Custom input is disabled.
          </p>
          <Select onValueChange={handleQuestionSelect}>
            <SelectTrigger className="bg-gray-700 text-white">
              <SelectValue placeholder="Select a question" />
            </SelectTrigger>
            <SelectContent>
              {faqData.map((category) =>
                category.items.map((item, index) => (
                  <SelectItem key={`${category.category}-${index}`} value={item.question}>
                    {item.question}
                  </SelectItem>
                )),
              )}
            </SelectContent>
          </Select>
          <div className="flex">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Custom input is currently disabled"
              className="flex-grow mr-2 bg-gray-700 text-white"
              disabled
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ChatbotModal

