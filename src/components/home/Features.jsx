import React, { useContext } from "react";
import FeaturesCard from "./FeaturesCard";
import feat1 from "../../assets/img-1.svg";
import feat2 from "../../assets/img-2.svg";
import feat3 from "../../assets/img-3.svg";
import { useThemeStyle } from "../../hooks/useThemeStyle";
import { ThemeContext } from "../../context/ThemeProvider";
import OverviewCard from "./OverviewCard";

const Features = () => {
  const bgClass = useThemeStyle("bg-black text-white", "bg-white/10");
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <div className="lg:w-[95%] md:w-[95%] w-[90%] mx-auto my-18">
      <div className="flex justify-between flex-col lg:flex-row md:flex-row">
        <div
          className={`lg:w-[32%] md:w-[32%] w-[100%] rounded-xl border border-white/20 mb-4 ${bgClass}`}
        >
          <img
            src={feat1}
            alt=""
            className="w-[100%] h-[290px] object object-cover"
          />
          <h3 className="bg-gradient-to-r from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] text-[26px] lg:text-[28px] md:text-[28px] font-medium inline-block my-3 bg-clip-text px-3 text-transparent">
            A Doorway to Creative Clarity.
          </h3>
          <p className="text-[14px] px-3 mb-6">
            Helping you reflect, express, and find balance.
          </p>
        </div>
        <div
          className={`lg:w-[32%] md:w-[32%] w-[100%] rounded-xl border border-white/20 mb-4 ${bgClass}`}
        >
          <img
            src={feat2}
            alt=""
            className="w-[100%] h-[290px] object object-cover"
          />
          <h3 className="bg-gradient-to-r from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] text-[26px] lg:text-[28px] md:text-[28px] font-medium inline-block my-3 bg-clip-text px-3 text-transparent">
            A Safe Space to Talk & Reflect.
          </h3>
          <p className="text-[14px] px-3 mb-6">
            {" "}
            Chat with Itura to gain insights.
          </p>
        </div>
        <div
          className={`lg:w-[32%] md:w-[32%] w-[100%] rounded-xl border border-white/20 mb-4 ${bgClass}`}
        >
          <img
            src={feat3}
            alt=""
            className="w-[100%] h-[290px] object object-cover"
          />
          <h3 className="bg-gradient-to-r from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] text-[26px] lg:text-[28px] md:text-[28px] font-medium inline-block my-3 bg-clip-text px-3 text-transparent">
            Top Suggestions.
          </h3>
          <p className="text-[14px] px-3 mb-6">
            Helping you reflect, express, and find balance.
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row md:flex-row mt-4">
        <FeaturesCard />
        <OverviewCard />
      </div>
    </div>
  );
};

export default Features;
