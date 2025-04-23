import React, { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Home from './pages/core/Home'
import { ThemeProvider } from './context/ThemeProvider';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
     
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