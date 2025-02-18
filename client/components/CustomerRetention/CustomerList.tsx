"use client";
import type React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import CustomerProfile from "./CustomerProfile";

interface Customer {
  id: string;
  name: string;
  email: string;
  riskLevel: "Low" | "Medium" | "High";
  lastPurchase: string;
  totalSpent: number;
}

const customers: Customer[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    riskLevel: "Low",
    lastPurchase: "2023-07-15",
    totalSpent: 1250,
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    riskLevel: "Medium",
    lastPurchase: "2023-06-30",
    totalSpent: 750,
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    riskLevel: "High",
    lastPurchase: "2023-05-20",
    totalSpent: 500,
  },
  {
    id: "4",
    name: "Diana Ross",
    email: "diana@example.com",
    riskLevel: "Low",
    lastPurchase: "2023-07-10",
    totalSpent: 2000,
  },
];

const CustomerList: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const filteredCustomers = customers.filter(
    (customer) =>
      (filter === "all" || customer.riskLevel.toLowerCase() === filter) &&
      (customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Input
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by risk" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Risks</SelectItem>
            <SelectItem value="low">Low Risk</SelectItem>
            <SelectItem value="medium">Medium Risk</SelectItem>
            <SelectItem value="high">High Risk</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Risk Level</TableHead>
            <TableHead className="text-white">Last Purchase</TableHead>
            <TableHead className="text-white">Total Spent</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium text-white">
                {customer.name}
              </TableCell>
              <TableCell className="text-gray-300">{customer.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    customer.riskLevel === "Low"
                      ? "default"
                      : customer.riskLevel === "Medium"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {customer.riskLevel}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-300">
                {customer.lastPurchase}
              </TableCell>
              <TableCell className="text-gray-300">
                ${customer.totalSpent}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedCustomer && (
        <CustomerProfile
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </div>
  );
};

export default CustomerList;
