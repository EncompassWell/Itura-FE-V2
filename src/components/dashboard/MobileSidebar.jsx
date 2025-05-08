import { IoSettingsOutline } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";
import { TbHelpSquare } from "react-icons/tb";
import { SiChatbot } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useThemeStyle } from "../../hooks/useThemeStyle";

const MobileSidebar = () => {
    const themeColor = useThemeStyle("bg-black/40 border-white/30", "bg-white/20 border-white/20")
  const activeStyle = {
    background: "#000",
    borderRadius: "10px",
    color: "#FFF",
    padding: "10px",
  };

  return (
    <div className={`w-[100%] text-white px-6 py-2 flex lg:hidden md:hidden border-t border items-center justify-between backdrop-blur-[20px] rounded-full text-center mb-8 ${themeColor}`}>
      <NavLink
        to="/dashboard"
        className="text-[24px] py-4 px-4"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        end
      >
        <TbSmartHome />
      </NavLink>
      <NavLink
        to="aichats"
        className="text-[20px] py-4 px-4"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <SiChatbot />
      </NavLink>
      <NavLink
        to="/"
        className="text-[20px] py-4 px-4"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        {" "}
        <IoLibrary />
      </NavLink>
      <NavLink
        to="/"
        className="text-[20px] py-4 px-4"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <IoSettingsOutline />
      </NavLink>
      <NavLink
        to="/"
        className="text-[20px] py-4 px-4"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <TbHelpSquare />
      </NavLink>
    </div>
  );
};

export default MobileSidebar;
