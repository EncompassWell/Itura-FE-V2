import React from "react";
import { PiWaveformDuotone } from "react-icons/pi";
import { MdClose } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { TbSend2 } from "react-icons/tb";

const FeaturesCard = () => {
  return (
    <div className="lg:w-[35%] md:w-[35%] w-[100%]  bg-white rounded-[21px] lg:p-10 md:p-10 p-6 text-darkBg">
      <h3 className="text-[22px] lg:text-[28px] md:text-[28px] font-medium">Nurture Your Creativity</h3>
      <p className="text-[14px] text-black/60 mb-10">Chat with Itura to gain insights, and discover mindful tips</p>
      <div className="flex bg-[#EBE8F3] rounded-[26px] justify-between items-center py-3 px-6 -rotate-3">
        <div className="bg-[#391E83]/5 border rounded-lg border-[#391E83]/10 text-2xl p-3">
          <PiWaveformDuotone className="text-2xl animate-pulse"/>
        </div>
        <p className="flex flex-col text-[18px] lg:text-[21px] md:text-[21px] font-medium">
          Calming Music <span className="text-[#391E83]/60 font-normal flex items-center">Babykeem <GoDotFill /> 2.1 MB</span>
        </p>
        <MdClose className="text-2xl" />
      </div>
      <div className="my-4 rounded-[26px] p-6 bg-[#F5F4F9] border border-[#391E83]/10 -rotate-2">
      <div className="flex bg-[#EBE8F3] rounded-[26px] justify-between items-center py-3 px-6">
        <div className="bg-[#391E83]/5 border rounded-lg border-[#391E83]/10 text-2xl p-3">
          <PiWaveformDuotone className="text-2xl animate-pulse"/>
        </div>
        <p className="flex flex-col text-[18px] lg:text-[21px] md:text-[21px] font-medium">
          Calming Music <span className="text-[#391E83]/60 font-normal flex items-center">Babykeem <GoDotFill /> 2.1 MB</span>
        </p>
        <MdClose className="text-2xl" />
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-[18px] lg:text-[21px] md:text-[21px]">Press play, and enter a world of calmness</p>
        <div className="bg-[#391E83]/5 border rounded-full border-[#391E83]/10 text-2xl p-4 ml-2">
          <TbSend2 className="text-xl"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
