import { IoSettingsOutline } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { TbHelpSquare } from "react-icons/tb";
import { SiChatbot } from "react-icons/si";
import ravatarImg from "../../assets/ravatar.svg";
import { TbSmartHome } from "react-icons/tb";
import { useThemeStyle } from "../../hooks/useThemeStyle";

const Sidebar = () => {
  const themeColor = useThemeStyle("bg-black text-white border-black", "bg-white/15 border-white/20")

  const activeStyle = {
    background: "#FFFFFF26",
    borderRadius: "10px",
    color: "#FFF",
    width: "100%",
    padding: "20px",
  };

  return (
    <div className={`w-[20%] text-white p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col border-r border-white/10 overflow-scroll ${themeColor}`}>
      <NavLink to='/'><img src={logo} alt="logo" className="mb-20 w-[55px]" /></NavLink>
      <div className="flex items-center mb-10">
        <img src={ravatarImg} alt="" className="h-[41px] w-[41px]" />
        <p className="text-[12px] ml-3">
          Jo Edor <br />
          <span className="text-white/60">0xe12ewas.......</span>
        </p>
      </div>
      <NavLink
        to="/dashboard"
        className="text-[14px] flex items-center py-4 mb-6 px-4 font-medium"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        end
      >
        <TbSmartHome className="mr-2 text-2xl" />
        Dashboard
      </NavLink>
      <NavLink
        to="aichat"
        className="text-[14px] flex items-center py-4 mb-6 px-4 font-medium"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <SiChatbot className="mr-2 text-2xl" />
        AI Chat
      </NavLink>
      <NavLink
        to="library"
        className="text-[14px] flex items-center py-4 mb-6 px-4 font-medium"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <IoLibrary className="mr-2 text-2xl" />
        Library
      </NavLink>
      <div className="border-t border-b border-white/30 mb-10 mt-4 py-6">
        <NavLink
          to="library"
          className="text-[14px] flex items-center py-4 mb-6 px-4 font-medium"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <IoSettingsOutline className="mr-2 text-2xl" />
          Setting
        </NavLink>
        <NavLink
          to="library"
          className="text-[14px] flex items-center py-4 px-4 font-medium"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <TbHelpSquare className="mr-2 text-2xl" />
          Help
        </NavLink>
      </div>
      <div>
        <h2 className="lg:text-[24px] md:text-[24px] text-[18px] font-instrumentSerif italic">
          History
        </h2>
        <div className="my-4">
            <p className="font-medium text-[12px]">Music matching for mood</p>
            <p className="text-[10px]">Slow cool music for feeling very sad about my....</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
