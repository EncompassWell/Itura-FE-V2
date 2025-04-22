import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { PiSunBold } from "react-icons/pi";
import { BsMoonStarsFill } from "react-icons/bs";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <div className="lg:ml-6 md:ml-6 ml-0">
      <button
        onClick={toggleTheme}
        className={`w-20 rounded-full flex items-center px-1 transition-all duration-300 
          ${isDark ? "bg-white justify-start" : "bg-[#4C4C4C] justify-end"}`}
      >
        {isDark ? (
          <span className="text-[#4C4C4C] text-xl p-2 rounded-full shadow-lg border border-[#4C4C4C]/20">
            <PiSunBold />
          </span>
        ) : (
          <span className="text-[#000] text-xl p-2 rounded-full shadow-lg shadow-[#4C4C4C] border border-white/20">
            <BsMoonStarsFill />
          </span>
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
