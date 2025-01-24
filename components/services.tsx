import { Laptop, Smartphone, Network, Target, Cpu, Headset } from "lucide-react"

export const services = [
  {
    title: "Web Design & Development",
    description: "Crafting visually stunning and user-friendly websites tailored to your brand's needs.",
    icon: <Laptop className="w-full h-full" />,
  },
  {
    title: "Mobile App Design & Development",
    description: "Creating intuitive and impactful mobile applications for iOS and Android platforms.",
    icon: <Smartphone className="w-full h-full" />,
  },
  {
    title: "API Development and Integration",
    description: "Developing scalable and secure APIs to extend the functionality of your digital products.",
    icon: <Network className="w-full h-full" />,
  },
  {
    title: "Software Testing and Quality Assurance",
    description: "Ensuring the highest quality through comprehensive testing services.",
    icon: <Target className="w-full h-full" />,
  },
  {
    title: "Robotic Process Automation (RPA)",
    description: "Streamlining operations through intelligent automation solutions.",
    icon: <Cpu className="w-full h-full" />,
  },
  {
    title: "IT Consulting",
    description: "Professional expert IT consulting to optimize your technology strategy.",
    icon: <Headset className="w-full h-full" />,
  },
]

