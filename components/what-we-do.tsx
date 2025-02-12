"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Cloud Computing and Edge Technologies",
    position: "top",
  },
  {
    title: "Advanced Data Analytics",
    position: "top-right",
  },
  {
    title: "Customized Technology Integration",
    position: "right",
  },
  {
    title: "Internet of Things (IoT) Solutions",
    position: "left",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    position: "bottom-left",
  },
]

const team = [
  {
    name: "John Smith",
    role: "Innovation",
    position: "Design Lead",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Johnson",
    role: "Innovation",
    position: "Design Lead",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Brown",
    role: "Innovation",
    position: "Design Lead",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      {/* What We Do Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-center mb-20">What We Do</h2>

        {/* Services Arc */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] mb-32">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500">
            {/* Arc paths */}
            <path d="M 200,400 Q 500,100 800,400" fill="none" stroke="rgba(251, 100, 21, 0.3)" strokeWidth="1" />

            {/* Service boxes connected to the arc */}
            <foreignObject x="400" y="50" width="200" height="80">
              <div className="bg-black/80 border border-zinc-800 p-4 text-center text-sm backdrop-blur-sm">
                Cloud Computing and Edge Technologies
              </div>
            </foreignObject>

            <foreignObject x="650" y="150" width="200" height="80">
              <div className="bg-black/80 border border-zinc-800 p-4 text-center text-sm backdrop-blur-sm">
                Advanced Data Analytics
              </div>
            </foreignObject>

            <foreignObject x="700" y="300" width="200" height="80">
              <div className="bg-black/80 border border-zinc-800 p-4 text-center text-sm backdrop-blur-sm">
                Customized Technology Integration
              </div>
            </foreignObject>

            <foreignObject x="100" y="300" width="200" height="80">
              <div className="bg-black/80 border border-zinc-800 p-4 text-center text-sm backdrop-blur-sm">
                Internet of Things (IoT) Solutions
              </div>
            </foreignObject>

            <foreignObject x="150" y="150" width="200" height="80">
              <div className="bg-black/80 border border-zinc-800 p-4 text-center text-sm backdrop-blur-sm">
                Artificial Intelligence and Machine Learning
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Team Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-medium text-center">
            The team behind it
            <div className="h-1 w-12 bg-[#FB6415] mx-auto mt-4" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-black border-zinc-800">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    height={100}
                    width={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <div className="text-white font-medium">{member.role}</div>
                  <div className="text-zinc-400 text-sm">{member.position}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

