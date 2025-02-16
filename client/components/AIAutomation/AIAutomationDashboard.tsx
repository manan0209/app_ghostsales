"use client"
import type React from "react"
import { useState } from "react"
import AIAutomationOverview from "./AIAutomationOverview"
import ActiveAutomations from "./ActiveAutomations"
import CreateAutomationModal from "./CreateAutomationModal"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const AIAutomationDashboard: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">AI Automation Dashboard</h2>
      <AIAutomationOverview />
      <ActiveAutomations />
      <Button
        onClick={() => setIsCreateModalOpen(true)}
        className="fixed bottom-8 right-8 rounded-full w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <Plus className="h-6 w-6" />
      </Button>
      <CreateAutomationModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  )
}

export default AIAutomationDashboard

