import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Alice", leadsHandled: 45, campaignsLaunched: 3 },
  { name: "Bob", leadsHandled: 52, campaignsLaunched: 2 },
  { name: "Charlie", leadsHandled: 38, campaignsLaunched: 4 },
  { name: "Diana", leadsHandled: 60, campaignsLaunched: 5 },
  { name: "Ethan", leadsHandled: 41, campaignsLaunched: 3 },
]

const TeamPerformanceChart: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Team Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none" }} labelStyle={{ color: "#ffffff" }} />
            <Bar dataKey="leadsHandled" fill="#8884d8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="campaignsLaunched" fill="#82ca9d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default TeamPerformanceChart

