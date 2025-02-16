import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Megaphone, UserPlus2 } from "lucide-react"

const QuickActions: React.FC = () => {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <UserPlus className="mr-2 h-4 w-4" /> Add Lead
        </Button>
        <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Megaphone className="mr-2 h-4 w-4" /> Create Campaign
        </Button>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <UserPlus2 className="mr-2 h-4 w-4" /> Invite User
        </Button>
      </CardContent>
    </Card>
  )
}

export default QuickActions

