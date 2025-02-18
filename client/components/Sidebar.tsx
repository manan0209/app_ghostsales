"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDashboard } from "../contexts/DashboardContext";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  GitBranch,
  Megaphone,
  UserCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  Bot,
  BarChart2,
  ClipboardList,
  Zap,
  HelpCircle,
  Menu,
  PieChart,
  X,
  UsersIcon,
  HeartHandshake,
  TrendingUp,
  Plug,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar: React.FC<{
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { activePage, setActivePage, userRole } = useDashboard();
  const isMobile = window.innerWidth < 768;
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileMenuOpen]);

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      page: "dashboard" as const,
      roles: ["admin", "manager", "agent"],
    },
    {
      name: "Leads",
      icon: Users,
      page: "leads" as const,
      roles: ["manager", "agent"],
    },
    {
      name: "Pipeline",
      icon: GitBranch,
      page: "pipeline" as const,
      roles: ["manager", "agent"],
    },
    {
      name: "Campaigns",
      icon: Megaphone,
      page: "campaigns" as const,
      roles: ["manager"],
    },
    {
      name: "Customer Retention",
      icon: HeartHandshake,
      page: "customer-retention" as const,
      roles: ["admin", "manager"],
    },
    {
      name: "Teams",
      icon: UsersIcon,
      page: "teams" as const,
      roles: ["admin", "manager", "agent"],
    },
    {
      name: "Users",
      icon: UserCircle,
      page: "users" as const,
      roles: ["admin"],
    },
    {
      name: "AI Automation",
      icon: Bot,
      page: "ai-automation" as const,
      roles: ["admin", "manager"],
    },
    {
      name: "Task Automation",
      icon: Zap,
      page: "task-automation" as const,
      roles: ["admin", "manager"],
    },
    {
      name: "Reports",
      icon: ClipboardList,
      page: "reports" as const,
      roles: ["admin", "manager"],
    },
    {
      name: "Performance",
      icon: BarChart2,
      page: "performance" as const,
      roles: ["admin", "manager"],
    },
    {
      name: "Analytics",
      icon: PieChart,
      page: "analytics" as const,
      roles: ["admin", "manager"],
    },
    {
      name: "Calendar",
      icon: CalendarCheck,
      page: "calendar" as const,
      roles: ["admin", "manager", "agent"],
    },
    {
      name: "Forecasting",
      icon: TrendingUp,
      page: "forecasting" as const,
      roles: ["admin", "manager"],
    },
    {
      name: "Integration",
      icon: Plug,
      page: "integration" as const,
      roles: ["admin"],
    },
    {
      name: "FAQ & Training",
      icon: HelpCircle,
      page: "faq" as const,
      roles: ["admin", "manager", "agent"],
    },
    {
      name: "Settings",
      icon: Settings,
      page: "settings" as const,
      roles: ["admin", "manager", "agent"],
    },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.aside
          className={`
            fixed md:sticky top-0 left-0 h-screen 
            bg-card/80 backdrop-blur-lg md:bg-card
            text-card-foreground 
            transition-all duration-300 ease-in-out 
            z-40 
            ${isCollapsed ? "w-14 md:w-16" : "w-64"}
            ${
              isMobile
                ? isMobileMenuOpen
                  ? "translate-x-0"
                  : "-translate-x-full"
                : "translate-x-0"
            }
            border-r
          `}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="p-4 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              {!isCollapsed && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-2xl font-bold truncate"
                >
                  GhostSales
                </motion.h1>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                  if (isMobile) {
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }
                }}
                className={`text-muted-foreground hover:text-foreground hover:bg-accent flex-shrink-0 ${
                  isCollapsed ? "w-full justify-center" : ""
                }`}
              >
                {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
              </Button>
            </div>

            <nav className="flex-grow">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  if (userRole && !item.roles.includes(userRole)) return null;
                  return (
                    <li key={item.name}>
                      <Button
                        variant={
                          activePage === item.page ? "secondary" : "ghost"
                        }
                        className={`w-full justify-start ${
                          isCollapsed ? "px-2" : "px-4"
                        }`}
                        onClick={() => {
                          setActivePage(item.page);
                          if (isMobile && !isCollapsed) {
                            setIsMobileMenuOpen(false);
                            setIsCollapsed(true);
                          }
                        }}
                      >
                        <item.icon
                          className={`h-4 w-4 ${!isCollapsed && "mr-2"}`}
                        />
                        {!isCollapsed && <span>{item.name}</span>}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </motion.aside>
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
