import type React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface FiltersProps {
  onReset: () => void
}

const Filters: React.FC<FiltersProps> = ({ onReset }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="status" className="text-white">
            Status
          </Label>
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="source" className="text-white">
            Source
          </Label>
          <Select>
            <SelectTrigger id="source">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-white">Priority</Label>
          <div className="flex items-center space-x-2">
            <Checkbox id="high-priority" />
            <label htmlFor="high-priority" className="text-sm text-white">
              High Priority
            </label>
          </div>
        </div>
      </div>
      <Button variant="outline" onClick={onReset}>
        Reset Filters
      </Button>
    </div>
  )
}

export default Filters

