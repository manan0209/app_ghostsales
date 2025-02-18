"use client";
import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { useDashboard } from "../../contexts/DashboardContext";
import TeamDetails from "./TeamDetails";
import AddEditTeamModal from "./AddEditTeamModal";

interface Team {
  id: string;
  name: string;
  manager: string;
  members: number;
  performance: number;
}

const Teams: React.FC = () => {
  const { userRole } = useDashboard();
  const [teams, setTeams] = useState<Team[]>([
    {
      id: "1",
      name: "Sales Team A",
      manager: "John Doe",
      members: 5,
      performance: 85,
    },
    {
      id: "2",
      name: "Marketing Team",
      manager: "Jane Smith",
      members: 4,
      performance: 78,
    },
    {
      id: "3",
      name: "Customer Support",
      manager: "Mike Johnson",
      members: 6,
      performance: 92,
    },
  ]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);

  const addTeam = (newTeam: Omit<Team, "id">) => {
    const teamWithId = { ...newTeam, id: (teams.length + 1).toString() };
    setTeams([...teams, teamWithId]);
  };

  const editTeam = (updatedTeam: Team) => {
    setTeams(
      teams.map((team) => (team.id === updatedTeam.id ? updatedTeam : team))
    );
  };

  const deleteTeam = (id: string) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  const openAddEditModal = (team?: Team) => {
    setEditingTeam(team || null);
    setIsAddEditModalOpen(true);
  };

  const closeAddEditModal = () => {
    setEditingTeam(null);
    setIsAddEditModalOpen(false);
  };

  const renderTeamList = () => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Teams</CardTitle>
        {userRole === "admin" && (
          <Button onClick={() => openAddEditModal()}>
            <Plus className="mr-2 h-4 w-4" /> Add Team
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Name</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.id}>
                <TableCell>{team.name}</TableCell>
                <TableCell>{team.manager}</TableCell>
                <TableCell>{team.members}</TableCell>
                <TableCell>{team.performance}%</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedTeam(team)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  {userRole === "admin" && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openAddEditModal(team)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteTeam(team.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {userRole === "admin" && renderTeamList()}
      {userRole === "manager" && (
        <TeamDetails
          team={teams.find((team) => team.manager === "Jane Smith") || null}
        />
      )}
      {userRole === "agent" && (
        <TeamDetails
          team={teams.find((team) => team.name === "Sales Team A") || null}
          isAgentView={true}
        />
      )}
      {selectedTeam && (
        <TeamDetails
          team={selectedTeam}
          onClose={() => setSelectedTeam(null)}
        />
      )}
      <AddEditTeamModal
        isOpen={isAddEditModalOpen}
        onClose={closeAddEditModal}
        onSave={(team) => {
          if (editingTeam) {
            editTeam(team as Team);
          } else {
            addTeam(team);
          }
          closeAddEditModal();
        }}
        team={editingTeam}
      />
    </div>
  );
};

export default Teams;
