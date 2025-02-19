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
    <div className="relative w-[18rem] h-[17.6875rem] shrink-0 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-8">
      {/* Glow effects */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-400/10 via-transparent to-transparent" />
      <div className="absolute -inset-[1px] -top-[1px] rounded-2xl bg-gradient-to-r from-zinc-400/25 via-zinc-400/10 to-transparent blur-[1px]" />

      {/* Content */}
      <div className="relative">
        <div className="flex items-center gap-4">
          <Image width={45} height={45} src={testimonial.image || "/placeholder.svg"} alt="" className="h-[2.8125rem] w-[2.8125rem] rounded-full object-cover" />
          <div>
            <h3 className="text-sm font-semibold text-white">{testimonial.name}</h3>
            <p className="text-zinc-400 text-[12px]">{testimonial.role}</p>
          </div>
        </div>
        <p className="mt-6 text-[12px] leading-relaxed text-zinc-300">{testimonial.text}</p>
      </div>
    </div>
  )
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let startTime: number | null = null
    const duration = 50000 // 50 seconds for one complete scroll

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
    <div className="w-full overflow-hidden  ">
      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

