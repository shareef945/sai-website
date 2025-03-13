import Image from "next/image"
import { getDirectusImageUrl } from "@/utils/directus"

interface ProjectProps {
  project: any
}

export default function ProjectGrid({ project }: ProjectProps) {
  const gridImages = [project.grid1, project.grid2, project.grid3, project.grid4]

  return (
    <div className="w-full text-white">
      <div className="w-full md:px-[180px] px-[20px] py-16 md:py-24">
        <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col">
          {/* Left column - both images shifted down */}
          <div className="space-y-8 md:mt-20">
            <div className="aspect-square relative animate-fadeIn">
              {gridImages[0] && (
                <Image
                  src={getDirectusImageUrl(gridImages[0]) || "/placeholder.svg"}
                  alt="Project image 1"
                  fill
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            <div className="aspect-square relative animate-fadeIn">
              {gridImages[2] && (
                <Image
                  src={getDirectusImageUrl(gridImages[2]) || "/placeholder.svg"}
                  alt="Project image 3"
                  fill
                  className="object-cover rounded-lg"
                />
              )}
            </div>
          </div>
          {/* Right column */}
          <div className="space-y-8 mt-8 md:mt-0">
            <div className="aspect-square relative animate-fadeIn">
              {gridImages[1] && (
                <Image
                  src={getDirectusImageUrl(gridImages[1]) || "/placeholder.svg"}
                  alt="Project image 2"
                  fill
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            <div className="aspect-square relative animate-fadeIn">
              {gridImages[3] && (
                <Image
                  src={getDirectusImageUrl(gridImages[3]) || "/placeholder.svg"}
                  alt="Project image 4"
                  fill
                  className="object-cover rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}