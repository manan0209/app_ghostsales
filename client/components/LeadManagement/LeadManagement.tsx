"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Filters from "./Filters";
import LeadsTable from "./LeadsTable";
import AddLeadButton from "./AddLeadButton";
import AddLeadModal from "./AddLeadModal";
import LeadAnalytics from "./LeadAnalytics";
import ManageFieldsModal from "./ManageFieldsModal";
import AIInsights from "./AIInsights";
import AILeadDiscovery from "./AILeadDiscovery";
import { Button } from "@/components/ui/button";
import { useDashboard } from "../../contexts/DashboardContext";

interface CustomField {
  id: string;
  name: string;
  type: "text" | "dropdown" | "number";
}

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  assignedAgent: string;
  priority: "high" | "medium" | "low";
  score: number;
  source: string;
  customFields: Record<string, string | number>;
}

const LeadManagement: React.FC = () => {
  const { userRole } = useDashboard();
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);
  const [isManageFieldsModalOpen, setIsManageFieldsModalOpen] = useState(false);
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    // TODO: Implement API calls
    // Fetch leads from backend
    // const fetchLeads = async () => {
    //   try {
    //     const response = await fetch('/api/leads');
    //     const data = await response.json();
    //     setLeads(data);
    //   } catch (error) {
    //     console.error('Error fetching leads:', error);
    //   }
    // };

    // Fetch custom fields from backend
    // const fetchCustomFields = async () => {
    //   try {
    //     const response = await fetch('/api/custom-fields');
    //     const data = await response.json();
    //     setCustomFields(data);
    //   } catch (error) {
    //     console.error('Error fetching custom fields:', error);
    //   }
    // };

    // fetchLeads();
    // fetchCustomFields();

    // For now, we'll use mock data
    const mockLeads: Lead[] = [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        status: "New",
        assignedAgent: "Alice Smith",
        priority: "high",
        score: 85,
        source: "Website",
        customFields: {},
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "987-654-3210",
        status: "Contacted",
        assignedAgent: "Bob Johnson",
        priority: "medium",
        score: 72,
        source: "Referral",
        customFields: {},
      },
      {
        id: "3",
        name: "Mike Brown",
        email: "mike@example.com",
        phone: "456-789-0123",
        status: "Qualified",
        assignedAgent: "Charlie Davis",
        priority: "low",
        score: 63,
        source: "LinkedIn",
        customFields: {},
      },
    ];
    setLeads(mockLeads);

    const mockCustomFields: CustomField[] = [];
    setCustomFields(mockCustomFields);
  }, []);

  const handleAddLead = async (newLead: Omit<Lead, "id" | "score">) => {
    // TODO: Implement API call
    // try {
    //   const response = await fetch('/api/leads', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newLead),
    //   });
    //   const data = await response.json();
    //   setLeads((prevLeads) => [...prevLeads, data]);
    // } catch (error) {
    //   console.error('Error adding lead:', error);
    // }

    // For now, we'll just update the state locally
    const leadWithId = {
      ...newLead,
      id: Date.now().toString(),
      score: Math.floor(Math.random() * 100),
    };
    setLeads((prevLeads) => [...prevLeads, leadWithId]);
  };

  const handleSaveCustomFields = async (fields: CustomField[]) => {
    // TODO: Implement API call
    // try {
    //   const response = await fetch('/api/custom-fields', {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(fields),
    //   });
    //   const data = await response.json();
    //   setCustomFields(data);
    // } catch (error) {
    //   console.error('Error saving custom fields:', error);
    // }

    // For now, we'll just update the state locally
    setCustomFields(fields);
  };

  const handleResetFilters = () => {
    // Implement reset filters logic here
    console.log("Filters reset");
  };

  return (
    <div className="space-y-6">
      {(userRole === "admin" || userRole === "manager") && (
        <>
          <AIInsights leads={leads} />
          <LeadAnalytics leads={leads} />
          <AILeadDiscovery onLeadDiscovered={handleAddLead} />
        </>
      )}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Lead Management</h2>
        {userRole === "admin" && (
          <Button onClick={() => setIsManageFieldsModalOpen(true)}>
            Manage Fields
          </Button>
        )}
      </div>
      <Filters customFields={customFields} onReset={handleResetFilters} />
      <LeadsTable leads={leads} customFields={customFields} />
      <AddLeadButton onClick={() => setIsAddLeadModalOpen(true)} />
      <AddLeadModal
        isOpen={isAddLeadModalOpen}
        onClose={() => setIsAddLeadModalOpen(false)}
        customFields={customFields}
        onAddLead={handleAddLead}
      />
      {userRole === "admin" && (
        <ManageFieldsModal
          isOpen={isManageFieldsModalOpen}
          onClose={() => setIsManageFieldsModalOpen(false)}
          customFields={customFields}
          onSaveFields={handleSaveCustomFields}
        />
      )}
    </div>
  );
};

export default LeadManagement;
