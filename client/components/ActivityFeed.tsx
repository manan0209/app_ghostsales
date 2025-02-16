import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Rocket, LogIn } from "lucide-react"

interface ActivityItem {
  id: number
  icon: React.ElementType
  content: string
  timestamp: string
}

const activities: ActivityItem[] = [
  { id: 1, icon: UserPlus, content: "New lead 'Acme Corp' added by John Doe", timestamp: "2 minutes ago" },
  { id: 2, icon: Rocket, content: "'Summer Sale' campaign launched", timestamp: "1 hour ago" },
  { id: 3, icon: LogIn, content: "Jane Smith logged in", timestamp: "3 hours ago" },
  { id: 4, icon: UserPlus, content: "New lead 'TechStart' added by Jane Smith", timestamp: "5 hours ago" },
  { id: 5, icon: LogIn, content: "John Doe logged in", timestamp: "6 hours ago" },
]

const ActivityFeed: React.FC = () => {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <activity.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground">{activity.content}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default ActivityFeed

