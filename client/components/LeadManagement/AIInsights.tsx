import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain } from "lucide-react"

interface Lead {
  id: string
  name: string
  score: number
}

interface AIInsightsProps {
  leads: Lead[]
}

const AIInsights: React.FC<AIInsightsProps> = ({ leads }) => {
  const averageScore = leads.reduce((sum, lead) => sum + lead.score, 0) / leads.length || 0
  const highPotentialLeads = leads.filter((lead) => lead.score > 80).length

  return (
    <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white flex items-center">
          <Brain className="mr-2 h-6 w-6 text-purple-400" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-400">Average Lead Score</p>
            <p className="text-2xl font-bold text-white">{averageScore.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">High Potential Leads</p>
            <p className="text-2xl font-bold text-white">{highPotentialLeads}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">AI Recommendation</p>
            <p className="text-white">
              Focus on the {highPotentialLeads} high-potential leads to maximize conversion rates.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AIInsights

