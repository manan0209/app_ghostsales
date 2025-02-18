import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plug, Check, X } from "lucide-react";

interface IntegrationItem {
  name: string;
  description: string;
  status: "connected" | "not connected";
}

const integrations: IntegrationItem[] = [
  {
    name: "Salesforce",
    description: "CRM and sales platform integration",
    status: "connected",
  },
  {
    name: "Mailchimp",
    description: "Email marketing platform",
    status: "not connected",
  },
  {
    name: "Slack",
    description: "Team communication and notifications",
    status: "connected",
  },
  {
    name: "Zapier",
    description: "Workflow automation tool",
    status: "not connected",
  },
];

const Integration: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Integrations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.name}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Plug className="h-6 w-6 mr-2" />
                <CardTitle>{integration.name}</CardTitle>
              </div>
              <Badge
                variant={
                  integration.status === "connected" ? "default" : "secondary"
                }
              >
                {integration.status === "connected" ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <X className="h-4 w-4 mr-1" />
                )}
                {integration.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{integration.description}</p>
              <Button
                className="mt-4"
                variant={
                  integration.status === "connected" ? "destructive" : "default"
                }
              >
                {integration.status === "connected" ? "Disconnect" : "Connect"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Integration;
