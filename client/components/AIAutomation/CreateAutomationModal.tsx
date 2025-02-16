import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

interface CreateAutomationModalProps {
  isOpen: boolean
  onClose: () => void
}

const CreateAutomationModal: React.FC<CreateAutomationModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Create New Automation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Automation Name</Label>
            <Input id="name" placeholder="Enter automation name" className="bg-gray-700 text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="trigger">Trigger</Label>
            <Select>
              <SelectTrigger id="trigger" className="bg-gray-700 text-white">
                <SelectValue placeholder="Select trigger" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-lead">New Lead</SelectItem>
                <SelectItem value="status-change">Status Change</SelectItem>
                <SelectItem value="score-change">Lead Score Change</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="action">Action</Label>
            <Select>
              <SelectTrigger id="action" className="bg-gray-700 text-white">
                <SelectValue placeholder="Select action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="send-email">Send Email</SelectItem>
                <SelectItem value="notify-manager">Notify Manager</SelectItem>
                <SelectItem value="update-status">Update Status</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Advanced Settings
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Label htmlFor="conditions">Conditions</Label>
              <Input id="conditions" placeholder="Enter conditions" className="bg-gray-700 text-white" />
              <Label htmlFor="filters">Filters</Label>
              <Input id="filters" placeholder="Enter filters" className="bg-gray-700 text-white" />
            </CollapsibleContent>
          </Collapsible>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Create Automation
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateAutomationModal

