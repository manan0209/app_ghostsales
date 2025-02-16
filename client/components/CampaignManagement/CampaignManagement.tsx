"use client"
import type React from "react"
import { useState } from "react"
import CampaignsOverview from "./CampaignsOverview"
import CampaignsTable from "./CampaignsTable"
import CreateCampaignModal from "./CreateCampaignModal"
import AutomatedCampaigns from "./AutomatedCampaigns"
import PersonalizedOutreach from "./PersonalizedOutreach"
import OmniChannelDashboard from "./OmniChannelDashboard"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const CampaignManagement: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Campaign Management</h2>
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Plus className="mr-2 h-4 w-4" /> Create Campaign
        </Button>
      </div>
      <CampaignsOverview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AutomatedCampaigns />
        <PersonalizedOutreach />
      </div>
      <OmniChannelDashboard />
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <CampaignsTable />
      </div>
      <CreateCampaignModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  )
}

export default CampaignManagement

