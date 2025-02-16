import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

const automatedCampaigns = [
  { id: 1, name: "Welcome Series", status: "Active", performance: "85%" },
  { id: 2, name: "Re-engagement", status: "Paused", performance: "72%" },
  { id: 3, name: "Product Update", status: "Draft", performance: "N/A" },
]

const AutomatedCampaigns: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-white">Automated Campaigns</CardTitle>
        <Button variant="outline" size="sm">
          <Zap className="mr-2 h-4 w-4" /> Create Automated Campaign
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {automatedCampaigns.map((campaign) => (
            <Card key={campaign.id} className="bg-gray-700 border-gray-600">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{campaign.name}</h3>
                <p className="text-sm text-gray-400">Status: {campaign.status}</p>
                <p className="text-sm text-gray-400">Performance: {campaign.performance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default AutomatedCampaigns

