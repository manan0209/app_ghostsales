"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Edit2, UserX } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteUser } from "@/services/userManagement";

interface User {
  id: string;
  empId: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "agent" | "user";
  lastLogin?: string;
  status?: "Active" | "Inactive";
}

interface UsersTableProps {
  users: User[];
  refreshUsers: () => Promise<void>;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, refreshUsers }) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      refreshUsers();
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-white">Emp ID</TableHead>
          <TableHead className="text-white">Name</TableHead>
          <TableHead className="text-white">Email</TableHead>
          <TableHead className="text-white">Role</TableHead>
          <TableHead className="text-white">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium text-white">{user.empId}</TableCell>
            <TableCell className="font-medium text-white">{user.name}</TableCell>
            <TableCell className="text-gray-300">{user.email}</TableCell>
            <TableCell className="text-gray-300">{user.role}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-800 text-white">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <Edit2 className="mr-2 h-4 w-4" />
                    <span>Edit Role</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => handleDelete(user.id)}
                  >
                    <UserX className="mr-2 h-4 w-4" />
                    <span>
                      {user.status === "Active" ? "Deactivate" : "Activate"} User
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
