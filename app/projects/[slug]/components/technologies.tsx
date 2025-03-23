"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Define the types for our component
type Service = string
type Category = "Backend" | "Frontend" | "Database" | "Cloud" | "Devops"

interface Project {
  technologiesUsed?: string[]
}

interface ProjectTechnologiesProps {
  project: Project
}

// Map to store technology logos
const technologyLogos: Record<string, string> = {
  NestJS: "/tech-stack/nest.png",
  ReactJS: "/tech-stack/react.png",
  NextJS: "/tech-stack/nextjs.png",
  MongoDB: "/tech-stack/mongo.png",
  Docker: "/tech-stack/docker.png",
  Linux: "/tech-stack/linux.png",
  "Google Cloud Platform": "/tech-stack/googlecloud.png",
  Hetzner: "/tech-stack/digitalocean.png", // Using similar cloud provider image
  Vercel: "/tech-stack/vercel.png",
  Django: "/tech-stack/django.png",
  Express: "/tech-stack/express.png",
  Firebase: "/tech-stack/firebase.png",
  Flask: "/tech-stack/flask.png",
  GitHub: "/tech-stack/github.png",
  MySQL: "/tech-stack/mysql.png",
  Node: "/tech-stack/node.png",
  Python: "/tech-stack/python.png",
  Redis: "/tech-stack/redis.png",
  Supabase: "/tech-stack/supabase.png",
}

const TechCard = ({
  tech,
  index,
  shouldAnimate,
}: {
  tech: { name: string; image: string };
  index: number;
  shouldAnimate: boolean;
}) => {
  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative group bg-[#191919] border border-[#ffffff0a] border-opacity-60 p-4 md:p-6 transition-all duration-300 md:w-[173px] w-[104px] h-[104px] aspect-square md:h-[170px] flex items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <Image
          src={tech.image || "/placeholder.svg"}
          alt={tech.name}
          width={170}
          height={170}
          className="w-[9.0625rem] h-[6rem] object-contain grayscale"
        />
      </div>
    </motion.div>
  );
};

export default function ProjectTechnologies({ project }: ProjectTechnologiesProps) {
    const hasTechnologies = project.technologiesUsed && project.technologiesUsed.length > 0;
  
    // Initialize with empty object but with correct type
    const categorizedServices: Record<Category, string[]> = {
      Backend: [],
      Frontend: [],
      Database: [],
      Cloud: [],
      Devops: []
    };
    
    // Only populate if we have technologies
    if (hasTechnologies) {
      project.technologiesUsed!.forEach(service => {
        const [category, technology] = service.split(": ");
        if (category as Category) {
          if (!categorizedServices[category as Category]) {
            categorizedServices[category as Category] = [];
          }
          categorizedServices[category as Category].push(technology);
        }
      });
    }
  
    // Get available categories that actually have technologies
    const categories = Object.keys(categorizedServices)
      .filter(category => categorizedServices[category as Category].length > 0) as Category[];
    
    const hasCategories = categories.length > 0;
    
    // Initialize state BEFORE any conditional returns
    const [activeCategory, setActiveCategory] = useState<Category>(
      hasCategories ? categories[0] : "Backend"
    );
  
    // Check if we should render the component
    if (!hasTechnologies || !hasCategories) {
      return null;
    }
  
    // Prepare technologies to display with a maximum of 3 per row
    const activeTechnologies = categorizedServices[activeCategory] || [];
  
    // Function to create centered rows with max 3 items
    const createCenteredRows = (technologies: string[]) => {
      const rows = []
      for (let i = 0; i < technologies.length; i += 3) {
        const rowItems = technologies.slice(i, i + 3)
        rows.push(rowItems)
      }
      return rows
    }
  
    const centeredRows = createCenteredRows(activeTechnologies);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24 pt-[12rem]">
      <h2 className="text-[#ffffff] md:text-[50px] text-[30px] font-medium  text-center mb-16">Technologies Used</h2>

      {/* Category tabs */}
      <div className="flex justify-center mb-16 overflow-auto">
        <div className="flex space-x-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium pb-2 px-2 relative ${
                activeCategory === category ? "text-[#ffffff]" : "text-[#6f6f6f]"
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea5c1c]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Technology cards - now in centered rows */}
      <div className="flex flex-col items-center space-y-8">
        {centeredRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-8">
            {row.map((technology, techIndex) => (
              <TechCard
                key={technology}
                tech={{
                  name: technology,
                  image: technologyLogos[technology] || "/placeholder.svg"
                }}
                index={rowIndex * 3 + techIndex}
                shouldAnimate={true}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}