"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: Date;
  type: "meeting" | "task" | "reminder";
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Team Meeting",
      date: new Date(2023, 6, 15, 10, 0),
      type: "meeting",
    },
    {
      id: "2",
      title: "Follow up with client",
      date: new Date(2023, 6, 16, 14, 0),
      type: "task",
    },
    {
      id: "3",
      title: "Prepare presentation",
      date: new Date(2023, 6, 17, 9, 0),
      type: "task",
    },
    {
      id: "4",
      title: "Quarterly Review",
      date: new Date(2023, 6, 20, 11, 0),
      type: "meeting",
    },
  ]);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const dayEvents = events.filter(
        (event) =>
          event.date.getDate() === day &&
          event.date.getMonth() === currentDate.getMonth() &&
          event.date.getFullYear() === currentDate.getFullYear()
      );
      days.push(
        <div key={day} className="h-24 border border-gray-200 p-1">
          <div className="font-bold">{day}</div>
          {dayEvents.map((event) => (
            <div
              key={event.id}
              className={`text-xs p-1 mb-1 rounded ${
                event.type === "meeting"
                  ? "bg-blue-200 text-blue-800"
                  : event.type === "task"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {event.title}
            </div>
          ))}
        </div>
      );
    }
    return days;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Calendar</CardTitle>
          <div className="flex space-x-2">
            <Button onClick={prevMonth} variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button onClick={nextMonth} variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-bold">
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calendar;
