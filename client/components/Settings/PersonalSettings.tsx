import type React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const PersonalSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Name
        </Label>
        <Input id="name" placeholder="Enter your name" className="bg-gray-700 text-white" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input id="email" type="email" placeholder="Enter your email" className="bg-gray-700 text-white" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="theme" className="text-white">
          Theme Preference
        </Label>
        <Select>
          <SelectTrigger id="theme" className="bg-gray-700 text-white">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">
          Change Password
        </Label>
        <Input id="password" type="password" placeholder="Enter new password" className="bg-gray-700 text-white" />
      </div>
      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
        Save Changes
      </Button>
    </div>
  )
}

export default PersonalSettings

