import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import projects from "@/config/projectsdetailed";
import Hero from "./components/hero";
import { GridBackground } from "@/components/GridBackground";

export interface Project {
  index: number;
  title: string;
  imageSrc: string;
  ID: string;
  "Production URL": string;
  Companies: { ID: string; Name: string }[];
  "Feature 5": string;
  "Staging URL": string;
  "Challenge 3": string;
  "Short Description": string;
  "Landing Media Url": string;
  "Solution 2": string;
  "Feature 2": string;
  "Feature 3 Thumbnail": string;
  Testimonial: string;
  "Feature 1": string;
  Owner: string[];
  Services: string[];
  Status: string;
  "Challenge 2": string;
  "Additional Media Urls": string;
  Deals: string[];
  Priority: string;
  "Feature 1 Thumbnail": string;
  "Feature 2 Thumbnail": string;
  "Solution 3": string;
  Dates: {
    start: string;
    end: string;
    time_zone: null;
  };
  "Result 1": string;
  "Technologies Used": string[];
  "Feature 5 Thumbnail": string;
  "Challenge 1": string;
  "Grid Media Urls": string;
  "Solution 1": string;
  "Result 3": string;
  "Long Description": string;
  "Result 2": string;
  Documents: any[];
  "Testimonial Name": string;
  "Feature 3": string;
  "Feature 4 Thumbnail": string;
  "Feature 4": string;
  Name: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find(
    (p: Project) => p.index.toString() === params.id
  );

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 h-[100vh] z-[1] overflow-hidden">
        <GridBackground size="lg" />
      </div>
      <div className="relative z-10">
        {/* <Hero project={project} /> */}
      </div>
    </div>
  );
}
