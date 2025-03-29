"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TestimonialCard from "./testimonial-card";
import TestimonialCarousel from "./testimonial-card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ebo Bentell",
      role: "Lucid Array",
      image: "/ebo.png",
      text: "SAI Technology has shown exceptional adaptability and professionalism, meeting demands with resilience and efficiency. Our collaboration has been productive and gratifying.",
    },
    {
      id: 2,
      name: "Edwin Poku",
      role: "Furddle",
      image: "/edwin.jpg",
      text: "Exceptional web service with an intuitive interface and impressive features. Reliable customer support team that's always responsive to questions.",
    },
    {
      id: 3,
      name: "Denzel Boakye",
      role: "CH-GH",
      image: "/denzel.jpg",
      text: "SAI Technology transformed our outdated website into a sleek, high-performing platform driving more engagement and conversions. Professional team that truly understood our vision.",
    },
    {
      id: 3,
      name: "Larissa Selormey",
      role: "Boxbites",
      image: "/sai-black.jpg",
      text: "SAI Technology delivered a stunning, functional website exceeding our expectations. Their technical expertise and communication made the process smooth, resulting in significant user engagement.",
    },
    {
      id: 4,
      name: "Shareef Ali",
      role: "SAI Real Estate",
      image: "/sai-black.jpg",
      text: "Working with SAI Technology is always a seamless experience.",
    },
    {
      id: 5,
      name: "Emmanuel Ede",
      role: "Swift Transport",
      image: "/sai-black.jpg",
      text: "SAI Technology has been instrumental in helping Swift Transport enhance our platform with scalable and efficient solutions. Their expertise, professionalism, and innovative approach have significantly improved our operations and customer experience. We highly recommend",
    },
    {
      id: 6,
      name: "Joseph Rhule",
      role: "Techsgiving",
      image: "/sai-black.jpg",
      text: "Migrating our site to Webflow was a game-changer, and we couldn’t have done it without the incredible team behind the project. They took our vision and transformed it into a fast, modern, and easy-to-manage platform. Highly recommend!",
    },
    {
      id: 7,
      name: "Kenneth Nana Kofi Owusu",
      role: "Munchies",
      image: "/sai-black.jpg",
      text: "The data analytics platform transformed our operations, giving us real-time insights and automation that saved us hours of manual work. The custom reconciliation tools have made our financial tracking seamless, allowing us to focus on growth. This has been a game-changer for Munchies!",
    },
    {
      id: 8,
      name: "Abayomi Adeyemi",
      role: "Furddle",
      image: "/sai-black.jpg",
      text: "This platform has revolutionized how we manage our microfinance operations. Moving from Excel to a fully automated system has improved efficiency, accuracy, and customer satisfaction. With integrated payments and real-time tracking, we can now focus on growing our business with confidence.",
    },
  ];

  // Duplicate testimonials for seamless scrolling
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="h-[41.1875rem] flex flex-col bg-[#151515] text-white gap-y-[103px] py-[103px]">
      <p className="md:text-[40px] text-[30px] text-center">
        Why customers love working with us
      </p>
      <TestimonialCarousel testimonials={duplicatedTestimonials} />
    </div>
  );
}
