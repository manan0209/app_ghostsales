import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const leadSourceData = [
  { name: "Website", value: 400 },
  { name: "Ads", value: 300 },
  { name: "Referral", value: 200 },
  { name: "Other", value: 100 },
]

const leadStatusData = [
  { name: "New", value: 200 },
  { name: "Contacted", value: 300 },
  { name: "Qualified", value: 100 },
  { name: "Closed", value: 50 },
]

const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"]

const LeadAnalytics: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-800 rounded-t-lg">
        <h3 className="text-xl font-semibold text-white">Lead Analytics</h3>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="bg-gray-800 border-t-0 rounded-t-none">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CardTitle className="mb-4 text-white">Lead Sources</CardTitle>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={leadSourceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {leadSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <CardTitle className="mb-4 text-white">Lead Status Distribution</CardTitle>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={leadStatusData}>
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none", borderRadius: "4px" }} />
                    <Bar dataKey="value">
                      {leadStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default LeadAnalytics

