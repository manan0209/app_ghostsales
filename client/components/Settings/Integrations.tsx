import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, BarChart2, Share2 } from "lucide-react"

const IntegrationCard: React.FC<{ title: string; description: string; icon: React.ReactNode; connected: boolean }> = ({
  title,
  description,
  icon,
  connected,
}) => (
  <Card className="bg-gray-700">
    <CardHeader>
      <CardTitle className="text-white flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
      <CardDescription className="text-gray-400">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button variant={connected ? "outline" : "default"} className={connected ? "text-green-500" : ""}>
        {connected ? "Connected" : "Connect"}
      </Button>
    </CardContent>
  </Card>
)

const Integrations: React.FC = () => {
  return (
    <div className="space-y-6">
      <IntegrationCard
        title="Email API"
        description="Integrate with your email service provider"
        icon={<Mail className="h-6 w-6" />}
        connected={true}
      />
      <IntegrationCard
        title="Analytics API"
        description="Connect to your analytics platform"
        icon={<BarChart2 className="h-6 w-6" />}
        connected={false}
      />
      <IntegrationCard
        title="Social Media API"
        description="Link your social media accounts"
        icon={<Share2 className="h-6 w-6" />}
        connected={false}
      />
    </div>
  )
}

export default Integrations

