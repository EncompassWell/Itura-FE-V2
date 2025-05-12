import React from "react";
import { NavLink } from "react-router-dom";
import profile1 from "../../assets/profile1.svg";
import profile2 from "../../assets/profile2.svg";
import profile3 from "../../assets/profile3.svg";
import { FaPlus } from "react-icons/fa6";
import { useThemeStyle } from "../../hooks/useThemeStyle";

const Settings = () => {
  const themeColor = useThemeStyle(
    "bg-black text-white",
    "bg-white/10 border-white/20"
  );
  const bgColor = useThemeStyle(
    "bg-white border-black/20",
    "bg-white/10 border-white/20"
  );

  return (
    <main className="w-[90%] lg:w-[80%] md:w-[80%] mx-auto my-8">
      <h2 className="font-medium text-[24px] lg:text-[32px] md:text-[32px]">
        Account Setting
      </h2>
      <div className="flex items-center lg:mt-12 md:mt-8 mt-6 mb-3">
        <p>Choose your Ravatar</p>
        <NavLink to="/dashboard/settings/ravatar" className="text-orange font-light ml-3">
          See more
        </NavLink>
      </div>
      <div
        className={`flex justify-between items-center flex-col lg:flex-row md:flex-row border ${bgColor} py-4 lg:px-10 md:px-8 px-4 rounded-2xl`}
      >
        <img src={profile2} alt="" className="mb-3" />
        <img src={profile1} alt="" className="mb-3" />
        <img src={profile3} alt="" className="mb-3" />
        <div
          className={`${bgColor} rounded-full w-[160px] border h-[160px] flex justify-center items-center`}
        >
          <FaPlus />
        </div>
      </div>
      <div className={`${themeColor} p-4 py-6 lg:p-8 md:p-6 rounded-2xl my-6`}>
        <p className="font-semibold">Account Profile</p>
        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-4">
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter a name"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
              X handle
            </label>
            <input
              type="text"
              placeholder="Enter your X handle"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-4">
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
             Email address
            </label>
            <input
              type="text"
              placeholder="Enter an email"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
             Instagram handle
            </label>
            <input
              type="text"
              placeholder="Enter your IG handle"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-4">
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
             Other profile
            </label>
            <input
              type="text"
              placeholder="Enter a medium, behance... profile"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
             LinkedIn handle
            </label>
            <input
              type="text"
              placeholder="Enter your linkedin handle"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[60%] md:w-[60%] my-4 mx-auto">
        <button className="bg-linear-to-r from-orange to-lightOrange rounded-xl text-white p-3 w-[100%]">Submit</button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
