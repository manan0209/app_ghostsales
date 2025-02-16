import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Campaign {
  id: string
  name: string
  engagement: number
  conversions: number
  status: "Active" | "Completed"
}

const campaigns: Campaign[] = [
  { id: "1", name: "Summer Sale", engagement: 85, conversions: 120, status: "Active" },
  { id: "2", name: "New Product Launch", engagement: 92, conversions: 150, status: "Active" },
  { id: "3", name: "Holiday Special", engagement: 78, conversions: 100, status: "Completed" },
  { id: "4", name: "Customer Loyalty Program", engagement: 88, conversions: 130, status: "Active" },
]

const CampaignsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {campaigns.map((campaign) => (
        <Card key={campaign.id} className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">{campaign.name}</CardTitle>
            <Badge
              variant={campaign.status === "Active" ? "default" : "secondary"}
              className={campaign.status === "Active" ? "bg-green-500" : "bg-gray-500"}
            >
              {campaign.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{campaign.engagement}%</div>
            <p className="text-xs text-gray-400">Engagement Rate</p>
            <div className="mt-2 text-lg font-semibold text-white">{campaign.conversions}</div>
            <p className="text-xs text-gray-400">Conversions</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CampaignsOverview

