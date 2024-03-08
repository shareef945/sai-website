"use client";
import React from "react";

const MailtoLink = () => {
  const scrollToForm = (e: any) => {
    e.preventDefault();
    const formElement = document.getElementById("hubspotForm");

    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <a onClick={scrollToForm}>Submit a request</a>;
};

export default MailtoLink;
