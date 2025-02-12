import Image from "next/image"

export default function WhyChoose() {
    const partners = [
      { name: "Partner 1", logo: "/comp1.svg?height=60&width=120" },
      { name: "Partner 2", logo: "/comp2.svg?height=60&width=120" },
      { name: "Partner 3", logo: "/comp3.svg?height=60&width=120" },
      { name: "Partner 4", logo: "/comp4.svg?height=60&width=120" },
      { name: "Partner 5", logo: "/comp5.svg?height=60&width=120" },
      { name: "Partner 6", logo: "/comp6.svg?height=60&width=120" },
      { name: "Partner 7", logo: "/comp7.svg?height=60&width=120" },
      { name: "Partner 8", logo: "/comp8.svg?height=60&width=120" },
    ]
  
    return (
      <div className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          {/* Why Choose Section */}
          <div className="max-w-3xl mx-auto text-center mb-32">
            <h2 className="text-4xl font-medium mb-8">Why Choose SAI Technology?</h2>
            <div className="space-y-6 text-zinc-400">
              <p>
                With a focus on innovation and a commitment to excellence, we deliver scalable and sustainable solutions
                that drive success. Our team of experts works tirelessly to stay ahead of the curve, ensuring that our
                clients benefit from the latest advancements in technology.
              </p>
              <p>
                Join us on this journey to transform the future, one breakthrough at a time. At SAI Technology, we don&#39;t
                just adapt to change—we lead it.
              </p>
            </div>
          </div>
  
          {/* Partners Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-medium text-center mb-16">Our Clients and Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
              {partners.map((partner, index) => (
                <div key={index} className="w-full max-w-[160px] h-[60px] flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  