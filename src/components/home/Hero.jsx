import React from "react";
import { Button } from "../shared/Reuse";
import { CiStar } from "react-icons/ci";
import heroImg from "../../assets/hero.svg";
import { GoDotFill } from "react-icons/go";
import { useThemeStyle } from "../../hooks/useThemeStyle";

const Hero = () => {
    const bgClass = useThemeStyle("bg-white", "bg-white/10");

  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-between my-16 items-center">
      <div className="w-[95%] mx-auto lg:w-[40%] md:w-[45%] text-center lg:text-left md:text-left mb-8">
        <p className="flex py-3 rounded-full text-orange border border-lightOrange items-center w-[100%] lg:w-[50%] md:w-[65%] mb-2 justify-center text-[14px]"><GoDotFill className="text-3xl"/> Your AI Art Therapy Studio</p>
        <h1 className="text-[51px] lg:text-[71px] md:text-[71px] font-medium">
          Nurture Your{" "}
          <span className="font-instrumentSerif italic"> Creativity</span>, One
          Feeling <span className="font-instrumentSerif italic">at a Time</span>
          .
        </h1>
        <p className="text-textGrey">
          Your mind is your canvas. Itura helps you navigate emotions, find
          clarity, and create with ease.
        </p>
        <div className="my-12">
          <Button className="bg-linear-to-r from-orange to-lightOrange rounded-xl text-white">
            Launch the app
          </Button>
          <Button className={`text-darkBg dark:text-white rounded-xl ml-3 px-4 border dark:border-white/10 shadow-lg ${bgClass}`}>Watch demo</Button>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-[27px] lg:text-[46px] md:text-[46px] flex flex-col">
            10k{" "}
            <span className="text-[8px] lg:text-[16px] md:text-[16px] text-textGrey">
              Daily prompts
            </span>
          </h2>
          <h2 className="text-[27px] lg:text-[46px] md:text-[46px] flex flex-col">
            5M+{" "}
            <span className="text-[8px] lg:text-[16px] md:text-[16px] text-textGrey">
              Downloads & counting
            </span>
          </h2>
          <div className="flex flex-col">
            <h2 className="text-[27px] lg:text-[46px] md:text-[46px] flex font-medium items-center">
              4.8
              <CiStar />
            </h2>
            <p className="text-[8px] lg:text-[16px] md:text-[16px] text-textGrey">
              Daily prompts
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto lg:mx-0 md:mx-0 lg:w-[40%] md:w-[45%] mb-8">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
