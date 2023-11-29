import React from "react";
import { Button } from "@/components/ui/button";
import Links from "./ui/links";
import Image from "next/image";
import sailogo from "../public/small-logo.png";

export const Navbar = () => {
  return (
    <div className="flex w-full justify-between h-[80px] px-4 items-center shadow-md">
      <div>
        <Image src={sailogo} width={50} height={50} alt="Sai logo" />
      </div>
      <div>
        <Links />
      </div>
      <div>
        <Button>Contact us</Button>
      </div>
    </div>
  );
};
