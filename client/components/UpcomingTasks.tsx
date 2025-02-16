import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const tasks = [
  { id: 1, title: "Review Q3 performance reports", dueDate: "2023-07-15" },
  { id: 2, title: "Prepare presentation for board meeting", dueDate: "2023-07-18" },
  { id: 3, title: "Conduct team performance evaluations", dueDate: "2023-07-22" },
  { id: 4, title: "Finalize budget for new marketing campaign", dueDate: "2023-07-25" },
]

const UpcomingTasks: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">{task.title}</p>
                <p className="text-xs text-gray-400">Due: {task.dueDate}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default UpcomingTasks

