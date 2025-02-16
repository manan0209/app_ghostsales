import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

interface Feedback {
  id: string
  customerName: string
  message: string
  date: string
}

const feedbacks: Feedback[] = [
  { id: "1", customerName: "Alice Brown", message: "Great product, but could use more features.", date: "2023-07-15" },
  { id: "2", customerName: "Charlie Davis", message: "Customer support was very helpful!", date: "2023-07-14" },
  { id: "3", customerName: "Eva Green", message: "Having issues with the latest update.", date: "2023-07-13" },
]

const FeedbackSystem: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white flex items-center">
          <MessageSquare className="mr-2 h-5 w-5 text-blue-500" />
          Customer Feedback
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {feedbacks.map((feedback) => (
            <li key={feedback.id} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">{feedback.customerName}</span>
                <span className="text-gray-400 text-sm">{feedback.date}</span>
              </div>
              <p className="text-gray-300 text-sm">{feedback.message}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default FeedbackSystem

