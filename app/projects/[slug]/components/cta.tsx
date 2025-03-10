import Link from "next/link"

interface ProjectProps {
  project: any
}

export default function ProjectCTA({ project }: ProjectProps) {
  return (
    <div className="w-full text-white  ">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="max-w-3xl space-y-8">
          <p className="text-neutral-400 text-lg">
            At SAI Technology, we are pioneers in innovation, committed to transforming industries
            and shaping a smarter, more connected future. Our mission is to deliver cutting-edge
            solutions that empower businesses and individuals to achieve their full potential.
          </p>
          
          <p className="text-neutral-400 text-lg">
            Our Vision We envision a world where technology seamlessly integrates with everyday
            life, enhancing experiences and unlocking possibilities. Through our revolutionary SAI
            Technology, we aim to redefine boundaries, inspire progress, and create value for our
            clients and communities.
          </p>
          
          <div>
            <Link 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#e67e51] hover:bg-[#d06a40] text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Visit site
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
