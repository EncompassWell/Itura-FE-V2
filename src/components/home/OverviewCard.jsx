import React, { useContext } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useThemeStyle } from "../../hooks/useThemeStyle";
import { ThemeContext } from "../../context/ThemeProvider";

const OverviewCard = () => {
  const themeColor = useThemeStyle("bg-black text-white", "bg-white/10");
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <div
      className={`lg:w-[63%] md:w-[63%] w-[100%] border border-white/5 rounded-[21px] lg:pt-12 md:pt-10 pt-6 relative mb-4 ${themeColor}`}
    >
      <div className="lg:px-12 md:px-10 px-6">
        <h3 className="text-[22px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[28px] md:text-[28px] font-medium">
          Personalized Wellness Guidance
        </h3>
        <p className="text-[14px] text-white/60">
          Talk to Itura’s AI to explore your emotions and discover activities or
          insights that bring balance to your mind.
        </p>
      </div>
      <div className="bg-[#271E33] lg:p-10 md:p-8 p-6 rounded-tr-[21px] rounded-tl-[21px] rounded-br-[21px] border border-white/10 mt-6 lg:ml-12 md:ml-10 ml-6 flex flex-col">
        <div className="flex justify-between items-center my-3">
          <MdOutlineArrowBackIosNew />
          <p className="font-semibold">Itura</p>
          <FaRegEdit />
        </div>
        <div className="p-3 rounded-full bg-white/10 border border-white/10 ml-auto my-8 text-[12px]">
          <p>I am having a very bad day</p>
        </div>
        <div className="flex justify-between text-[10.5px] items-center">
          <div className="lg:w-[40px] md:w-[30px] w-[20px] lg:h-[40px] md:h-[30px] h-[20px] rounded-full bg-white mb-auto"></div>
          <div className="w-[90%]">
            <p>
              Oh no, I’m so sorry about that. Based on your response, I’ll like
              suggest a couple of sounds that might help you feel better
            </p>
            <ol className="mt-5">
              <li className="list-decimal">
                <span className="text-[13px] font-medium">Set Clear Goals</span>
                <br />
                <p className="my-4">
                  Focus on your needs: Do you want to speak, write or understand
                  the language fluently? Set a target time: For example, “I want
                  to understand basic conversation in 3 months.”
                </p>
              </li>
              <li className="list-decimal">
                <span className="text-[13px] font-medium">
                  Use Active Learning Techniques
                </span>
                <p className="mt-4">
                  Talk every day: Practice speaking even if it's just with
                  yourself or use apps like app to talk to a native speaker.
                  Write every day: Try writing a simple journal in the language.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {isDark && (
        <div className="w-[220px] h-[220px] bg-linear-to-b from-gradientYellow to-gradientRed blur-[200px] rounded-full absolute left-1/2 top-20 transform -translate-x-1/2 z-0"></div>
      )}
    </div>
  );
};

export default OverviewCard;
