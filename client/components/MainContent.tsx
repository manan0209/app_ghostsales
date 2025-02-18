"use client";
import type React from "react";
import { useDashboard } from "../contexts/DashboardContext";
import Dashboard from "./Dashboard/Dashboard";
import LeadManagement from "./LeadManagement/LeadManagement";
import PipelineManagement from "./PipelineManagement/PipelineManagement";
import CampaignManagement from "./CampaignManagement/CampaignManagement";
import CustomerRetention from "./CustomerRetention/CustomerRetention";
import Teams from "./Teams/Teams";
import UserManagement from "./UserManagement/UserManagement";
import AIAutomationDashboard from "./AIAutomation/AIAutomationDashboard";
import PerformanceMonitoring from "./PerformanceMonitoring/PerformanceMonitoring";
import TaskAutomationSettings from "./TaskAutomation/TaskAutomationSettings";
import FAQAndTraining from "./FAQAndTraining";
import Analytics from "./Analytics/Analytics";
import Settings from "./Settings/Settings";
import Calendar from "./Calendar/Calendar";
import Reports from "./Reports/Reports";
import Forecasting from "./Forecasting/Forecasting";
import Integration from "./Integration/Integration";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const MainContent: React.FC = () => {
  const { activePage, userRole } = useDashboard();

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "leads":
        return <LeadManagement />;
      case "pipeline":
        return <PipelineManagement />;
      case "campaigns":
        return userRole === "admin" || userRole === "manager" ? (
          <CampaignManagement />
        ) : null;
      case "customer-retention":
        return userRole === "admin" || userRole === "manager" ? (
          <CustomerRetention />
        ) : null;
      case "teams":
        return <Teams />;
      case "users":
        return userRole === "admin" ? <UserManagement /> : null;
      case "ai-automation":
        return userRole === "admin" || userRole === "manager" ? (
          <AIAutomationDashboard />
        ) : null;
      case "performance":
        return userRole === "admin" || userRole === "manager" ? (
          <PerformanceMonitoring />
        ) : null;
      case "task-automation":
        return userRole === "admin" || userRole === "manager" ? (
          <TaskAutomationSettings />
        ) : null;
      case "faq":
        return <FAQAndTraining />;
      case "analytics":
        return userRole === "admin" || userRole === "manager" ? (
          <Analytics />
        ) : null;
      case "settings":
        return <Settings />;
      case "calendar":
        return <Calendar />;
      case "reports":
        return <Reports />;
      case "forecasting":
        return userRole === "admin" || userRole === "manager" ? (
          <Forecasting />
        ) : null;
      case "integration":
        return userRole === "admin" ? <Integration /> : null;
      default:
        return (
          <p className="text-gray-300">
            You don't have permission to access this page.
          </p>
        );
    }
  };

  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
      </h2>
      {renderContent()}
    </div>
  );
};

export default MainContent;
