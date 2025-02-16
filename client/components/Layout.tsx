"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { DashboardProvider, useDashboard } from "../contexts/DashboardContext";
import AIFAQAssistant from "./AIAssistant/AIFAQAssistant";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import { ThemeProvider } from "./ThemeProvider";
import TopNav from "./TopNav";
import LoginPage from "./auth/LoginPage";
import NoAccountPage from "./auth/NoAccountPage";
import { login, getUserProfile } from "../services/api";
import type { Role } from "../contexts/DashboardContext";

const LayoutContent: React.FC = () => {
  const { userRole, setUserRole } = useDashboard();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNoAccount, setShowNoAccount] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCollapsed } = useDashboard();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserProfile(token)
        .then((user) => {
          setIsAuthenticated(true);
          setUserRole(user.role as Role);
          localStorage.setItem("role", user.role);
        })
        .catch(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          setIsAuthenticated(false);
        });
    } else {
      const storedRole = localStorage.getItem("role") as Role | null;
      if (storedRole && ["admin", "user", "manager"].includes(storedRole)) {
        setUserRole(storedRole as Role);
      }
    }
  }, []);

  const handleLogin = async (empId: string, password: string) => {
    try {
      const response = await login(empId, password);
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.user.role);
      setIsAuthenticated(true);
      setUserRole(response.user.role as Role);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isAuthenticated) {
    return showNoAccount ? (
      <NoAccountPage onBackToLogin={() => setShowNoAccount(false)} />
    ) : (
      <LoginPage onLogin={handleLogin} onNoAccount={() => setShowNoAccount(true)} />
    );
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground md:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onLogout={handleLogout} onToggleSidebar={toggleMobileMenu} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-3 md:p-4">
          <MainContent />
        </main>
      </div>
      <AIFAQAssistant />
    </div>
  );
};

const Layout: React.FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DashboardProvider>
        <LayoutContent />
      </DashboardProvider>
    </ThemeProvider>
  );
};

export default Layout;
