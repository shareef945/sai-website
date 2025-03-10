import { getDirectusImageUrl } from "@/utils/directus";
import Image from "next/image";

interface ProjectProps {
  project: any;
}

export default function ProjectHero({ project }: ProjectProps) {
  return (
    <div className="w-full px-[56px]  text-white border-b border-neutral-800">
      <div className="py-8 ">
        <Image
          src={getDirectusImageUrl(project.landingMedia) || "/placeholder.svg"}
          width={1200}
          height={545}
          alt="landingMedia"
          className="w-full aspect-[16/9]"
        />
      </div>
    </div>
  );
}
