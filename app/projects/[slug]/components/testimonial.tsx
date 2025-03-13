interface ProjectProps {
  project: any
}

export default function ProjectTestimonial({ project }: ProjectProps) {
  return (
    <div className="w-full  text-white ">
      <div className="container mx-auto px-[435px] py-16 md:py-24 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Testimonial</h2>

        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-lg md:text-2xl italic text-neutral-400 mb-8">{project.testimonial}</blockquote>

          <cite className="text-neutral-500 not-italic block mb-12">— {project.testimonialOwner}</cite>

          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#e67e51]"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

