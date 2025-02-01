"use client";

import React from "react";
import { Button } from "./button";

interface RequestDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDialog: React.FC<RequestDialogProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="fixed bottom-0 left-0 right-0 bg-white p-6 rounded-t-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#741F26]">
            Submit Request
          </h2>
          <button onClick={onClose} className="text-gray-500">
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">Contact form will go here</p>
          <Button
            onClick={onClose}
            className="w-full bg-[#E65722] hover:bg-[#E65722]/90 rounded-none"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
