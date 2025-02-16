import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface Task {
  id: number
  description: string
  completed: boolean
}

const initialTasks: Task[] = [
  { id: 1, description: "Follow up with John Smith", completed: false },
  { id: 2, description: "Prepare proposal for Sarah Johnson", completed: true },
  { id: 3, description: "Schedule demo with Michael Brown", completed: false },
  { id: 4, description: "Send additional information to Emily Davis", completed: false },
  { id: 5, description: "Update CRM with new lead details", completed: true },
]

const PersonalTaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Personal Task List</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center space-x-3">
              <Checkbox id={`task-${task.id}`} checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
              <label
                htmlFor={`task-${task.id}`}
                className={`text-sm ${task.completed ? "text-gray-500 line-through" : "text-white"}`}
              >
                {task.description}
              </label>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default PersonalTaskList

