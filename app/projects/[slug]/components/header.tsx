interface ProjectProps {
    project: any
  }
  
  export default function ProjectHeader({ project }: ProjectProps) {
    return (
      <div className="w-full text-white">
        <div className="container mx-auto md:px-[180px] py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
            <div>
              <h1 className="text-[70px] font-bold leading-tight mb-6">{project.clientName}</h1>
              <p className="text-[18px] text-neutral-400 max-w-3xl">
                SAI Technology has innovated public transit with a multifaceted platform that simplifies ticket purchases,
                vehicle management, and logistics coordination.
              </p>
            </div>
  
            <div className="space-y-8 max-w-[198px]">
              <div>
                <h3 className="text-sm text-neutral-400 mb-2">Client</h3>
                <div className="flex gap-2">
                  <span className="text-[12px] px-3 py-1.5 bg-[#202020] ">{project.clientName}</span>
                </div>
              </div>
  
              <div>
                <h3 className="text-sm text-neutral-400 mb-2">Industry</h3>
                <div className="flex gap-2">
                  <span className="text-[12px] px-3 py-1.5 bg-[#202020] ">Public Transit & Logistics</span>
                </div>
              </div>
  
              <div>
                <h3 className="text-sm text-neutral-400 mb-2">Service</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services?.map((service: string, index: number) => (
                    <span key={index} className="text-[12px] px-3 py-1.5 bg-[#202020] ">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
  
              <div>
                <h3 className="text-sm text-neutral-400 mb-2">Location</h3>
                <div className="flex gap-2">
                  <span className="text-[12px] px-3 py-1.5 bg-[#202020] ">France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  