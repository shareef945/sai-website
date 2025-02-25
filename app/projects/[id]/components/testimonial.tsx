"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="bg-[#151515] py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#ffffff] text-4xl md:text-5xl font-normal text-center mb-16">Testimonial</h2>

        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <figure className="text-center mb-8">
            <blockquote className="text-[#ffffff] text-xl md:text-2xl lg:text-3xl italic mb-8">
              &ldquo;The redesigned Swift Transport platform has transformed how we operate. Passengers love the ease of
              use, and our team can now manage logistics with unmatched efficiency. A game-changer for public
              transit!&rdquo;
            </blockquote>
            <figcaption className="text-[#ffffff]/60 text-lg">— David R., CEO of Swift Transport</figcaption>
          </figure>

          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  activeIndex === index ? "bg-[#ea5c1c]" : "bg-[#898989]",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

