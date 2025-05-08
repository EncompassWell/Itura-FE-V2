import React, { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Home from './pages/core/Home'
import { ThemeProvider } from './context/ThemeProvider';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import AIChat from './pages/dashboard/AIChat';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path='/dashboard' element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='/dashboard/aichats' element={<AIChat />} />
      </Route>   
    </Route>
  )
);

const App = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider>
     <div className="max-w-[1440px] mx-auto font-inter text-[16px] fot-[400]">
         <RouterProvider router={router} />
       </div>
       </ThemeProvider>
  )
}

export default App