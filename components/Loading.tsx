import React from 'react';
import { GridBackground } from "@/components/GridBackground";
import { Button } from "@/components/ui/button";
import { RefreshCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Enhanced Loading Screen Component
export const EnhancedLoadingScreen = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="relative">
          {/* Orange spinning circle */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#ea5c1c]"></div>
          
          {/* Inner circle with gradient */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-gradient-to-br from-[#ea5c1c] to-[#ea5c1c]/30"></div>
        </div>
        <h2 className="mt-8 text-xl sm:text-2xl text-white font-medium">Loading Projects</h2>
        <p className="mt-2 text-[#898989] text-center max-w-md">
          Please wait while we fetch the latest projects from SAI Technology
        </p>
      </div>
    </>
  );
};

// Enhanced Error Screen Component
export const EnhancedErrorScreen = ({ errorMessage = "We couldn't load the projects at this time" }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-20 h-20 relative mb-6">
          {/* Error icon with orange border */}
          <div className="absolute inset-0 rounded-full border-2 border-[#ea5c1c]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#ea5c1c] text-4xl font-light">!</span>
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl text-white font-medium text-center">Something went wrong</h2>
        <p className="mt-3 text-[#898989] text-center max-w-md">
          {errorMessage}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            onClick={() => window.location.reload()}
            className="bg-[#202020] hover:bg-[#2a2a2a] text-white border-none"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            className="border-[#ffffff0a] text-black hover:bg-[#202020]"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};


export const ProjectsPageLoading = () => <EnhancedLoadingScreen />;

export const ProjectsPageError = ({ error }:any) => (
  <EnhancedErrorScreen errorMessage={`Error loading projects`} />
);

export const ProjectDetailLoading = () => (
  <EnhancedLoadingScreen />
);

export const ProjectDetailError = () => (
  <EnhancedErrorScreen errorMessage="We couldn't find the project you're looking for" />
);