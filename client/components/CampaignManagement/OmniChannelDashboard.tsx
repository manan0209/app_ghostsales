import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const channelData = [
  { name: "Email", sent: 4000, opened: 2400, clicked: 1000 },
  { name: "SMS", sent: 3000, opened: 1398, clicked: 800 },
  { name: "Social Media", sent: 2000, opened: 980, clicked: 500 },
  { name: "Push Notification", sent: 2780, opened: 1908, clicked: 700 },
]

const OmniChannelDashboard: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">Omni-Channel Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={channelData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} />
            <Legend />
            <Bar dataKey="sent" fill="#8884d8" name="Sent" />
            <Bar dataKey="opened" fill="#82ca9d" name="Opened" />
            <Bar dataKey="clicked" fill="#ffc658" name="Clicked" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default OmniChannelDashboard

