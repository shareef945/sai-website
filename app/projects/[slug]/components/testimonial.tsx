interface ProjectProps {
    project: any
  }
  
  export default function ProjectTestimonial({ project }: ProjectProps) {
    return (
      <div className="w-full text-white ">
        <div className="py-16 md:py-24 w-full px-[435px]">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl italic mb-6">{project.testimonial}</blockquote>
            <cite className="text-neutral-400 not-italic">— {project.testimonialOwner}</cite>
          </div>
        </div>
      </div>
    )
  }
  
  