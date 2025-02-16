"use client"
import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDashboard } from "../../contexts/DashboardContext"
import PersonalSettings from "./PersonalSettings"
import OrganizationSettings from "./OrganizationSettings"
import Billing from "./Billing"
import Integrations from "./Integrations"

const Settings: React.FC = () => {
  const { userRole } = useDashboard()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Settings</h2>
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          {userRole === "admin" && (
            <>
              <TabsTrigger value="organization">Organization</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </>
          )}
        </TabsList>
        <TabsContent value="personal" className="mt-6">
          <PersonalSettings />
        </TabsContent>
        {userRole === "admin" && (
          <>
            <TabsContent value="organization" className="mt-6">
              <OrganizationSettings />
            </TabsContent>
            <TabsContent value="billing" className="mt-6">
              <Billing />
            </TabsContent>
            <TabsContent value="integrations" className="mt-6">
              <Integrations />
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  )
}

export default Settings

