import React from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Home from './pages/core/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
     
    </Route>
  )
);

const App = () => {
  return (
     <div className="max-w-[1440px] mx-auto font-inter text-[16px]">
         <RouterProvider router={router} />
       </div>
  )
}

export default App