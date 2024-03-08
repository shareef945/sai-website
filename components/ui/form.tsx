"use client";
import React, { useEffect } from "react";

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: "144275476",
          formId: "2f11c841-9fa6-4564-b251-3cb844059057",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div className="w-full flex justify-center pb-20">
      <div className="w-1/2" id="hubspotForm"></div>
    </div>
  );
};

export default HubspotContactForm;
