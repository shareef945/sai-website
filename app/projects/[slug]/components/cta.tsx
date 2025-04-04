import Link from "next/link";

interface ProjectProps {
  project: any;
}

export default function ProjectCTA({ project }: ProjectProps) {
  return (
    <div className="w-full text-white  ">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="max-w-3xl space-y-8">
          <p className="text-neutral-400 text-lg">{project.longDescription}</p>

          {/* <p className="text-neutral-400 text-lg">
            Our Vision: We envision a world where technology seamlessly
            integrates with everyday life, enhancing experiences and unlocking
            possibilities. Through SAI Technology, we aim to redefine
            boundaries, inspire progress, and create value for our clients and
            communities.
          </p> */}

          <div>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-[183px] bg-[#ea5c1c] hover:bg-[#d06a40] text-white px-8 py-3 text-center rounded-md font-medium transition-colors"
            >
              Visit site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
