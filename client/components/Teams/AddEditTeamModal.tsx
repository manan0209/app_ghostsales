"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Team {
  id: string;
  name: string;
  manager: string;
  members: number;
  performance: number;
}

interface AddEditTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (team: Omit<Team, "id">) => void;
  team?: Team | null;
}

const AddEditTeamModal: React.FC<AddEditTeamModalProps> = ({
  isOpen,
  onClose,
  onSave,
  team,
}) => {
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [members, setMembers] = useState("");

  useEffect(() => {
    if (team) {
      setName(team.name);
      setManager(team.manager);
      setMembers(team.members.toString());
    } else {
      setName("");
      setManager("");
      setMembers("");
    }
  }, [team]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      manager,
      members: Number.parseInt(members),
      performance: team ? team.performance : 0,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{team ? "Edit Team" : "Add New Team"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Team Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="manager">Manager</Label>
              <Input
                id="manager"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="members">Number of Members</Label>
              <Input
                id="members"
                type="number"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button type="submit">{team ? "Update" : "Add"} Team</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditTeamModal;
