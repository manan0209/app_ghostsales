import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

interface Alert {
  id: string
  customerName: string
  risk: "low" | "medium" | "high"
  reason: string
}

const alerts: Alert[] = [
  { id: "1", customerName: "John Doe", risk: "high", reason: "No activity in last 30 days" },
  { id: "2", customerName: "Jane Smith", risk: "medium", reason: "Decreased usage of key features" },
  { id: "3", customerName: "Bob Johnson", risk: "low", reason: "Recent negative feedback" },
]

const RetentionAlerts: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
          Retention Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li key={alert.id} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">{alert.customerName}</span>
                <Badge
                  variant={alert.risk === "high" ? "destructive" : alert.risk === "medium" ? "warning" : "default"}
                >
                  {alert.risk} risk
                </Badge>
              </div>
              <p className="text-gray-300 text-sm">{alert.reason}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default RetentionAlerts

