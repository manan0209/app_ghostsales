import type React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CustomField {
  id: string
  name: string
  type: "text" | "dropdown" | "number"
}

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  status: string
  assignedAgent: string
  priority: "high" | "medium" | "low"
  customFields: Record<string, string | number>
}

interface LeadsTableProps {
  leads: Lead[]
  customFields: CustomField[]
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads, customFields }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Lead Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Phone</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Assigned Agent</TableHead>
            {customFields.map((field) => (
              <TableHead key={field.id} className="text-white">
                {field.name}
                {field.type === "text" && <span className="ml-1 text-gray-400">🔤</span>}
                {field.type === "dropdown" && <span className="ml-1 text-gray-400">🔽</span>}
                {field.type === "number" && <span className="ml-1 text-gray-400">#️⃣</span>}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium text-white">
                {lead.name}
                {lead.priority === "high" && <Badge className="ml-2 bg-red-500 text-white">High Priority</Badge>}
              </TableCell>
              <TableCell className="text-gray-300">{lead.email}</TableCell>
              <TableCell className="text-gray-300">{lead.phone}</TableCell>
              <TableCell className="text-gray-300">{lead.status}</TableCell>
              <TableCell className="text-gray-300">{lead.assignedAgent}</TableCell>
              {customFields.map((field) => (
                <TableCell key={field.id} className="text-gray-300">
                  {lead.customFields[field.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 px-4">
        <Button variant="outline" size="sm">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default LeadsTable

