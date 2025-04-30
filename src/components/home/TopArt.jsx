import React from "react";
import Slider from "./Slider";
import markImg from "../../assets/marklogo.svg";
import usersImg from "../../assets/people.svg";
import { FaCircleArrowUp } from "react-icons/fa6";

const TopArt = () => {
  return (
    <div className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
      <Slider />
      <div className="flex flex-col justify-center items-center">
        <div className="flex py-3 rounded-full text-orange border border-lightOrange items-center w-[50%] lg:w-[10%] md:w-[15%] justify-center px-3">
          <div className="rounded-full bg-[#FFE1BE] p-1 flex items-center justify-center w-[30px] h-[30px] mr-4">
            <img src={markImg} alt="" className="w-[100%]" />
          </div>
          <p className="text-[16px] bg-gradient-to-b from-[#FF8900] to-[#FFBD70] inline-block text-transparent bg-clip-text lg:text-[20px] md:text-[20px] font-medium">
            {" "}
            Itura
          </p>
        </div>
        <h3 className="text-[40px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[70px] md:text-[70px] font-medium">
          Top Arts.
        </h3>
      </div>
      <div className="flex justify-between my-8">
        <div>
          <img src={usersImg} alt="" />
          <div className="flex items-center">
            <h2 className="text-[20px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[28px] md:text-[28px] font-medium">
              125M+{" "}
            </h2>
            <p className="text-[12px] font-normal text-white/60 mr-2">Users </p>
            <FaCircleArrowUp className="text-xs text-red-400 mb-auto" />
          </div>
        </div>
        <div>
          <h2 className="text-[30px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[46px] md:text-[46px] font-medium">
            60M+
          </h2>
          <p className="text-[20px] leading-3"> Artworks</p>
        </div>
      </div>
    </div>
  );
};

export default TopArt;
