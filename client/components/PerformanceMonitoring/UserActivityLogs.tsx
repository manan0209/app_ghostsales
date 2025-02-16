import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, UserPlus, Megaphone } from "lucide-react"

interface ActivityLog {
  id: string
  type: "login" | "lead" | "campaign"
  user: string
  timestamp: string
  details: string
}

interface UserActivityLogsProps {
  logs: ActivityLog[]
}

const UserActivityLogs: React.FC<UserActivityLogsProps> = ({ logs }) => {
  const getIcon = (type: ActivityLog["type"]) => {
    switch (type) {
      case "login":
        return <LogIn className="h-5 w-5 text-blue-400" />
      case "lead":
        return <UserPlus className="h-5 w-5 text-green-400" />
      case "campaign":
        return <Megaphone className="h-5 w-5 text-purple-400" />
    }
  }

  return (
    <Card className="bg-gradient-to-br from-blue-500/10 to-green-500/10 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">User Activity Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {logs.map((log) => (
            <div key={log.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">{getIcon(log.type)}</div>
              <div className="flex-grow">
                <p className="text-sm font-medium text-white">{log.user}</p>
                <p className="text-xs text-gray-400">{log.timestamp}</p>
                <p className="text-sm text-gray-300 mt-1">{log.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default UserActivityLogs

