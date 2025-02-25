import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
  imageUrl: string
  isWide?: boolean
}

interface KeyFeaturesProps {
  features?: Feature[]
}

export default function KeyFeatures({ features = [
  {
    title: "Unified Dashboard",
    description: "A centralized interface for ticket booking, tracking, and fleet management.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.30.50%E2%80%AFPM-R4Qdxr4hy98ubGDQbSHkJGBvwctxKH.png",
    isWide: true
  },
  {
    title: "Quick Ticket Purchase",
    description: "Integrated one-click ticketing with secure payment options.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.30.50%E2%80%AFPM-R4Qdxr4hy98ubGDQbSHkJGBvwctxKH.png"
  },
  {
    title: "Real-Time Tracking",
    description: "Interactive maps displaying vehicle locations and estimated arrival times.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.30.50%E2%80%AFPM-R4Qdxr4hy98ubGDQbSHkJGBvwctxKH.png"
  },
  {
    title: "Customizable Tools",
    description: "Vehicle scheduling, maintenance tracking, and logistics planning tailored to operator needs.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.30.50%E2%80%AFPM-R4Qdxr4hy98ubGDQbSHkJGBvwctxKH.png"
  },
  {
    title: "Multi-Language Support",
    description: "Accessible to diverse user bases with support for multiple languages.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%204.30.50%E2%80%AFPM-R4Qdxr4hy98ubGDQbSHkJGBvwctxKH.png"
  }
] }: KeyFeaturesProps) {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="w-[1152px] mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Key Features</h2>
        <div className="grid grid-cols-3 gap-[21px]">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-zinc-900 border-zinc-800 overflow-hidden ${
                feature.isWide ? 'col-span-2' : ''
              }`}
              style={{
                width: feature.isWide ? '761px' : '370px',
                height: '370px'
              }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative flex-grow">
                  <Image
                    src={feature.imageUrl || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
