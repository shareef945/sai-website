"use client";
import React, { useState } from "react";
import { RequestDialog } from "./request-dialog";
import { Button } from "./button";

const MailtoLink = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDialogOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="text-base  font-medium text-white"
      >
        Submit a request
      </button>
      <RequestDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default MailtoLink;
