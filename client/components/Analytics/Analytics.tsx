import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const salesData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 5000 },
  { month: "Apr", value: 4500 },
  { month: "May", value: 6000 },
  { month: "Jun", value: 5500 },
  { month: "Jul", value: 7000 },
  { month: "Aug", value: 6500 },
  { month: "Sep", value: 5800 },
  { month: "Oct", value: 6200 },
  { month: "Nov", value: 7500 },
  { month: "Dec", value: 8000 },
]

const leadData = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 180 },
  { month: "Mar", value: 250 },
  { month: "Apr", value: 220 },
  { month: "May", value: 300 },
  { month: "Jun", value: 280 },
  { month: "Jul", value: 350 },
  { month: "Aug", value: 330 },
  { month: "Sep", value: 290 },
  { month: "Oct", value: 310 },
  { month: "Nov", value: 380 },
  { month: "Dec", value: 400 },
]

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="sales">
        <TabsList>
          <TabsTrigger value="sales">Sales Analytics</TabsTrigger>
          <TabsTrigger value="leads">Lead Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="sales">
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leads">
          <Card>
            <CardHeader>
              <CardTitle>Lead Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={leadData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Analytics

