"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const categories = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "databases", label: "Databases" },
  { id: "cloud", label: "Cloud" },
  { id: "devops", label: "DevOps" },
]

const techStacks = {
  backend: [
    {
      name: "Node.js",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Express",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Python",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Django",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Flask",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "NestJS",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
  ],
  frontend: [
    {
      name: "React",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Vue",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Angular",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Svelte",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "PostgreSQL",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "MySQL",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Redis",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
  ],
  cloud: [
    {
      name: "AWS",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "GCP",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Azure",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Vercel",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
  ],
  devops: [
    {
      name: "Docker",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Kubernetes",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "Jenkins",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
    {
      name: "GitLab",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%205.39.13%E2%80%AFPM-M5XGk7ZusK7NfGfMRKX2a6jsbeyykB.png",
    },
  ],
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("backend")

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr]">
          {/* Sidebar Navigation */}
          <nav className="space-y-2">
            <h2 className="text-2xl font-bold mb-6">Our Tech stack</h2>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-lg transition-colors",
                  activeCategory === category.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
                )}
              >
                {category.label}
              </button>
            ))}
          </nav>

          {/* Tech Stack Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          >
            {techStacks[activeCategory as keyof typeof techStacks].map((tech) => (
              <div
                key={tech.name}
                className="relative group bg-white/5 rounded-lg p-6 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center justify-center h-24">
                  <Image
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.name}
                    width={256}
                    height={256}
                    className="w-16 h-16 object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-center mt-4 text-sm text-white/80 group-hover:text-white">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

