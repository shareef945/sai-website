import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CMSHostingPlans() {
  return (
    <div className="min-h-screen  text-white mt-32">
      <div className="container mx-auto md:px-[180px] py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-medium md:font-bold mb-4">
            CMS Hosting Plans
          </h1>
          <p className="md:text-xl textbase text-[#898989] text max-w-3xl">
            Ideal for businesses that already have a website but need a robust,
            managed CMS to update and manage their content efficiently.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">CMS Hosting Plans</h2>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-[#191919] py-[30px] w-full h-[370px]"
              >
                <div className="min-w-[126px] inline-block h-[42px] bg-[#3C3C3C] pt-[10px] pr-[25px] pb-[10px] pl-[25px] font-inter">
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
                <TableRow className="bg-[#2d2d2d]">
                  <TableHead className="w-[200px] border-r text-white">
                    Plan
                  </TableHead>
                  <TableHead className="border-r text-white">
                    Features
                  </TableHead>
                  <TableHead className="text-right border-r text-white">
                    Monthly Price (GHS)
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Setup Fee (One-Time, GHS)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border">
                <TableRow className="border">
                  <TableCell className="font-medium border-r">
                    Starter
                  </TableCell>
                  <TableCell className="border-r">
                    Hosting, setup, up to 5 users, 2GB storage, email support
                  </TableCell>
                  <TableCell className="text-right border-r">GHS 50</TableCell>
                  <TableCell className="text-right">GHS 500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r">
                    Business
                  </TableCell>
                  <TableCell className="border-r">
                    10 users, 5GB storage, backups, priority support
                  </TableCell>
                  <TableCell className="text-right border-r">GHS 150</TableCell>
                  <TableCell className="text-right">GHS 1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r">
                    Enterprise
                  </TableCell>
                  <TableCell className="border-r">
                    Unlimited users, 20GB+ storage, custom domain, integrations
                  </TableCell>
                  <TableCell className="text-right border-r">
                    Custom Quote
                  </TableCell>
                  <TableCell className="text-right">Custom Quote</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">Add-ons (Optional)</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[11px] gap-x-2.5">
            <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2 h-[97px] flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">
                Extra Storage (10GB)
              </h3>
              <p className="text-[#ea5c1c]">GHS 300/month</p>
            </div>

            <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2 h-[97px] flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">Additional Users</h3>
              <p className="text-[#ea5c1c]">GHS 50/user/month</p>
            </div>

            <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2 h-[97px] flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">API Integrations</h3>
              <p className="text-[#ea5c1c]">GHS 1,500+ (one-time)</p>
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
    name: "Basic Web App",
    features: "Static website (Dockerized), CMS integration, up to 5 pages",
    monthlyPrice: "GHS 500",
    setupFee: "GHS 3000",
  },
];
