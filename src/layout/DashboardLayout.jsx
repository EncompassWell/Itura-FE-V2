import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar';
import MobileSidebar from '../components/dashboard/MobileSidebar';
import ToggleButton from '../components/shared/ToggleButton';
import logo from '../assets/mark.svg'
import { useThemeStyle } from '../hooks/useThemeStyle';

const DashboardLayout = () => {
    const themeColor = useThemeStyle(
      "bg-black p-3 rounded-xl text-white border-white/25",
      "bg-transparent"
    );

  return (
    <div className={`flex justify-between relative lg:flex-row md:flex-row flex-col`}>
        <Sidebar />
        <div className='fixed bottom-0 w-[100%]'>
      <MobileSidebar />
        </div>
        <div className='lg:w-[80%] md:w-[80%] w-[100%] py-6 h-auto lg:h-[95vh] md:h-[95vh] overflow-y-scroll'>
        <div className={`flex py-6 lg:justify-end md:justify-end justify-between px-6 items-center`}>
          <div className={`lg:hidden md:hidden block ${themeColor}`}>
        <img src={logo} alt="" className=" w-[50px]"/>
        </div>
        <ToggleButton />
      </div>
        <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout