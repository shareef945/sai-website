"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  text: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative w-[18rem] h-[17.6875rem] border-[#ffffff0a] shrink-0 p-8">
      {/* Main background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top center, rgba(39, 39, 42, 0.95) 0%, rgba(24, 24, 27, 0.7) 40%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Top light bar - more visible now */}
      <div
        className="absolute inset-x-0 top-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, rgba(255, 255, 255, 0.15) 50%, transparent 95%)",
          boxShadow: "0 0 8px 1px rgba(255, 255, 255, 0.07)",
        }}
      />

      {/* Left edge light that fades quickly */}
      <div
        className="absolute left-0 top-0 w-[1px] h-[40px]"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent)",
          boxShadow: "0 0 8px 0px rgba(255, 255, 255, 0.03)",
        }}
      />

      {/* Right edge light that fades quickly */}
      <div
        className="absolute right-0 top-0 w-[1px] h-[40px]"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent)",
          boxShadow: "0 0 8px 0px rgba(255, 255, 255, 0.03)",
        }}
      />

      {/* Content */}
      <div className="relative">
        <div className="flex items-center gap-5">
          <Image
            width={45}
            height={45}
            src={testimonial.image || "/placeholder.svg?height=60&width=60"}
            alt=""
            className="h-[45px] w-[45px] rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-white">{testimonial.name}</h3>
            <p className="text-[12px] text-zinc-500">{testimonial.role}</p>
          </div>
        </div>
        <p className="mt-8 text-[12px] leading-[1.7] text-zinc-400">
        {testimonial.text}
        </p>
      </div>
    </div>
  )
}

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let startTime: number | null = null
    const duration = 100000 // 50 seconds for one complete scroll

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth
      const scrollPosition = ((progress % duration) / duration) * totalWidth

      scrollContainer.scrollLeft = scrollPosition

      // Reset when we reach the end
      if (progress >= duration) {
        startTime = timestamp
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="w-full md:px-[190px] px-[20px] ">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

