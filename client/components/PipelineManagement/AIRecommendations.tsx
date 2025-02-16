import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

interface Lead {
  id: string
  name: string
  status: string
  nextFollowUp: string
  interactions: number
  lastInteraction: string
}

interface Stage {
  id: string
  title: string
  leads: Lead[]
}

interface AIRecommendationsProps {
  stages: Stage[]
}

const AIRecommendations: React.FC<AIRecommendationsProps> = ({ stages }) => {
  const getRecommendations = () => {
    const recommendations = []

    // Check for leads that haven't been interacted with recently
    const currentDate = new Date()
    stages.forEach((stage) => {
      stage.leads.forEach((lead) => {
        const lastInteractionDate = new Date(lead.lastInteraction)
        const daysSinceLastInteraction = Math.floor(
          (currentDate.getTime() - lastInteractionDate.getTime()) / (1000 * 3600 * 24),
        )

        if (daysSinceLastInteraction > 7) {
          recommendations.push(
            `Follow up with ${lead.name} in the ${stage.title} stage. Last interaction was ${daysSinceLastInteraction} days ago.`,
          )
        }
      })
    })

    // Check for leads stuck in a stage for too long
    stages.forEach((stage) => {
      if (stage.title !== "Closed") {
        stage.leads.forEach((lead) => {
          if (lead.interactions > 5) {
            recommendations.push(
              `Consider moving ${lead.name} to the next stage or reassessing their potential. They've had ${lead.interactions} interactions in the ${stage.title} stage.`,
            )
          }
        })
      }
    })

    return recommendations
  }

  const recommendations = getRecommendations()

  return (
    <Card className="bg-gradient-to-br from-yellow-500/10 to-red-500/10 mb-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white flex items-center">
          <AlertTriangle className="mr-2 h-6 w-6 text-yellow-400" />
          AI Pipeline Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recommendations.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="text-white">
                {recommendation}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No recommendations at this time. Your pipeline is looking good!</p>
        )}
      </CardContent>
    </Card>
  )
}

export default AIRecommendations

