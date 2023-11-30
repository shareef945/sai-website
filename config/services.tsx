import { CgWebsite } from "react-icons/cg";
import { AiOutlineMobile } from "react-icons/ai";
import { GrConnect } from "react-icons/gr";
import { SiSpeedtest } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";

export const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Crafting visually stunning and user-friendly websites tailored to your brand's needs. Utilizing the latest web technologies to build responsive, fast-loading, and SEO-optimized sites. Delivering a seamless web experience to engage and convert your target audience.",
    icon: <CgWebsite />,
  },
  {
    id: 2,
    title: "Mobile App Design & Development",
    description:
      "Creating intuitive and impactful mobile applications for iOS and Android platforms. Combining beautiful design with robust functionality to ensure a seamless user experience. Empowering your business with mobile solutions that drive growth and customer loyalty.",
    icon: <AiOutlineMobile />,
  },
  {
    id: 3,
    title: "API Development and Integration",
    description:
      "Developing scalable and secure APIs to extend the functionality of your digital products. Streamlining data exchange and system integration to enhance service offerings. Enabling seamless connectivity between your applications and third-party services.",
    icon: <GrConnect />,
  },
  {
    id: 4,
    title: "Software Testing and Quality Assurance",
    description:
      "Ensuring the highest quality software with comprehensive testing services. Implementing automated and manual testing strategies to identify and resolve issues. Delivering reliable and flawless software products that meet stringent quality standards.",
    icon: <SiSpeedtest />,
  },
  {
    id: 5,
    title: "Robotic Process Automation (RPA)",
    description:
      "Transforming business processes through automation to increase efficiency and reduce costs. Deploying RPA solutions to handle repetitive tasks, freeing up human talent for more strategic work. Enhancing accuracy and speed across various operations with smart automation.",
    icon: <FaRobot />,
  },
  {
    id: 6,
    title: "IT Consulting",
    description:
      "Providing expert IT consulting to optimize your technology strategy. Offering insights and solutions to drive innovation and improve business performance. Aligning IT initiatives with business goals to foster growth and competitive advantage.",
    icon: <IoManSharp />,
  },
];
