"use client";
import type React from "react";
import { useState } from "react";
import CustomerView360 from "./CustomerView360";
import RetentionAlerts from "./RetentionAlerts";
import FeedbackSystem from "./FeedbackSystem";
import CustomerList from "./CustomerList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomerRetention: React.FC = () => {
  const [activeTab, setActiveTab] = useState("customers");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Customer Retention</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="360view">360° Customer View</TabsTrigger>
          <TabsTrigger value="alerts">Retention Alerts</TabsTrigger>
          <TabsTrigger value="feedback">Feedback System</TabsTrigger>
        </TabsList>
        <TabsContent value="customers">
          <CustomerList />
        </TabsContent>
        <TabsContent value="360view">
          <CustomerView360 />
        </TabsContent>
        <TabsContent value="alerts">
          <RetentionAlerts />
        </TabsContent>
        <TabsContent value="feedback">
          <FeedbackSystem />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerRetention;
