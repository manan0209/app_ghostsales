import type React from "react";
import { Loader2 } from "lucide-react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto" />
        <h2 className="mt-4 text-2xl font-bold text-foreground">
          Initializing GhostSales for you...
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Hang tight! The ghosts are conjuring up something amazing.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;