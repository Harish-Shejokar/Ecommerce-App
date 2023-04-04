import React,{} from "react";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
// import NavBar from "./Components/NavBar";

const App = () => {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>  
          <Outlet />
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
      
    </>
  );
};

export default App;
