import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
}

interface StaggeredGalleryProps {
  images?: GalleryImage[]
}

export default function StaggeredGallery({
  images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.38.30%E2%80%AFPM-2n8qFt8PGxWHwlHPfk2KXeBYCWiQC1.png",
      alt: "Tablet interface with hexagonal background",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.38.30%E2%80%AFPM-2n8qFt8PGxWHwlHPfk2KXeBYCWiQC1.png",
      alt: "Phone interface on white background",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.38.30%E2%80%AFPM-2n8qFt8PGxWHwlHPfk2KXeBYCWiQC1.png",
      alt: "City scene illustration",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.38.30%E2%80%AFPM-2n8qFt8PGxWHwlHPfk2KXeBYCWiQC1.png",
      alt: "Settings interface",
    },
  ],
}: StaggeredGalleryProps) {
  return (
    <div className="bg-black">
      <div className="mx-[180px] relative" style={{ height: "1147px" }}>
        {/* Left Column */}
        <div className="absolute left-0 flex flex-col gap-[85px]">
          <div className="relative w-[565px] h-[531px]">
            <Image
              src={images[0].src || "/placeholder.svg"}
              alt={images[0].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[565px] h-[531px]">
            <Image
              src={images[2].src || "/placeholder.svg"}
              alt={images[2].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="absolute right-0 flex flex-col gap-[85px]" style={{ top: "85px" }}>
          <div className="relative w-[565px] h-[531px]">
            <Image
              src={images[1].src || "/placeholder.svg"}
              alt={images[1].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[565px] h-[531px]">
            <Image
              src={images[3].src || "/placeholder.svg"}
              alt={images[3].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

