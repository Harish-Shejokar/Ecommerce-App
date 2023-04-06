import React,{} from "react";
import {createBrowserRouter,RouterProvider,Outlet,createRoutesFromElements, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";

const App = () => {
 

  const routerDef = createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About />} />
    </Route>
  );

  const router = createBrowserRouter(routerDef);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <NavBar />
  //         <Outlet />  

  //       </>
  //     ),
  //     errorElement: <ErrorPage />,

  //     children: [
  //       { path: "/", element: <HomePage /> },
  //       { path: "/about", element: <About /> },
  //     ],
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Swithch */}
    </>
  );
};

export default App;
