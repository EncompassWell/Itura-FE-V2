import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Button } from "../shared/Reuse";
import ToggleButton from "../shared/ToggleButton";
import { useThemeStyle } from "../../hooks/useThemeStyle";
import { Divide as Hamburger } from "hamburger-react";
import { ThemeContext } from "../../context/ThemeProvider";

const Header = () => {
  const bgClass = useThemeStyle("bg-black", "bg-white/5");
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="">
      <div className="lg:flex md:flex items-center lg:w-[60%] md:w-[80%] mx-auto hidden">
        <div
          className={`w-[100%] flex justify-between items-center  mx-auto  p-4 my-10 border border-white/20 rounded-[21px] text-white text-[14px] ${bgClass} `}
        >
          <img src={logo} alt="Itura logo" className="w-[70px]" />
          <nav>
            <NavLink to="" className="mr-4">
              Features
            </NavLink>
            <NavLink to="" className="mr-4">
              How it Works
            </NavLink>
            <NavLink to="" className="mr-4">
              Forum
            </NavLink>
            <NavLink to="" className="mr-4">
              Blog
            </NavLink>
            <NavLink to="">Contact</NavLink>
          </nav>
          <NavLink to='/dashboard' className="bg-linear-to-r from-orange to-lightOrange rounded-xl text-white p-3">
            Launch the app
          </NavLink>
        </div>
        <ToggleButton />
      </div>
      <div
        className={`flex items-center w-[90%] mx-auto lg:hidden md:hidden justify-between my-10 relative p-3 rounded-xl ${bgClass}`}
      >
        <img src={logo} alt="Itura logo" className="w-[70px]" />
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#FFF"
          direction="left"
        />
        {isOpen && (
          <div
            className={`p-8 py-12 h-[80vh] w-[100%] absolute top-18 left-0 text-white justify-center text-center z-50 flex flex-col items-center bg-black`}
          >
            <ToggleButton />

            <nav className="flex flex-col mt-10">
              <NavLink to="" className="mb-4">
                Features
              </NavLink>
              <NavLink to="" className="mb-4">
                How it Works
              </NavLink>
              <NavLink to="" className="mb-4">
                Forum
              </NavLink>
              <NavLink to="" className="mb-4">
                Blog
              </NavLink>
              <NavLink to="" className="mb-4">
                Contact
              </NavLink>
            </nav>
            <NavLink to='/dashboard' className="p-3 bg-linear-to-r from-orange to-lightOrange rounded-xl text-white">
              Launch the app
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
