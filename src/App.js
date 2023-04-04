import React,{} from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
const App = () => {
 
  const router = createBrowserRouter([
    { path: '/' ,element:<HomePage />},
    {}
  ])

  return (
    <>
      <RouterProvider router={router} />
      {/* <About /> */}
    </>
  );
};

export default App;
