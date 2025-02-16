import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface AILeadDiscoveryProps {
  onLeadDiscovered: (lead: any) => void
}

const AILeadDiscovery: React.FC<AILeadDiscoveryProps> = ({ onLeadDiscovered }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = async () => {
    // Simulating AI-powered lead discovery
    // In a real implementation, this would call an AI service or API
    const discoveredLead = {
      name: `AI Discovered Lead for "${searchQuery}"`,
      email: `${searchQuery.toLowerCase().replace(/\s+/g, ".")}@example.com`,
      phone: "123-456-7890",
      status: "new",
      assignedAgent: "AI System",
      priority: "medium",
      source: "AI Discovery",
    }

    onLeadDiscovered(discoveredLead)
    setSearchQuery("")
  }

  return (
    <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white flex items-center">
          <Search className="mr-2 h-6 w-6 text-blue-400" />
          AI Lead Discovery
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter keywords, industry, or company name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSearch}>Discover Leads</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AILeadDiscovery

