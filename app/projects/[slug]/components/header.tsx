interface ProjectProps {
  project: any
}

export default function ProjectHeader({ project }: ProjectProps) {
  return (
    <div className="w-full text-white">
      <div className="container mx-auto md:px-[180px] py-16 md:py-24 w-full">
        {/* Desktop view remains unchanged */}
        <div className="hidden md:grid md:grid-cols-[1fr_300px] gap-8">
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
                <span className="text-[12px] px-3 py-1.5 bg-[#202020]">{project.clientName}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-neutral-400 mb-2">Industry</h3>
              <div className="flex gap-2">
                <span className="text-[12px] px-3 py-1.5 bg-[#202020]">Public Transit & Logistics</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-neutral-400 mb-2">Service</h3>
              <div className="flex flex-wrap gap-2">
                {project.services?.map((service: string, index: number) => (
                  <span key={index} className="text-[12px] px-3 py-1.5 bg-[#202020]">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-neutral-400 mb-2">Location</h3>
              <div className="flex gap-2">
                <span className="text-[12px] px-3 py-1.5 bg-[#202020]">France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view that matches the screenshot */}
        <div className="md:hidden">
          <h1 className="text-[40px] font-bold leading-tight mb-6">{project.clientName}</h1>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-6">
            <div>
              <h3 className="text-sm text-neutral-400 mb-2">Client</h3>
              <span className="text-[12px] inline-block px-3 py-1.5 bg-[#202020]">{project.clientName}</span>
            </div>

            <div>
              <h3 className="text-sm text-neutral-400 mb-2">Industry</h3>
              <span className="text-[12px] inline-block px-3 py-1.5 bg-[#202020]">Public Transit & Logistics</span>
            </div>

            <div>
              <h3 className="text-sm text-neutral-400 mb-2">Service</h3>
              <div className="flex flex-wrap gap-2">
                {project.services?.map((service: string, index: number) => (
                  <span key={index} className="text-[12px] px-3 py-1.5 bg-[#202020]">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-neutral-400 mb-2">Location</h3>
              <span className="text-[12px] inline-block px-3 py-1.5 bg-[#202020]">France</span>
            </div>
          </div>
          
          <p className="text-[18px] text-neutral-400">
            SAI Technology has innovated public transit with a multifaceted platform that simplifies ticket purchases,
            vehicle management, and logistics coordination.
          </p>
        </div>
      </div>
    </div>
  )
}