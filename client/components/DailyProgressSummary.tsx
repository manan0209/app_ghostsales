import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const DailyProgressSummary: React.FC = () => {
  const progressPercentage = 75 // This would be dynamically calculated based on actual data

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Daily Progress Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Progress towards daily targets</span>
            <span className="text-sm font-bold text-white">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="w-full" />
        </div>
        <p className="mt-4 text-sm text-gray-300">
          Great job! You're {progressPercentage}% of the way to your daily goal.
        </p>
      </CardContent>
    </Card>
  )
}

export default DailyProgressSummary

