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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { name: "Jan", sales: 4000, leads: 2400 },
  { name: "Feb", sales: 3000, leads: 1398 },
  { name: "Mar", sales: 2000, leads: 9800 },
  { name: "Apr", sales: 2780, leads: 3908 },
  { name: "May", sales: 1890, leads: 4800 },
  { name: "Jun", sales: 2390, leads: 3800 },
];

const Forecasting: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Sales and Lead Forecasting</h2>
        <Select defaultValue="6months">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3months">Next 3 months</SelectItem>
            <SelectItem value="6months">Next 6 months</SelectItem>
            <SelectItem value="12months">Next 12 months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Forecast Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="leads"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$24,500</p>
            <p className="text-sm text-muted-foreground">
              Projected for next month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lead Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">187</p>
            <p className="text-sm text-muted-foreground">
              Projected for next month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Forecasting;
