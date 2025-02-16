"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import Filters from "./Filters"
import LeadsTable from "./LeadsTable"
import AddLeadButton from "./AddLeadButton"
import AddLeadModal from "./AddLeadModal"
import LeadAnalytics from "./LeadAnalytics"
import ManageFieldsModal from "./ManageFieldsModal"
import AIInsights from "./AIInsights"
import AILeadDiscovery from "./AILeadDiscovery"
import { Button } from "@/components/ui/button"

interface CustomField {
  id: string
  name: string
  type: "text" | "dropdown" | "number"
}

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  status: string
  assignedAgent: string
  priority: "high" | "medium" | "low"
  score: number
  source: string
  customFields: Record<string, string | number>
}

const mockLeads: Lead[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    status: "New",
    assignedAgent: "Alice Smith",
    priority: "high",
    score: 85,
    source: "Website",
    customFields: {},
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    status: "Contacted",
    assignedAgent: "Bob Johnson",
    priority: "medium",
    score: 72,
    source: "Referral",
    customFields: {},
  },
  {
    id: "3",
    name: "Mike Brown",
    email: "mike@example.com",
    phone: "456-789-0123",
    status: "Qualified",
    assignedAgent: "Charlie Davis",
    priority: "low",
    score: 63,
    source: "LinkedIn",
    customFields: {},
  },
]

const LeadManagement: React.FC = () => {
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false)
  const [isManageFieldsModalOpen, setIsManageFieldsModalOpen] = useState(false)
  const [customFields, setCustomFields] = useState<CustomField[]>([])
  const [leads, setLeads] = useState<Lead[]>(mockLeads)

  const calculateLeadScore = useCallback((lead: Partial<Lead>): number => {
    let score = 50 // Base score

    if (lead.status === "qualified") score += 20
    if (lead.priority === "high") score += 15
    if (lead.source === "referral") score += 10

    return Math.min(100, Math.max(0, score)) // Ensure score is between 0 and 100
  }, [])

  useEffect(() => {
    // Simulating AI-powered lead scoring
    setLeads((currentLeads) =>
      currentLeads.map((lead) => ({
        ...lead,
        score: calculateLeadScore(lead),
      })),
    )
  }, [calculateLeadScore])

  const handleResetFilters = () => {
    // Implement reset filters logic here
    console.log("Filters reset")
  }

  const handleSaveCustomFields = (fields: CustomField[]) => {
    setCustomFields(fields)
    // Here you would typically update the backend with the new custom fields
  }

  const handleAddLead = (newLead: Omit<Lead, "id" | "score">) => {
    const leadWithScore = {
      ...newLead,
      id: Date.now().toString(),
      score: calculateLeadScore(newLead),
    }
    setLeads((prevLeads) => [...prevLeads, leadWithScore])
  }

  return (
    <div className="space-y-6">
      <AIInsights leads={leads} />
      <LeadAnalytics leads={leads} />
      <AILeadDiscovery onLeadDiscovered={handleAddLead} />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Lead Management</h2>
        <Button onClick={() => setIsManageFieldsModalOpen(true)}>Manage Fields</Button>
      </div>
      <Filters onReset={handleResetFilters} />
      <LeadsTable leads={leads} customFields={customFields} />
      <AddLeadButton onClick={() => setIsAddLeadModalOpen(true)} />
      <AddLeadModal
        isOpen={isAddLeadModalOpen}
        onClose={() => setIsAddLeadModalOpen(false)}
        customFields={customFields}
        onAddLead={handleAddLead}
      />
      <ManageFieldsModal
        isOpen={isManageFieldsModalOpen}
        onClose={() => setIsManageFieldsModalOpen(false)}
        customFields={customFields}
        onSaveFields={handleSaveCustomFields}
      />
    </div>
  )
}

export default LeadManagement

