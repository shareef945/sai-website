import { Navbar } from "@/components/main-nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Landing from "@/components/ui/landing";
import Services from "@/components/ui/services";
import Clients from "@/components/ui/clients";
import CustomerReviews from "@/components/ui/customer-reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
      <Clients />
      <CustomerReviews />
    </>
  );
}
