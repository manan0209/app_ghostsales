import type React from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Billing: React.FC = () => {
  const billingHistory = [
    { date: "2023-07-01", description: "Monthly Subscription", amount: "$99.00" },
    { date: "2023-06-01", description: "Monthly Subscription", amount: "$99.00" },
    { date: "2023-05-01", description: "Monthly Subscription", amount: "$99.00" },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-2">Current Plan</h3>
        <p className="text-gray-300 mb-4">Professional Plan - $99/month</p>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          Change Plan
        </Button>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Billing History</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Description</TableHead>
              <TableHead className="text-white text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {billingHistory.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-gray-300">{item.date}</TableCell>
                <TableCell className="text-gray-300">{item.description}</TableCell>
                <TableCell className="text-gray-300 text-right">{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Billing

