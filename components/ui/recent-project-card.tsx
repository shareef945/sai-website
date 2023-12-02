import Image from "next/image";
import React from "react";

const RecentProjectCard = ({
  title,
  body,
  link,
  imageSrc,
}: {
  title: string;
  body: string;
  link: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row px-10 sm:px-40 py-4 items-center sm:items-stretch ">
      <div className="border flex bg-white rounded-lg p-12 gap-10">
        <div className="flex-shrink-0 mb-6 sm:mb-0 w-1/2 relative">
          <Image src={imageSrc} fill={true} alt="image" />
        </div>
        <div className="flex flex-col justify-between flex-grow w-1/2">
          <div>
            <p className="text-3xl font-semibold text-[#741f28] mb-6">
              {title}
            </p>
            <p className="text-wrap mb-6 text-light text-gray-500">{body}</p>
          </div>
          <a className="text-right sm:text-left text-[#741f28]" href={link}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectCard;
