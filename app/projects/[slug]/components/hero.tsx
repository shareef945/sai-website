import { getDirectusImageUrl } from "@/utils/directus";
import Image from "next/image";

interface ProjectProps {
  project: any;
}

export default function ProjectHero({ project }: ProjectProps) {
  return (
    <div className="w-full md:px-[56px] px-[20px]  text-white border-b border-neutral-800">
      <div className="">
        <Image
          src={getDirectusImageUrl(project.landingMedia) || "/placeholder.svg"}
          width={1200}
          height={545}
          alt="landingMedia"
          className="w-full"
        />
      </div>
    </div>
  );
}
