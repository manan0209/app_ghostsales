import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

interface Automation {
  id: string
  name: string
  trigger: string
  lastAction: string
  status: "Active" | "Paused"
}

const automations: Automation[] = [
  {
    id: "1",
    name: "New Lead Follow-up",
    trigger: "New Lead Added",
    lastAction: "Sent welcome email",
    status: "Active",
  },
  {
    id: "2",
    name: "Deal Closing Reminder",
    trigger: "Status Change",
    lastAction: "Notified manager",
    status: "Active",
  },
  {
    id: "3",
    name: "Inactive Lead Re-engagement",
    trigger: "Time-based",
    lastAction: "Updated status",
    status: "Paused",
  },
  {
    id: "4",
    name: "High-Value Lead Alert",
    trigger: "Lead Score Change",
    lastAction: "Sent Slack notification",
    status: "Active",
  },
]

const ActiveAutomations: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">Active Automations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {automations.map((automation) => (
            <li
              key={automation.id}
              className="bg-gray-700 p-4 rounded-lg transition-all duration-300 hover:bg-gray-600"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{automation.name}</h3>
                  <p className="text-sm text-gray-400">Trigger: {automation.trigger}</p>
                  <p className="text-sm text-gray-400">Last Action: {automation.lastAction}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={automation.status === "Active" ? "default" : "secondary"}
                    className={automation.status === "Active" ? "bg-green-500" : "bg-gray-500"}
                  >
                    {automation.status}
                  </Badge>
                  <Switch
                    checked={automation.status === "Active"}
                    onCheckedChange={() => {
                      // Handle status change
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default ActiveAutomations

