"use client";
import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, MessageSquare, UserPlus, AlertTriangle } from "lucide-react";

interface Notification {
  id: string;
  type: "message" | "lead" | "alert" | "system";
  content: string;
  time: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "message",
    content: "New message from John Doe",
    time: "5 minutes ago",
  },
  {
    id: "2",
    type: "lead",
    content: "New lead assigned: ABC Corp",
    time: "1 hour ago",
  },
  {
    id: "3",
    type: "alert",
    content: "Meeting reminder: Team sync at 3 PM",
    time: "2 hours ago",
  },
  {
    id: "4",
    type: "system",
    content: "System maintenance scheduled for tonight",
    time: "1 day ago",
  },
];

const RecentNotifications: React.FC = () => {
  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-5 w-5 text-blue-400" />;
      case "lead":
        return <UserPlus className="h-5 w-5 text-green-400" />;
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case "system":
        return <Bell className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Recent Notifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-start space-x-3">
              {getIcon(notification.type)}
              <div>
                <p className="text-sm font-medium">{notification.content}</p>
                <p className="text-xs text-gray-400">{notification.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentNotifications;
