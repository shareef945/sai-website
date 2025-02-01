"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  text: string
}

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ebo Bentell",
      role: "CEO Lead Array",
      image: "/placeholder.svg?height=60&width=60",
      text: "SAI Technology has demonstrated exceptional adaptability and professionalism in their collaboration with us. They consistently meet heightened demands with commendable resilience and efficiency. Our engagement has been notably productive and gratifying.",
    },
    {
      id: 2,
      name: "Ebo Bentell",
      role: "CTO Lead Array",
      image: "/placeholder.svg?height=60&width=60",
      text: "SAI Technology has demonstrated exceptional adaptability and professionalism in their collaboration with us. They consistently meet heightened demands with commendable resilience and efficiency. Our engagement has been notably productive and gratifying.",
    },
    {
      id: 3,
      name: "Ebo Bentell",
      role: "COO Lead Array",
      image: "/placeholder.svg?height=60&width=60",
      text: "SAI Technology has demonstrated exceptional adaptability and professionalism in their collaboration with us. They consistently meet heightened demands with commendable resilience and efficiency. Our engagement has been notably productive and gratifying.",
    },
  ]

  // Duplicate testimonials for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && scrollContainer) {
          scrollContainer.scrollLeft += 1
          
          // Reset scroll position when reaching the end
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
            scrollContainer.scrollLeft = 0
          }
        }
      }, 20)
    }

    startScroll()

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval)
      }
    }
  }, [isHovered])

  return (
    <div className="w-full bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-white font-medium text-center mb-16">
          Why customers love working with us
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[400px] bg-neutral-900/50 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{testimonial.name}</h3>
                    <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}