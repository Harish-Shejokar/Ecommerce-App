import React,{} from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
const App = () => {
 
  const router = createBrowserRouter([
    { path: '/' ,element:<HomePage />},
    {path: '/about',element:<About />}
  ])

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
};

export default App;
