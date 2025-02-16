import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Megaphone, TrendingUp } from "lucide-react"

interface StatProps {
  icon: React.ElementType
  label: string
  value: number
}

const Stat: React.FC<StatProps> = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <div className="p-2 rounded-full bg-primary text-primary-foreground">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
)

const StatisticsCard: React.FC = () => {
  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Stat icon={Users} label="Total Leads" value={1234} />
          <Stat icon={Megaphone} label="Active Campaigns" value={5} />
          <Stat icon={TrendingUp} label="Team Performance" value={92} />
        </div>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard

