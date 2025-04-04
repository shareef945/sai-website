import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import RequestFormDialog from "@/components/ui/request-dialog";
import { services } from "@/config/services";
import { motion } from "framer-motion";


const benefits = [
  {
    title: "Reliable Performance",
    description:
      "High-speed servers ensure fast load times and minimal downtime.",
  },
  {
    title: "Secure Hosting",
    description:
      "Regular backups, SSL encryption, and robust security measures.",
  },
  {
    title: "Scalable Plans",
    description:
      "Flexible pricing to accommodate startups, growing businesses, and enterprises.",
  },
  {
    title: "Professional Support",
    description:
      "Dedicated support team ready to assist you with any issues.",
  },
];

export default function WhyChooseUs() {

  
  return (
    <div className="w-full mt-0 text-white px-6 sm:px-12 md:px-[180px]">
      <div className="py-16 w-full">
        <div className="mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
          >
            Why Choose Us?
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                }}
                className="h-full"
              >
                <Card className="bg-zinc-800 border-zinc-700 h-full transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-white">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 260, 
                          damping: 20,
                          delay: 0.3 + index * 0.1 
                        }}
                      >
                        <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                      </motion.div>
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-[#898989]">
                    {benefit.description}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg sm:text-xl text-[#898989] mb-6 sm:mb-8">
              Take your business to the next level with our Managed CMS &
              Website Hosting Services. Get started today!
            </p>
            <motion.div 
              className="hidden justify-center md:flex items-center gap-x-6"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <RequestFormDialog
                services={services}
                isMobile={false}
                text="Contact Us"
              />
            </motion.div>
            <motion.div 
              className="flex justify-center items-center gap-4 md:hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <RequestFormDialog services={services} isMobile={true} text="Contact Us" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}