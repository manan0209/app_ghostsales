import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Team {
  id: string;
  name: string;
  manager: string;
  members: number;
  performance: number;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  performance: number;
}

interface TeamDetailsProps {
  team: Team | null;
  onClose?: () => void;
  isAgentView?: boolean;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({
  team,
  onClose,
  isAgentView = false,
}) => {
  if (!team) return null;

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Alice Johnson",
      role: "Sales Representative",
      performance: 88,
    },
    {
      id: "2",
      name: "Bob Smith",
      role: "Sales Representative",
      performance: 92,
    },
    {
      id: "3",
      name: "Charlie Brown",
      role: "Sales Representative",
      performance: 78,
    },
    {
      id: "4",
      name: "Diana Ross",
      role: "Sales Representative",
      performance: 85,
    },
  ];

  const performanceData = teamMembers.map((member) => ({
    name: member.name,
    performance: member.performance,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{team.name} Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Team Information</h3>
            <p>Manager: {team.manager}</p>
            <p>Members: {team.members}</p>
            <p>Overall Performance: {team.performance}%</p>
          </div>

          {!isAgentView && (
            <div>
              <h3 className="text-lg font-semibold">Team Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="performance" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold">Team Members</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  {!isAgentView && <TableHead>Performance</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    {!isAgentView && (
                      <TableCell>{member.performance}%</TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {isAgentView && (
            <div>
              <h3 className="text-lg font-semibold">Your Goals and Targets</h3>
              <p>Monthly Sales Target: $50,000</p>
              <p>Customer Satisfaction Score: 90%</p>
              <p>Lead Conversion Rate: 20%</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamDetails;
