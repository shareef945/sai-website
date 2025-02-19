"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import TestimonialCard from "./testimonial-card"
import TestimonialCarousel from "./testimonial-card"

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


  return (
    <div className="h-[41.1875rem] flex flex-col bg-[#151515] text-white gap-y-[103px] py-[103px]">
      <p className="text-[40px] text-center">Why customers love working with us</p>
      <TestimonialCarousel testimonials={duplicatedTestimonials} />
    </div>
  )
}
