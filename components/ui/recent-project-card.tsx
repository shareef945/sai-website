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
    <div className="flex flex-col sm:flex-row px-4 sm:px-10 lg:px-40 py-4 items-center sm:items-stretch">
      <div className="border flex flex-col sm:flex-row bg-white rounded-lg p-6 sm:p-12 gap-4 sm:gap-10 ">
        <div className="mb-4 sm:mb-0 w-full sm:w-1/3">
          <Image
            src={imageSrc}
            layout="responsive"
            width={700}
            height={475}
            alt="image"
            loading="eager"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow w-full sm:w-1/2">
          <div>
            <p className="text-3xl font-semibold text-[#741f28] mb-6">
              {title}
            </p>
            <p className="text-wrap mb-6 text-light text-gray-500">{body}</p>
          </div>
          <a className="text-right sm:text-left text-[#741f28]" href={link}>
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectCard;