export default function Stats() {
    const stats = [
      {
        value: "2016",
        label: "In the industry since",
      },
      {
        value: "$100M+",
        label: "Startup Business Raised",
      },
      {
        value: "300+",
        label: "Projects Completed",
      },
      {
        value: "300+",
        label: "Projects Completed",
      },
      {
        value: "300+",
        label: "Projects Completed",
      },
    ]
  
    return (
      <section className="relative  md:px-[180px] py-16 md:py-24 ">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-20"
          // style={{
          //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          //   backgroundSize: "40px 40px",
          // }}
        />
  
        <div className="relative container mx-auto px-4">
          <h2 className="text-white text-center text-3xl md:text-4xl font-medium mb-16">
            We&#39;ve been around for a long while
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="h-0.5 md:w-[206px]  w-full text-left mx-0 mb-6 bg-[#FF5533]" />
                <div className="text-white text-3xl md:text-4xl font-bold mb-2 text-left">{stat.value}</div>
                <div className="text-gray-400 text-left text-lg md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  