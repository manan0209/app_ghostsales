import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NoAccountPageProps {
  onBackToLogin: () => void
}

const NoAccountPage: React.FC<NoAccountPageProps> = ({ onBackToLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>No Account?</CardTitle>
          <CardDescription>Information for new users</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            To get access to GhostSales, please contact your manager or administrator. They will create an account for
            you and provide your login credentials.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" onClick={onBackToLogin}>
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default NoAccountPage

