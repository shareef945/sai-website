"use client"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

interface BlogPostHeaderProps {
  date: string
  readTime: string
  title: string
  description: string
  author: {
    name: string
    avatar: string
  }
  featuredImage: string
  slug: string
  id: string
}

export function BlogPostHeader({
  date,
  readTime,
  title,
  description,
  author,
  featuredImage,
  slug,
  id,
}: BlogPostHeaderProps) {
  return (
    <Link href={`/stories/${id}`}>
      <motion.div
        className="w-full max-w-[72rem] grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2"
        whileHover={{
          scale: 1.03,
          transition: { type: "spring", stiffness: 300, damping: 10 },
        }}
      >
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#898989]">
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <motion.h1
            className="text-xl sm:text-2xl lg:text-[1.875rem] text-white font-medium tracking-tight"
            whileHover={{ color: "#FFA500" }}
          >
            {title}
          </motion.h1>

          <p className="text-base sm:text-lg font-normal text-[#898989]">{description}</p>

          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs sm:text-sm font-medium text-[#898989]">{author.name}</span>
          </div>
        </div>

        <motion.div className="relative aspect-[16/10] overflow-hidden rounded-lg" whileHover={{ scale: 1.05 }}>
          <Image src={featuredImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        </motion.div>
      </motion.div>
    </Link>
  )
}
