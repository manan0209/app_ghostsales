import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const customerData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  totalPurchases: 12,
  totalSpent: "$2,450",
  lastPurchase: "2023-07-15",
  preferredProducts: ["Product A", "Product B", "Product C"],
  interactions: [
    { date: "2023-07-10", type: "Email", description: "Responded to promotional offer" },
    { date: "2023-06-25", type: "Phone", description: "Inquired about new product line" },
    { date: "2023-06-15", type: "Website", description: "Viewed Product A details page" },
  ],
}

const CustomerView360: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">Customer Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-white">{customerData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white">{customerData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-white">{customerData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Purchases</p>
              <p className="text-white">{customerData.totalPurchases}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Spent</p>
              <p className="text-white">{customerData.totalSpent}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Last Purchase</p>
              <p className="text-white">{customerData.lastPurchase}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">Preferred Products</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {customerData.preferredProducts.map((product, index) => (
              <li key={index} className="text-white">
                {product}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">Recent Interactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Type</TableHead>
                <TableHead className="text-white">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customerData.interactions.map((interaction, index) => (
                <TableRow key={index}>
                  <TableCell className="text-white">{interaction.date}</TableCell>
                  <TableCell className="text-white">{interaction.type}</TableCell>
                  <TableCell className="text-white">{interaction.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default CustomerView360

