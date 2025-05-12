import React from "react";
import profile1 from "../../assets/profile1.svg";
import profile2 from "../../assets/profile2.svg";
import profile3 from "../../assets/profile3.svg";
import ravatarLogo from "../../assets/ravatar-logo.svg";
import { useThemeStyle } from "../../hooks/useThemeStyle";

const Ravatar = () => {
  const bgColor = useThemeStyle(
    "bg-white border-black/20",
    "bg-white/10 border-white/20"
  );

  return (
    <main className="w-[90%] lg:w-[80%] md:w-[80%] mx-auto mb-8">
      <div className="w-[100%] lg:w-[40%] md:w-[40%] mx-auto">
        <img
          src={ravatarLogo}
          alt="ravatar logo"
          className="w-[100%] object-cover h-[70px] object-center"
        />
        <p className="text-center font-[500] mt-2">Choose your Ravatar</p>
      </div>
      <div
        className={`flex justify-between items-center flex-col lg:flex-row md:flex-row border ${bgColor} py-4 lg:px-10 md:px-8 px-4 rounded-2xl mb-10 mt-18`}
      >
        <img src={profile2} alt="" className="mb-3" />
        <img src={profile1} alt="" className="mb-3" />
        <img src={profile3} alt="" className="mb-3" />
        <img src={profile2} alt="" className="mb-3" />
      </div>
    </main>
  );
};

export default Ravatar;
