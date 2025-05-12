import React, { useContext } from "react";
import { useThemeStyle } from "../../hooks/useThemeStyle";
import Header from "../../components/home/Header";
import { ThemeContext } from "../../context/ThemeProvider";
import { NavLink } from "react-router-dom";
import markImg2 from "../../assets/mark.svg";
import markImg from "../../assets/marklogo.svg";

const Error = () => {
  const { theme } = useContext(ThemeContext);
  const bgClass = useThemeStyle("bg-black text-white", "bg-black/10 border-white/20");

  const isDark = theme === "dark";
  return (
    <main className="relative">
      <Header />
      {isDark && (
        <div className="w-[706px] h-[353px] bg-linear-to-b from-gradientYellow to-gradientRed blur-[315px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 -z-10"></div>
      )}
      <section className="w-[90%] lg:w-[80%] md:w-[80%] mx-auto lg:my-24 md:my-18 my-14">
        <div className="flex flex-col lg:flex-row md:flex-row">
          <div className="flex lg:flex-col md:flex-col flex-row justify-between items-center">
            <div
              className={`p-3 border  flex items-center  w-[50px] h-[45px] rounded-lg mb-auto mr-4 shadow-lg rotate-12 ${bgClass} my-auto`}
            >
              <img src={markImg} alt="" />
            </div>
            <div
              className={`p-3 border  flex items-center justify-center rounded-lg mr-4 shadow-lg -rotate-12 ${bgClass}`}
            >
              <p className="text-[14px]"> 😮‍💨Just take a breath</p>
            </div>
          </div>
          <h2 className="lg:text-[266px] md:text-[200px] text-[120px] lg:leading-52 md:leading-56 text-center">
            Oops.
          </h2>
          <div className="flex lg:flex-col md:flex-col flex-row justify-between items-center">
            <div
              className={`p-3 border  flex items-center justify-center rounded-lg mr-4 my-auto shadow-lg rotate-12 ${bgClass}`}
            >
              <p className="text-[14px]"> We're glad you're here🎉</p>
            </div>
            <div
              className={`p-3 border  flex items-center justify-center w-[50px] h-[45px] rounded-lg mt-auto mr-4 shadow-lg -rotate-12 ${bgClass}`}
            >
              <img src={markImg2} alt="" />
            </div>
          </div>
        </div>
        <div className="text-center my-10">
          <p className="text-[30px] font-medium lg:text-[40px] md:text-[40px]">
            This page is floating somewhere else.
          </p>
          <p className="font-instrumentSerif italic text-[24px] lg:text-[32px] md:text-[32px] lg:my-20 md:my-18 my-10">
            “But hey — getting a little lost can be part of the journey.”
          </p>
        </div>
        <div className="my-12 w-[100%] lg:w-[35%] md:w-[35%] mx-auto flex flex-col lg:flex-row md:flex-row justify-between">
          <NavLink className="bg-linear-to-r from-orange to-lightOrange rounded-xl text-center text-white p-3  w-[100%] lg:w-[45%] md:w-[45% mb-4">
            Go Back Home
          </NavLink>
          <button
            className={`p-3 rounded-xl px-4 border shadow-lg  w-[100%] lg:w-[52%] md:w-[52%] mb-4 ${bgClass}`}
          >
            Try a Guided Session
          </button>
        </div>
      </section>
    </main>
  );
};

export default Error;
