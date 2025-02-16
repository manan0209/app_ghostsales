import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const leads = [
  { name: "John Smith", status: "New", nextFollowUp: "2023-07-15" },
  { name: "Sarah Johnson", status: "In Progress", nextFollowUp: "2023-07-16" },
  { name: "Michael Brown", status: "Qualified", nextFollowUp: "2023-07-18" },
  { name: "Emily Davis", status: "New", nextFollowUp: "2023-07-19" },
  { name: "David Wilson", status: "In Progress", nextFollowUp: "2023-07-20" },
]

const statusColors = {
  New: "bg-blue-500",
  "In Progress": "bg-yellow-500",
  Qualified: "bg-green-500",
}

const AssignedLeadsTable: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Assigned Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">Name</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
              <TableHead className="text-gray-300">Next Follow-up</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.name}>
                <TableCell className="font-medium text-white">{lead.name}</TableCell>
                <TableCell>
                  <Badge className={`${statusColors[lead.status as keyof typeof statusColors]} text-white`}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-300">{lead.nextFollowUp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default AssignedLeadsTable

