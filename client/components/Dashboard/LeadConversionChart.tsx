import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", newLeads: 400, qualifiedLeads: 240, conversions: 100 },
  { name: "Feb", newLeads: 300, qualifiedLeads: 198, conversions: 80 },
  { name: "Mar", newLeads: 500, qualifiedLeads: 300, conversions: 150 },
  { name: "Apr", newLeads: 450, qualifiedLeads: 280, conversions: 120 },
  { name: "May", newLeads: 470, qualifiedLeads: 310, conversions: 140 },
  { name: "Jun", newLeads: 420, qualifiedLeads: 290, conversions: 135 },
];

const LeadConversionChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Conversion Funnel</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="newLeads"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="qualifiedLeads" stroke="#82ca9d" />
            <Line type="monotone" dataKey="conversions" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LeadConversionChart;
