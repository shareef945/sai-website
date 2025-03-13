import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  body: string;
  link: string;
  imageSrc: string;
  tags: string[];
  number: string;
  date: string;
  index: number;
  quote?: string;
}
export default function ProjectCard({
  title,
  body,
  link,
  imageSrc,
  tags,
  number,
  index,
  quote,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  const ImageSection = (
    <div className="relative w-[46rem] h-[36.75rem]  bg-[#191919] overflow-hidden group">
      <div className="absolute top-8 left-8 z-10">
        <span className="text-4xl font-light text-white/90">{number} . </span>
      </div>
      <div className="h-full flex flex-col justify-end">
        <Link href={link} className="flex relative w-full h-[450px] items-end justify-end">
          <div>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
    </div>
  );

  const ContentSection = (
    <div className="w-[23.125rem] h-[36.75rem] bg-zinc-900 p-8 flex flex-col justify-between group">
      <div>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm text-zinc-400 px-3 py-1 bg-zinc-800 rounded-full transition-colors duration-300 hover:bg-orange-500 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-orange-500">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed">{body}</p>
      </div>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-x-[2rem]">
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
  );
}
