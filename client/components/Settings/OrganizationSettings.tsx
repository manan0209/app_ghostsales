import type React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

const OrganizationSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="logo" className="text-white">
          Logo
        </Label>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <Upload className="text-gray-400" />
          </div>
          <Button variant="outline">Upload New Logo</Button>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="orgName" className="text-white">
          Organization Name
        </Label>
        <Input id="orgName" placeholder="Enter organization name" className="bg-gray-700 text-white" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subdomain" className="text-white">
          Subdomain
        </Label>
        <div className="flex items-center space-x-2">
          <Input id="subdomain" placeholder="Enter subdomain" className="bg-gray-700 text-white" />
          <span className="text-gray-400">.ghostsales.com</span>
        </div>
      </div>
      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
        Save Changes
      </Button>
    </div>
  )
}

export default OrganizationSettings

