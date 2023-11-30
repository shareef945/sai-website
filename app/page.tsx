import { Navbar } from "@/components/main-nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Landing from "@/components/ui/landing";
import Services from "@/components/ui/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
    </>
  );
}
