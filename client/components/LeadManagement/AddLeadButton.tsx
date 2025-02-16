import type React from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface AddLeadButtonProps {
  onClick: () => void
}

const AddLeadButton: React.FC<AddLeadButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="fixed bottom-8 right-8 rounded-full w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
      onClick={onClick}
    >
      <Plus className="h-6 w-6" />
    </Button>
  )
}

export default AddLeadButton

