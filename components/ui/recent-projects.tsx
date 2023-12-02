import React from "react";
import RecentProjectCard from "./recent-project-card";

const RecentProjects = () => {
  return (
    <div className="h-full bg-[#BF212E] bg-opacity-5 border-t border-b border-[#741F26] pb-20">
      <div className="flex flex-col items-center gap-6 py-20">
        <div className="h-2 bg-[#741f28] w-20"></div>
        <p className="text-3xl font-extralight text-center">Our recent</p>
        <p className="font-bold text-[#741f28] text-center text-3xl">
          Projects
        </p>
      </div>
      <RecentProjectCard
        title="hello"
        body="iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh "
        link="/test"
        imageSrc="/customer-logos/mastercard.png"
      />
      <RecentProjectCard
        title="hello"
        body="iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh iueshrgfuiewhgf woieurfgh ew9rfh woeirufg wiuoefhrowieruf guh "
        link="/test"
        imageSrc="/customer-logos/mastercard.png"
      />
    </div>
  );
};

export default RecentProjects;
