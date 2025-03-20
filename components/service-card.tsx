interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="group relative p-6 bg-[#1A1A1A] rounded-lg hover:bg-[#222222] transition-colors duration-300">
      <div className="space-y-4">
        <div className="text-[#E65722] w-12 h-12">{icon}</div>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-[#898989]">{description}</p>
      </div>
    </div>
  );
}
