// HostingHero.tsx
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HostingHero = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p 
        className="text-[#FFF] md:px-[180px] px-[20px] text-[40px] md:text-[70px] font-bold"
        variants={childVariants}
      >
        Managed CMS & Website Hosting Services
      </motion.p>
      <motion.p 
        className="text-[#898989] text-base md:text-lg mt-4 px-[20px] md:px-[180px]"
        variants={childVariants}
      >
        At SAI Technology, we offer reliable and scalable hosting solutions
        tailored to businesses of all sizes. Whether you need a managed CMS for
        your existing website or a complete website + CMS package, we have
        flexible plans to suit your needs. Our hosting is secure,
        high-performing, and backed by professional support to ensure your
        digital presence remains seamless.
      </motion.p>
      <motion.img
        className="w-full px-4 md:px-[56px] mt-6 md:mt-12"
        alt="Hosting services"
        src="/hosting.png"
        variants={imageVariants}
      />
    </motion.div>
  );
};

export default HostingHero;