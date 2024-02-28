import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./card";

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
  function ChevronRightIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    );
  }

  return (
    <Card className="w-full max-w-sm rounded-xl border">
      <Link href={link}>
        <Image
          alt="Neumorphism UI Kit Image"
          className="object-cover rounded-t-xl"
          height={200}
          width={500}
          src={imageSrc}
          loading="eager"
        />
      </Link>
      <div className="grid gap-4 p-6">
        <h3 className="text-lg font-bold text-[#741F26]">{title}</h3>
        <p className="text-sm leading-none text-gray-500">{tags.join(", ")}</p>
        <p className="text-sm leading-none">{body}</p>
        <div className="flex items-center gap-2">
          <Link
            className="text-sm font-medium flex items-center gap-1 text-[#741F26]"
            href={link}
          >
            View
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
