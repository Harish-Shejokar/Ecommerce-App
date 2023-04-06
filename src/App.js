import React,{} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Outlet,
  // createRoutesFromElements,
  // Route,

} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import About from "./Pages/AboutPage/About";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";

import Footer from "./Components/Footer";

const App = () => {
 

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,

      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Swithch */}
    </>
  );
};

export default App;
