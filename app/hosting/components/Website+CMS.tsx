import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function WebsiteCMSHosting() {
  return (
    <div className="min-h-screen bg-[#151515] text-white md:px-[180px]">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Website + CMS Hosting</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Perfect for businesses looking for an all-in-one solution with both
            a website and a CMS for seamless content management.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Website & CMS Plans</h2>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-[#191919] py-[30px] w-full h-[370px]"
              >
                <div
                  className={`min-w-[126px] inline-block h-[42px] ${
                    plan.name === "Enterprise Site"
                      ? "bg-[#ea5c1c]"
                      : "bg-[#3C3C3C]"
                  } pt-[10px] pr-[25px] pb-[10px] pl-[25px] font-inter`}
                >
                  {plan.name}
                </div>

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
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#2d2d2d] ">
                  <TableHead className="w-[200px] text-white border-r">
                    Plan
                  </TableHead>
                  <TableHead className="border-r text-white">
                    Features
                  </TableHead>
                  <TableHead className="text-right  text-white border-r">
                    Monthly Price (GHS)
                  </TableHead>
                  <TableHead className="text-white text-right">
                    Setup Fee (One-Time, GHS)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border">
                <TableRow className="border">
                  <TableCell className="font-medium border-r">
                    Basic Site
                  </TableCell>
                  <TableCell className="border-r">
                    Static website (Dockerized), CMS integration, up to 5 pages
                  </TableCell>
                  <TableCell className="text-right border-r">GHS 125</TableCell>
                  <TableCell className="text-right">GHS 500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r">
                    Business Site
                  </TableCell>
                  <TableCell className="border-r">
                    Dynamic site, blog, SEO optimization, CMS integration, 5+
                    pages
                  </TableCell>
                  <TableCell className="text-right border-r">GHS 250</TableCell>
                  <TableCell className="text-right">GHS 1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r">
                    Enterprise Site
                  </TableCell>
                  <TableCell className="border-r">
                    Custom web app, API integration, advanced security
                  </TableCell>
                  <TableCell className="text-right border-r">
                    Custom Quote
                  </TableCell>
                  <TableCell className="text-right">Custom Quote</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r">
                    Basic Web App
                  </TableCell>
                  <TableCell className="border-r">
                    Custom-built web application
                  </TableCell>
                  <TableCell className="text-right border-r">GHS 500</TableCell>
                  <TableCell className="text-right">GHS 3000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r">
                    Business Web App
                  </TableCell>
                  <TableCell className="border-r">
                    Scalable web application with advanced features
                  </TableCell>
                  <TableCell className="text-right border-r">
                    GHS 1000
                  </TableCell>
                  <TableCell className="text-right">GHS 5000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">Add-ons (Optional)</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[11px] gap-x-2.5">
            <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2 h-[97px] flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">Extra Pages</h3>
              <p className="text-[#ea5c1c]">GHS 200/page</p>
            </div>

            <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2 h-[97px] flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">
                E-commerce Integration
              </h3>
              <p className="text-[#ea5c1c]">GHS 5,000+ (one-time)</p>
            </div>

            <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2 h-[97px] flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">
                Mobile App (Optional)
              </h3>
              <p className="text-[#ea5c1c]">GHS 15,000+ (one-time)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const plans = [
  {
    name: "Basic Site",
    features: "Static website (Dockerized), CMS integration, up to 5 pages",
    monthlyPrice: "GHS 125",
    setupFee: "GHS 1500",
  },
  {
    name: "Business Site",
    features: "Dynamic site, blog, SEO optimization, CMS integration, 5+ pages",
    monthlyPrice: "GHS 250",
    setupFee: "GHS 3000",
  },
  {
    name: "Enterprise Site",
    features: "Custom web app, API integration, advanced security",
    monthlyPrice: "Custom Quote",
    setupFee: "Custom Quote",
  },
  {
    name: "Basic Web App",
    features: "Static website (Dockerized), CMS integration, up to 5 pages",
    monthlyPrice: "GHS 500",
    setupFee: "GHS 3000",
  },
  {
    name: "Business Web App",
    features: "Scalable web application with advanced features",
    monthlyPrice: "GHS 1000",
    setupFee: "GHS 5000",
  },
];
