import React, { useState, useEffect } from "react";
import ToggleButton from "../../components/shared/ToggleButton";
import { MdArrowUpward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useThemeStyle } from "../../hooks/useThemeStyle";
import { FiCamera } from "react-icons/fi";
import { CiImageOn } from "react-icons/ci";
import { FiFolderMinus } from "react-icons/fi";
import AICards from "../../components/dashboard/AiCards";

const Dashboard = () => {
  const navigate = useNavigate();
  const themeColor = useThemeStyle(
    "bg-black text-white border-white/25",
    "bg-white/15 border-white/20"
  );

  return (
    <main>
      <section className="flex py-6 justify-end px-6">
        <ToggleButton />
      </section>
      <section className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
        <h2 className="lg:text-[40px] md:text-[40px] text-[28px] text-center mt-24">
          Hi <span className="font-InstrumentSerif italic"> JoEdor</span>,
          What’s on your mind?
        </h2>
        <AICards />
      </section>
      <section
        className={`lg:w-[80%] md:w-[80%] w-[90%] mx-auto ${themeColor} rounded-3xl border`}
      >
        <div
          className={`flex items-center w-[100%] rounded-full border py-2 px-4  shadow-lg shadow-grey/20 ${themeColor}`}
          onClick={() => navigate("aichat")}
        >
            <div className="flex items-center">
          <FiCamera className="mr-2"/>
          <CiImageOn className="mr-2"/>
          <FiFolderMinus className="mr-2"/>
          </div>
          <input
            type="text"
            placeholder="Type Here"
            readOnly
            className="bg-transparent outline-0"
          />
          <button className={`ml-auto rounded-full p-2 border shadow-xl ${themeColor}`}>
            <MdArrowUpward className="text-[30px]" />
          </button>

          
        </div>
        <div className="my-6 w-[90%] mx-auto">
          <button className={`mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg ${themeColor}`}>
            Play calming sounds
          </button>
          <button className={`mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg ${themeColor}`}>
            Create art
          </button>
          <button className={`mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg ${themeColor}`}>
            Just want to talk
          </button>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
