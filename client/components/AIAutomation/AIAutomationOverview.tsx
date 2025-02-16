import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BotIcon as Robot, Zap, CheckCircle } from "lucide-react"

interface OverviewCardProps {
  title: string
  value: string
  icon: React.ReactNode
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, icon }) => (
  <Card className="bg-gray-800 border-none overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 animate-pulse" />
    <CardHeader className="relative z-10">
      <CardTitle className="text-lg font-semibold text-white flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="relative z-10">
      <p className="text-3xl font-bold text-white">{value}</p>
    </CardContent>
  </Card>
)

const AIAutomationOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <OverviewCard title="Active Automations" value="12" icon={<Robot className="h-6 w-6 text-purple-400" />} />
      <OverviewCard title="Total AI Actions" value="1,234" icon={<Zap className="h-6 w-6 text-pink-400" />} />
      <OverviewCard title="Success Rate" value="95%" icon={<CheckCircle className="h-6 w-6 text-green-400" />} />
    </div>
  )
}

export default AIAutomationOverview

