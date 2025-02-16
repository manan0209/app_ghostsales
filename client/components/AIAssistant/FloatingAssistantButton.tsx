"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"

interface FloatingAssistantButtonProps {
  onClick: () => void
}

const FloatingAssistantButton: React.FC<FloatingAssistantButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 rounded-full w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <Bot className="h-6 w-6 md:h-8 md:w-8 text-white" />
    </Button>
  )
}

export default FloatingAssistantButton

