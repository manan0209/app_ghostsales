import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", actualSales: 4000, targetSales: 3500 },
  { name: "Feb", actualSales: 3000, targetSales: 3200 },
  { name: "Mar", actualSales: 5000, targetSales: 4500 },
  { name: "Apr", actualSales: 4500, targetSales: 4000 },
  { name: "May", actualSales: 4800, targetSales: 4200 },
  { name: "Jun", actualSales: 5200, targetSales: 4800 },
];

const SalesPerformanceChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="actualSales" fill="#8884d8" name="Actual Sales" />
            <Bar dataKey="targetSales" fill="#82ca9d" name="Target Sales" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SalesPerformanceChart;
