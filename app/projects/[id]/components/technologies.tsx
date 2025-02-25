"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function TechnologiesUsed() {
  const [activeTab, setActiveTab] = useState("Backend")

  return (
    <div className="bg-[#151515] py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#ffffff] text-4xl md:text-5xl font-normal text-center mb-16">Technologies Used</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-lg pb-2 relative",
                  activeTab === tab ? "text-[#ffffff]" : "text-[#6f6f6f] hover:text-[#ffffff]/80",
                )}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea5c1c]" />}
              </button>
            ))}
          </nav>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies[activeTab]?.map((tech, index) => (
            <div key={index} className="bg-[#191919] aspect-square p-12 rounded-sm flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  fill
                  className="object-contain filter grayscale opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const tabs = ["Backend", "Frontend", "Databases", "Cloud", "DevOps"]

const technologies = {
  Backend: [
    { name: "Node.js", logo: "/placeholder.svg?height=200&width=200&text=nodejs" },
    { name: "Express", logo: "/placeholder.svg?height=200&width=200&text=express" },
    { name: "Python", logo: "/placeholder.svg?height=200&width=200&text=python" },
  ],
  Frontend: [
    // Add frontend technologies here
  ],
  Databases: [
    // Add database technologies here
  ],
  Cloud: [
    // Add cloud technologies here
  ],
  DevOps: [
    // Add DevOps technologies here
  ],
}

