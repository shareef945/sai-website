import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

export default function WebsiteCMSHosting() {
  return (
    <div className="min-h-screen bg-[#151515] text-white md:px-[180px]">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Website + CMS Hosting</h1>
          <p className="text-xl text-[#898989] max-w-3xl">
            Perfect for businesses looking for an all-in-one solution with both
            a website and a CMS for seamless content management.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Website & CMS Plans
          </motion.h2>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
                }}
                className="bg-[#191919] py-[30px] w-full h-[370px]"
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`min-w-[126px] inline-block h-[42px] ${
                    plan.name === "Enterprise Site"
                      ? "bg-[#ea5c1c]"
                      : "bg-[#3C3C3C]"
                  } pt-[10px] pr-[25px] pb-[10px] pl-[25px] font-inter`}
                >
                  {plan.name}
                </motion.div>

                <div className="flex flex-col gap-y-[33px] relative top-[53px] px-[25px]">
                  <div className="flex flex-col gap-y-4">
                    <p className="text-base text-white font-inter">Features</p>
                    <p className="font-light text-[#898989] text-sm font-inter">
                      {plan.features}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <div>
                      <p className="text-[12px] text-white/40 font-inter">
                        Monthly Price (GHS)
                      </p>
                      <p className="font-medium text-sm font-inter">
                        {plan.monthlyPrice}
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] text-white/40 font-inter">
                        Setup Fee (One-Time, GHS)
                      </p>
                      <p className="font-inter">{plan.setupFee}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop View */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Table className="border border-[#ffffff0a]">
              <TableHeader>
                <TableRow className="bg-[#2d2d2d] border-b border-[#ffffff0a]">
                  <TableHead className="w-[200px] border-r border-[#ffffff0a] text-white">
                    Plan
                  </TableHead>
                  <TableHead className="border-r border-[#ffffff0a] text-white">
                    Features
                  </TableHead>
                  <TableHead className="text-right border-r border-[#ffffff0a] text-white">
                    Monthly Price (GHS)
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Setup Fee (One-Time, GHS)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border border-[#ffffff0a]">
                {plans.slice(0, 3).map((plan, index) => (
                  <motion.tr 
                    key={plan.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ backgroundColor: "rgba(30, 30, 30, 0.8)" }}
                    className="border bg-[#191919] border-[#ffffff0a] transition-all duration-300"
                  >
                    <TableCell className="font-medium border-r border-[#ffffff0a]">
                      {plan.name === "Enterprise Site" ? "Enterprise" : plan.name}
                    </TableCell>
                    <TableCell className="border-r border-[#ffffff0a]">
                      {plan.features}
                    </TableCell>
                    <TableCell className="text-right border-r border-[#ffffff0a]">
                      {plan.monthlyPrice}
                    </TableCell>
                    <TableCell className="text-right">{plan.setupFee}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Add-ons (Optional)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[11px] gap-x-2.5">
            <motion.div 
              className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2 h-[97px] flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                borderLeftWidth: "6px"
              }}
            >
              <h3 className="text-xl font-semibold mb-2">
                E-commerce Integration
              </h3>
              <p className="text-[#ea5c1c]">GHS 30,000 (one-time)</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
const plans = [
  {
    name: "Starter",
    features: "Static website, CMS integration, up to 5 pages",
    monthlyPrice: "GHS 250",
    setupFee: "GHS 1000",
  },
  {
    name: "Business",
    features: "Dynamic site, blog, SEO optimization, CMS integration, 5+ pages",
    monthlyPrice: "GHS 300",
    setupFee: "GHS 1000",
  },
  {
    name: "Enterprise Site",
    features: "Custom web app, API integration, advanced security",
    monthlyPrice: "Custom Quote",
    setupFee: "Custom Quote",
  },
  // {
  //   name: "Basic Web App",
  //   features: "Static website (Dockerized), CMS integration, up to 5 pages",
  //   monthlyPrice: "GHS 500",
  //   setupFee: "GHS 3000",
  // },
  // {
  //   name: "Business Web App",
  //   features: "Scalable web application with advanced features",
  //   monthlyPrice: "GHS 1000",
  //   setupFee: "GHS 5000",
  // },
];