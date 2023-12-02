import { Navbar } from "@/components/main-nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Landing from "@/components/ui/landing";
import Services from "@/components/ui/services";
import Clients from "@/components/ui/clients";
import CustomerReviews from "@/components/ui/customer-reviews";
import Footer from "@/components/ui/footer";
import DevelopmentProcess from "@/components/ui/development-process";
import TechStack from "@/components/ui/tech-stack";
import RecentProjects from "@/components/ui/recent-projects";

export default function Home() {
  return (
    <>
      <Landing />
      <Services />
      <Clients />
      <CustomerReviews />
      <RecentProjects />
      <TechStack />
      <DevelopmentProcess />
      <Footer />
    </>
  );
}
