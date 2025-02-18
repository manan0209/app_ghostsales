import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Customer {
  id: string;
  name: string;
  email: string;
  riskLevel: "Low" | "Medium" | "High";
  lastPurchase: string;
  totalSpent: number;
}

interface CustomerProfileProps {
  customer: Customer;
  onClose: () => void;
}

const CustomerProfile: React.FC<CustomerProfileProps> = ({
  customer,
  onClose,
}) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>{customer.name}'s Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <p>Email: {customer.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Risk Level</h3>
            <p>{customer.riskLevel}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Purchase History</h3>
            <p>Last Purchase: {customer.lastPurchase}</p>
            <p>Total Spent: ${customer.totalSpent}</p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerProfile;
