import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  body: string
  link: string
  imageSrc: string
  tags: string[]
  number: string
  date: string
  index: number
  quote?: string
}

export default function ProjectCard({
  title,
  body,
  link,
  imageSrc,
  tags,
  number,
  date,
  index,
  quote,
}: ProjectCardProps) {
  const isEven = index % 2 === 0

  const ImageSection = (
    <div className="relative group overflow-hidden">
      <div className="absolute top-8 left-8 z-10">
        <span className="text-4xl font-light text-white/90">{number}</span>
      </div>
      <Link href={link} className="block relative">
        <div className="relative h-[600px] overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-30" />
        </div>
        <div className="absolute bottom-16 left-16 right-16 text-white">
          <h2 className="text-3xl font-light mb-6 max-w-[500px] transition-transform duration-300 group-hover:translate-y-[-8px]">
            {quote || title}
          </h2>
          <button className="bg-black text-white px-8 py-3 text-sm hover:bg-orange-500 transition-colors duration-300">
            Join us
          </button>
        </div>
      </Link>
    </div>
  )

  const ContentSection = (
    <div className="bg-zinc-900 p-8 flex flex-col justify-between group">
      <div>
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-8 self-start group"
        >
     
          
        </Link>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm text-zinc-400 px-3 py-1 bg-zinc-800 rounded-full transition-colors duration-300 hover:bg-orange-500 hover:text-white"
            >
              {tag}
            </span>
          ))}

<ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <h3 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-orange-500">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">{body}</p>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
      {isEven ? (
        <>
          {ImageSection}
          {ContentSection}
        </>
      ) : (
        <>
          {ContentSection}
          {ImageSection}
        </>
      )}
    </div>
  )
}

