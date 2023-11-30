import React, { ReactElement } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactElement;
  headerColor: string;
  isSelected: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  headerColor,
  isSelected,
}) => {
  const cardStyles = {
    borderColor: headerColor !== "black" ? headerColor : "transparent",
    boxShadow: isSelected ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "",
    transform: isSelected ? "translateY(8px)" : "",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
  };

  return (
    <div
      className={`flex flex-col gap-4 items-left text-left p-4 m-2 rounded-lg bg-white shadow-sm w-[300px] ${
        isSelected ? "shadow-lg" : ""
      } border`}
      style={cardStyles}
    >
      <div className="icon-circle flex justify-center items-center">
        <div className="text-3xl">{icon}</div>
      </div>
      <p className="font-bold text-lg" style={{ color: headerColor }}>{title}</p>
      <p className="text-sm text-wrap text-justify text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;