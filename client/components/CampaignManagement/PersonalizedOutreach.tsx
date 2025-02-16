import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserCheck } from "lucide-react"

const personalizedCampaigns = [
  { id: 1, name: "VIP Customer Appreciation", status: "Active", leads: 50 },
  { id: 2, name: "Product Upsell", status: "Draft", leads: 75 },
  { id: 3, name: "Reactivation Campaign", status: "Scheduled", leads: 100 },
]

const PersonalizedOutreach: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-white">Personalized Outreach</CardTitle>
        <Button variant="outline" size="sm">
          <UserCheck className="mr-2 h-4 w-4" /> Create Personalized Campaign
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {personalizedCampaigns.map((campaign) => (
            <Card key={campaign.id} className="bg-gray-700 border-gray-600">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{campaign.name}</h3>
                <p className="text-sm text-gray-400">Status: {campaign.status}</p>
                <p className="text-sm text-gray-400">Targeted Leads: {campaign.leads}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PersonalizedOutreach

