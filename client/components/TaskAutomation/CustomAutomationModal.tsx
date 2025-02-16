import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface CustomAutomationModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (automation: any) => void
}

const CustomAutomationModal: React.FC<CustomAutomationModalProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("")
  const [triggerEvent, setTriggerEvent] = useState("")
  const [action, setAction] = useState("")
  const [conditions, setConditions] = useState("")

  const handleSave = () => {
    onSave({ name, triggerEvent, action, conditions })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Create Custom Automation</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Automation Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="trigger">Trigger Event</Label>
            <Select onValueChange={setTriggerEvent}>
              <SelectTrigger id="trigger" className="bg-gray-700 text-white">
                <SelectValue placeholder="Select trigger event" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lead_added">Lead Added</SelectItem>
                <SelectItem value="campaign_launched">Campaign Launched</SelectItem>
                <SelectItem value="lead_status_changed">Lead Status Changed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="action">Action</Label>
            <Select onValueChange={setAction}>
              <SelectTrigger id="action" className="bg-gray-700 text-white">
                <SelectValue placeholder="Select action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="send_email">Send Email</SelectItem>
                <SelectItem value="update_lead_status">Update Lead Status</SelectItem>
                <SelectItem value="notify_team">Notify Team</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="conditions">Advanced Filters (Optional)</Label>
            <Textarea
              id="conditions"
              value={conditions}
              onChange={(e) => setConditions(e.target.value)}
              placeholder="Enter conditions for automation triggers"
              className="bg-gray-700 text-white"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Save Automation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CustomAutomationModal

