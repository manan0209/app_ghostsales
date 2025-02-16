import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Wifi } from "lucide-react"

interface ServerStatusProps {
  uptime: number
  latency: number
}

const ServerStatus: React.FC<ServerStatusProps> = ({ uptime, latency }) => {
  return (
    <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white flex items-center">
          <Server className="mr-2 h-6 w-6 text-purple-400" />
          Server Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="relative">
            <svg className="w-32 h-32">
              <circle
                className="text-gray-700"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="56"
                cx="64"
                cy="64"
              />
              <circle
                className="text-purple-500 animate-pulse"
                strokeWidth="8"
                strokeDasharray={360}
                strokeDashoffset={360 - (360 * uptime) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="56"
                cx="64"
                cy="64"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
              {uptime}%
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-white">Latency</p>
            <div className="flex items-center justify-end">
              <Wifi className="mr-2 h-5 w-5 text-green-400" />
              <span className="text-2xl font-bold text-white">{latency} ms</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServerStatus

