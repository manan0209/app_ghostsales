"use client"
import type React from "react"
import { useDashboard } from "../contexts/DashboardContext"
import StatisticsCard from "./StatisticsCard"
import ActivityFeed from "./ActivityFeed"
import QuickActions from "./QuickActions"
import TeamPerformanceChart from "./TeamPerformanceChart"
import TopCampaignsTable from "./TopCampaignsTable"
import UpcomingTasks from "./UpcomingTasks"
import AssignedLeadsTable from "./AssignedLeadsTable"
import PersonalTaskList from "./PersonalTaskList"
import DailyProgressSummary from "./DailyProgressSummary"
import LeadManagement from "./LeadManagement/LeadManagement"
import PipelineManagement from "./PipelineManagement/PipelineManagement"
import CampaignManagement from "./CampaignManagement/CampaignManagement"
import UserManagement from "./UserManagement/UserManagement"
import Settings from "./Settings/Settings"
import AIAutomationDashboard from "./AIAutomation/AIAutomationDashboard"
import PerformanceMonitoring from "./PerformanceMonitoring/PerformanceMonitoring"
import TaskAutomationSettings from "./TaskAutomation/TaskAutomationSettings"
import FAQAndTraining from "./FAQAndTraining"
import Analytics from "./Analytics/Analytics"
import CustomerRetention from "./CustomerRetention/CustomerRetention"

const MainContent: React.FC = () => {
  const { activePage, userRole } = useDashboard()

  const renderDashboard = () => {
    switch (userRole) {
      case "admin":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <StatisticsCard />
            </div>
            <div className="col-span-1 md:col-span-2">
              <ActivityFeed />
            </div>
            <div className="col-span-1">
              <QuickActions />
            </div>
          </div>
        )
      case "manager":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <TeamPerformanceChart />
            </div>
            <div className="md:col-span-1">
              <UpcomingTasks />
            </div>
            <div className="md:col-span-3">
              <TopCampaignsTable />
            </div>
          </div>
        )
      case "agent":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <AssignedLeadsTable />
            </div>
            <div className="md:col-span-1">
              <PersonalTaskList />
            </div>
            <div className="md:col-span-3">
              <DailyProgressSummary />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
      </h2>
      {activePage === "dashboard" ? (
        renderDashboard()
      ) : activePage === "leads" ? (
        <LeadManagement />
      ) : activePage === "pipeline" ? (
        <PipelineManagement />
      ) : activePage === "campaigns" && (userRole === "admin" || userRole === "manager") ? (
        <CampaignManagement />
      ) : activePage === "customer-retention" ? (
        <CustomerRetention />
      ) : activePage === "users" && userRole === "admin" ? (
        <UserManagement />
      ) : activePage === "settings" ? (
        <Settings />
      ) : activePage === "ai-automation" && (userRole === "admin" || userRole === "manager") ? (
        <AIAutomationDashboard />
      ) : activePage === "performance" && (userRole === "admin" || userRole === "manager") ? (
        <PerformanceMonitoring />
      ) : activePage === "task-automation" && (userRole === "admin" || userRole === "manager") ? (
        <TaskAutomationSettings />
      ) : activePage === "faq" ? (
        <FAQAndTraining />
      ) : activePage === "analytics" ? (
        <Analytics />
      ) : (
        <p className="text-gray-300">You don't have permission to access this page.</p>
      )}
    </div>
  )
}

export default MainContent

