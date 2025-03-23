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
      image: "/ebo.png",
      text: "SAI Technology has shown exceptional adaptability and professionalism, meeting demands with resilience and efficiency. Our collaboration has been productive and gratifying.",
    },
    {
      id: 2,
      name: "Edwin Poku",
      role: "CEO Furddle",
      image: "/edwin.jpg",
      text: "Exceptional web service with an intuitive interface and impressive features. Reliable customer support team that's always responsive to questions.",
    },
    {
      id: 3,
      name: "Denzel Boakye",
      role: "CEO CH-GH",
      image: "/denzel.jpg",
      text: "SAI Technology transformed our outdated website into a sleek, high-performing platform driving more engagement and conversions. Professional team that truly understood our vision.",
    },
    {
      id: 3,
      name: "Larissa Selormey",
      role: "CEO Boxbites",
      image: "/larissa.jpg",
      text: "SAI Technology delivered a stunning, functional website exceeding our expectations. Their technical expertise and communication made the process smooth, resulting in significant user engagement.",
    },
  ];

  // Duplicate testimonials for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]


  return (
    <div className="h-[41.1875rem] flex flex-col bg-[#151515] text-white gap-y-[103px] py-[103px]">
      <p className="md:text-[40px] text-[30px] text-center">Why customers love working with us</p>
      <TestimonialCarousel testimonials={duplicatedTestimonials} />
    </div>
  )
}
