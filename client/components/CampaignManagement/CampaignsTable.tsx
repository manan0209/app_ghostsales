import type React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Campaign {
  id: string
  name: string
  targetAudience: string
  startDate: string
  endDate: string
  status: "Active" | "Completed"
}

const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Summer Sale",
    targetAudience: "All Customers",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    status: "Active",
  },
  {
    id: "2",
    name: "New Product Launch",
    targetAudience: "Tech Enthusiasts",
    startDate: "2023-07-15",
    endDate: "2023-09-15",
    status: "Active",
  },
  {
    id: "3",
    name: "Holiday Special",
    targetAudience: "Previous Customers",
    startDate: "2022-12-01",
    endDate: "2023-01-15",
    status: "Completed",
  },
  {
    id: "4",
    name: "Customer Loyalty Program",
    targetAudience: "Repeat Customers",
    startDate: "2023-05-01",
    endDate: "2023-12-31",
    status: "Active",
  },
]

const CampaignsTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-white">Campaign Name</TableHead>
          <TableHead className="text-white">Target Audience</TableHead>
          <TableHead className="text-white">Start Date</TableHead>
          <TableHead className="text-white">End Date</TableHead>
          <TableHead className="text-white">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaigns.map((campaign) => (
          <TableRow key={campaign.id}>
            <TableCell className="font-medium text-white">{campaign.name}</TableCell>
            <TableCell className="text-gray-300">{campaign.targetAudience}</TableCell>
            <TableCell className="text-gray-300">{campaign.startDate}</TableCell>
            <TableCell className="text-gray-300">{campaign.endDate}</TableCell>
            <TableCell>
              <Badge
                variant={campaign.status === "Active" ? "default" : "secondary"}
                className={campaign.status === "Active" ? "bg-green-500" : "bg-gray-500"}
              >
                {campaign.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CampaignsTable

