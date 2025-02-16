"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

type Page =
  | "dashboard"
  | "leads"
  | "pipeline"
  | "campaigns"
  | "users"
  | "settings"
  | "ai-automation"
  | "task-automation"
  | "performance"
  | "faq"
  | "customer-retention"
  | "analytics";
  export type Role = "admin" | "manager" | "agent"| null;


interface DashboardContextType {
  activePage: Page;
  setActivePage: (page: Page) => void;
  userRole: Role;
  setUserRole: (role: Role) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activePage, setActivePage] = useState<Page>("dashboard");
  const [userRole, setUserRole] = useState<Role>("admin");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <DashboardContext.Provider
      value={{ 
        activePage, 
        setActivePage, 
        userRole, 
        setUserRole, 
        isSidebarOpen, 
        setIsSidebarOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isCollapsed,
        setIsCollapsed
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
