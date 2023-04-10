import React,{} from "react";
import {
 
  Route,
  

} from 'react-router-dom'
import StorePage from "./Pages/StorePage/StorePage";
import About from "./Pages/AboutPage/About";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from "./Pages/ContactPage/ContactPage";

const App = () => {
 


  return (
    <>
      <NavBar />
      <Route path="/store">
        <StorePage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <ContactPage/>
      </Route>

      {/* <RouterProvider router={router} /> */}
      {/* <Swithch */}
      <Footer />
    </>
  );
};

export default App;
