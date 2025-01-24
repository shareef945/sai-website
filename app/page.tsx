import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";
import { services } from "@/config/services";
import MailtoLink from "@/components/ui/mailto";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import ServicesComponent from "@/components/ServiceComponent";

export default function Page() {
  return (
    <>
      <Hero />
      <Companies />
      <ServicesComponent />
    </>
  );
}
