import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const campaigns = [
  { name: "Summer Sale", engagementRate: "8.5%", revenue: "$12,500" },
  { name: "New Product Launch", engagementRate: "12.3%", revenue: "$28,900" },
  { name: "Customer Loyalty Program", engagementRate: "9.7%", revenue: "$15,200" },
  { name: "Holiday Special", engagementRate: "11.2%", revenue: "$22,600" },
  { name: "Referral Campaign", engagementRate: "7.8%", revenue: "$9,800" },
]

const TopCampaignsTable: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Top Campaigns</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">Name</TableHead>
              <TableHead className="text-gray-300">Engagement Rate</TableHead>
              <TableHead className="text-gray-300">Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.name}>
                <TableCell className="font-medium text-white">{campaign.name}</TableCell>
                <TableCell className="text-gray-300">{campaign.engagementRate}</TableCell>
                <TableCell className="text-gray-300">{campaign.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default TopCampaignsTable

