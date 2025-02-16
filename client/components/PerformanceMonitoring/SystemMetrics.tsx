import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Users, Activity, Database } from "lucide-react"

interface MetricData {
  timestamp: string
  value: number
}

interface SystemMetricsProps {
  activeUsers: MetricData[]
  apiCalls: MetricData[]
  dataUsage: MetricData[]
}

const SystemMetrics: React.FC<SystemMetricsProps> = ({ activeUsers, apiCalls, dataUsage }) => {
  const renderChart = (data: MetricData[], color: string) => (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data}>
        <XAxis dataKey="timestamp" hide />
        <YAxis hide />
        <Tooltip
          contentStyle={{ background: "#1F2937", border: "none", borderRadius: "4px" }}
          labelStyle={{ color: "#9CA3AF" }}
        />
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )

  return (
    <Card className="bg-gradient-to-br from-indigo-500/10 to-teal-500/10 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">System Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center mb-2">
            <Users className="h-5 w-5 text-blue-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Active Users</h3>
          </div>
          {renderChart(activeUsers, "#3B82F6")}
        </div>
        <div>
          <div className="flex items-center mb-2">
            <Activity className="h-5 w-5 text-green-400 mr-2" />
            <h3 className="text-lg font-medium text-white">API Call Volume</h3>
          </div>
          {renderChart(apiCalls, "#10B981")}
        </div>
        <div>
          <div className="flex items-center mb-2">
            <Database className="h-5 w-5 text-purple-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Data Storage Usage</h3>
          </div>
          {renderChart(dataUsage, "#8B5CF6")}
        </div>
      </CardContent>
    </Card>
  )
}

export default SystemMetrics

