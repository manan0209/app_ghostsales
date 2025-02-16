"use client"
import type React from "react"
import { useState } from "react"
import AutomationTemplateCard from "./AutomationTemplateCard"
import CustomAutomationModal from "./CustomAutomationModal"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TaskAutomationSettings: React.FC = () => {
  const [isCustomAutomationModalOpen, setIsCustomAutomationModalOpen] = useState(false)
  const [automationTemplates, setAutomationTemplates] = useState([
    {
      id: 1,
      title: "Welcome Email",
      description: "Sends a welcome email to new leads",
      isActive: true,
      executionCount: 1250,
      successRate: 98,
      trigger: "New Lead Added",
      action: "Send Email",
    },
    {
      id: 2,
      title: "Follow-Up Reminder",
      description: "Follow up with leads after 3 days",
      isActive: true,
      executionCount: 875,
      successRate: 92,
      trigger: "Time-based",
      action: "Follow Up",
    },
    {
      id: 3,
      title: "Lead Scoring",
      description: "Automatically scores leads",
      isActive: false,
      executionCount: 3000,
      successRate: 95,
      trigger: "Lead Interaction",
      action: "Update Lead Score",
    },
  ])

  const toggleAutomation = (id: number) => {
    setAutomationTemplates(
      automationTemplates.map((template) =>
        template.id === id ? { ...template, isActive: !template.isActive } : template,
      ),
    )
  }

  const handleSaveCustomAutomation = (automation: any) => {
    // Here you would typically send this data to your backend
    console.log("New custom automation:", automation)
    // For now, we'll just add it to our local state
    setAutomationTemplates([
      ...automationTemplates,
      {
        id: automationTemplates.length + 1,
        title: automation.name,
        description: `Trigger: ${automation.triggerEvent}, Action: ${automation.action}`,
        isActive: true,
        executionCount: 0,
        successRate: 100,
        trigger: automation.triggerEvent,
        action: automation.action,
      },
    ])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Task Automation Settings</h2>
        <Button
          onClick={() => setIsCustomAutomationModalOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Plus className="mr-2 h-4 w-4" /> Create Custom Automation
        </Button>
      </div>

      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="templates">Automation Templates</TabsTrigger>
          <TabsTrigger value="custom">Custom Automations</TabsTrigger>
        </TabsList>
        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationTemplates
              .filter((template) => template.id <= 3)
              .map((template) => (
                <AutomationTemplateCard
                  key={template.id}
                  title={template.title}
                  description={template.description}
                  isActive={template.isActive}
                  executionCount={template.executionCount}
                  successRate={template.successRate}
                  trigger={template.trigger}
                  action={template.action}
                  onToggle={() => toggleAutomation(template.id)}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationTemplates
              .filter((template) => template.id > 3)
              .map((template) => (
                <AutomationTemplateCard
                  key={template.id}
                  title={template.title}
                  description={template.description}
                  isActive={template.isActive}
                  executionCount={template.executionCount}
                  successRate={template.successRate}
                  trigger={template.trigger}
                  action={template.action}
                  onToggle={() => toggleAutomation(template.id)}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">Automation Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Total Automations</h3>
              <p className="text-3xl font-bold text-purple-400">{automationTemplates.length}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Active Automations</h3>
              <p className="text-3xl font-bold text-green-400">
                {automationTemplates.filter((template) => template.isActive).length}
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Avg. Success Rate</h3>
              <p className="text-3xl font-bold text-blue-400">
                {(
                  automationTemplates.reduce((sum, template) => sum + template.successRate, 0) /
                  automationTemplates.length
                ).toFixed(2)}
                %
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CustomAutomationModal
        isOpen={isCustomAutomationModalOpen}
        onClose={() => setIsCustomAutomationModalOpen(false)}
        onSave={handleSaveCustomAutomation}
      />
    </div>
  )
}

export default TaskAutomationSettings

