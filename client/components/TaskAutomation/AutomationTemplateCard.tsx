import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Zap, Activity } from "lucide-react"

interface AutomationTemplateProps {
  title: string
  description: string
  isActive: boolean
  executionCount: number
  successRate: number
  trigger: string
  action: string
  onToggle: () => void
}

const AutomationTemplateCard: React.FC<AutomationTemplateProps> = ({
  title,
  description,
  isActive,
  executionCount,
  successRate,
  trigger,
  action,
  onToggle,
}) => {
  return (
    <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-purple-500/50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white flex items-center justify-between">
          {title}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={`${isActive ? "text-green-400" : "text-gray-400"} hover:text-white`}
          >
            {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-300">{description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <div className="flex items-center mb-2">
                <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                <p className="text-sm font-semibold text-white">Trigger</p>
              </div>
              <p className="text-sm text-gray-300">{trigger}</p>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <div className="flex items-center mb-2">
                <Activity className="h-5 w-5 text-blue-400 mr-2" />
                <p className="text-sm font-semibold text-white">Action</p>
              </div>
              <p className="text-sm text-gray-300">{action}</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg">
            <div>
              <p className="text-sm text-gray-400">Executions</p>
              <p className="text-lg font-semibold text-white">{executionCount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Success Rate</p>
              <p className="text-lg font-semibold text-green-400">{successRate}%</p>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
              style={{ width: `${successRate}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AutomationTemplateCard

