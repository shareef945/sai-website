import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProjectProps {
  project: {
    Name: string
    "Short Description": string
    "Landing Media Url": string
    Services: string[]
    Companies: { ID: string; Name: string }[]
    "Long Description": string
    "Production URL": string
  }
}

export default function Hero({ project }: ProjectProps) {
  return (
    <div className="bg-[#151515] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr,300px] gap-8 mb-12">
          <div>
            <h1 className="text-[#ffffff] text-5xl md:text-6xl lg:text-7xl font-normal mb-6">{project.Name}</h1>
            <p className="text-[#ffffff]/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              {project["Short Description"]}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-[#ffffff]/60 text-sm mb-1">Client</h3>
              <p className="text-[#ffffff]">{project.Companies?.[0]?.Name || "Swift Transport"}</p>
            </div>

            <div>
              <h3 className="text-[#ffffff]/60 text-sm mb-1">Industry</h3>
              <p className="text-[#ffffff]">Public Transit & Logistics</p>
            </div>

            <div>
              <h3 className="text-[#ffffff]/60 text-sm mb-1">Service</h3>
              <div className="flex flex-wrap gap-2">
                {project.Services.map((service, index) => (
                  <span key={index} className="text-[#ffffff]">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#ffffff]/60 text-sm mb-1">Location</h3>
              <p className="text-[#ffffff]">France</p>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-[16/9] mb-12 rounded-lg overflow-hidden">
          <Image
            src={project["Landing Media Url"] || "/placeholder.svg?height=720&width=1280"}
            alt={project.Name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-3xl space-y-6 mb-8">
          <p className="text-[#ffffff]/80 text-lg leading-relaxed">
            At SAI Technology, we are pioneers in innovation, committed to transforming industries and shaping a
            smarter, more connected future. Our mission is to deliver cutting-edge solutions that empower businesses and
            individuals to achieve their full potential.
          </p>
          <p className="text-[#ffffff]/80 text-lg leading-relaxed">
            Our Vision We envision a world where technology seamlessly integrates with everyday life, enhancing
            experiences and unlocking possibilities. Through our revolutionary SAI Technology, we aim to redefine
            boundaries, inspire progress, and create value for our clients and communities.
          </p>
        </div>

        <Button asChild className="bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white px-8 py-2 rounded">
          <a href={project["Production URL"]} target="_blank" rel="noopener noreferrer">
            Visit site
          </a>
        </Button>
      </div>
    </div>
  )
}

