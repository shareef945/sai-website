import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title,
  body,
  link,
  imageSrc,
  tags,
}: {
  title: string;
  body: string;
  link: string;
  imageSrc: string;
  tags: string[];
}) => {
  return (
    <div className="flex flex-col border rounded-lg border-[#741f28] w-full max-w-sm shadow-sm">
    <div className="relative w-full h-0 pb-[100%]">
      <Link href={link}>
          <Image src={imageSrc} alt="image" layout="fill" objectFit="cover" />
      </Link>
    </div>
    <div className="flex border-t flex-col p-4 gap-2 border-[#741f28] bg-[#BF212E] bg-opacity-5">
      <Link href={link}>
          <p className="text-[#741f28] text-xl font-semibold">{title}</p>
          <p className="text-light text-gray-500">{body}</p>
          <div className="text-light text-gray-500 text-xs flex gap-1">
            {tags.map((tag, index) => (
              <p key={index} className="py-1">
                {tag}
              </p>
            ))}
          </div>

      </Link>
    </div>
  </div>
  );
};

export default ProjectCard;
