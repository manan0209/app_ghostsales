"use client";
import type React from "react";
import { useDashboard } from "../../contexts/DashboardContext";
import StatisticsCard from "../StatisticsCard";
import ActivityFeed from "../ActivityFeed";
import QuickActions from "../QuickActions";
import TeamPerformanceChart from "../TeamPerformanceChart";
import TopCampaignsTable from "../TopCampaignsTable";
import UpcomingTasks from "../UpcomingTasks";
import AssignedLeadsTable from "../AssignedLeadsTable";
import PersonalTaskList from "../PersonalTaskList";
import DailyProgressSummary from "../DailyProgressSummary";
import RecentNotifications from "./RecentNotifications";
import LeadConversionChart from "./LeadConversionChart";
import SalesPerformanceChart from "./SalesPerformanceChart";

const Dashboard: React.FC = () => {
  const { userRole } = useDashboard();

  const renderAdminDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <StatisticsCard />
      </div>
      <div className="col-span-1 md:col-span-2">
        <SalesPerformanceChart />
      </div>
      <div className="col-span-1">
        <QuickActions />
      </div>
      <div className="col-span-1 md:col-span-2">
        <TeamPerformanceChart />
      </div>
      <div className="col-span-1">
        <RecentNotifications />
      </div>
      <div className="col-span-1 md:col-span-2">
        <LeadConversionChart />
      </div>
      <div className="col-span-1">
        <UpcomingTasks />
      </div>
      <div className="col-span-1 md:col-span-3">
        <TopCampaignsTable />
      </div>
      <div className="col-span-1 md:col-span-2">
        <ActivityFeed />
      </div>
      <div className="col-span-1">
        <DailyProgressSummary />
      </div>
    </div>
  );

  const renderManagerDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <TeamPerformanceChart />
      </div>
      <div className="md:col-span-1">
        <DailyProgressSummary />
      </div>
      <div className="md:col-span-3">
        <LeadConversionChart />
      </div>
      <div className="md:col-span-2">
        <TopCampaignsTable />
      </div>
      <div className="md:col-span-1">
        <UpcomingTasks />
      </div>
      <div className="md:col-span-2">
        <ActivityFeed />
      </div>
      <div className="md:col-span-1">
        <RecentNotifications />
      </div>
      <div className="md:col-span-3">
        <SalesPerformanceChart />
      </div>
      <div className="md:col-span-3">
        <QuickActions />
      </div>
    </div>
  );

  const renderAgentDashboard = () => (
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
      <div className="md:col-span-2">
        <LeadConversionChart />
      </div>
      <div className="md:col-span-1">
        <QuickActions />
      </div>
      <div className="md:col-span-2">
        <ActivityFeed />
      </div>
      <div className="md:col-span-1">
        <RecentNotifications />
      </div>
      <div className="md:col-span-3">
        <UpcomingTasks />
      </div>
    </div>
  );

  switch (userRole) {
    case "admin":
      return renderAdminDashboard();
    case "manager":
      return renderManagerDashboard();
    case "agent":
      return renderAgentDashboard();
    default:
      return <p>Invalid user role</p>;
  }
};

export default Dashboard;
