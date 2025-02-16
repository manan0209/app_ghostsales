import type React from "react"
import ServerStatus from "./ServerStatus"
import UserActivityLogs from "./UserActivityLogs"
import SystemMetrics from "./SystemMetrics"

const PerformanceMonitoring: React.FC = () => {
  // Mock data for demonstration purposes
  const serverStatus = {
    uptime: 99.9,
    latency: 42,
  }

  const activityLogs = [
    { id: "1", type: "login", user: "John Doe", timestamp: "2 minutes ago", details: "Logged in successfully" },
    { id: "2", type: "lead", user: "Jane Smith", timestamp: "15 minutes ago", details: "Added new lead: Acme Corp" },
    {
      id: "3",
      type: "campaign",
      user: "Mike Johnson",
      timestamp: "1 hour ago",
      details: 'Launched "Summer Sale" campaign',
    },
    { id: "4", type: "login", user: "Sarah Williams", timestamp: "2 hours ago", details: "Logged in successfully" },
    { id: "5", type: "lead", user: "Tom Brown", timestamp: "3 hours ago", details: "Updated lead: TechStart Inc." },
  ]

  const generateMetricData = () => {
    return Array.from({ length: 24 }, (_, i) => ({
      timestamp: `${i}:00`,
      value: Math.floor(Math.random() * 100),
    }))
  }

  const systemMetrics = {
    activeUsers: generateMetricData(),
    apiCalls: generateMetricData(),
    dataUsage: generateMetricData(),
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Performance Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServerStatus uptime={serverStatus.uptime} latency={serverStatus.latency} />
        <UserActivityLogs logs={activityLogs} />
      </div>
      <SystemMetrics
        activeUsers={systemMetrics.activeUsers}
        apiCalls={systemMetrics.apiCalls}
        dataUsage={systemMetrics.dataUsage}
      />
    </div>
  )
}

export default PerformanceMonitoring

