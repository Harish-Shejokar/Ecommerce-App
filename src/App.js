import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import StorePage from "./Pages/StorePage/StorePage";
import About from "./Pages/AboutPage/About";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ProductDetailsPage from "./Pages/StorePage/ProductDetail/ProductDetailsPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home">
            <HomePage />
          </Redirect>
        </Route>

        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/store">
          <StorePage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/productDetails/">
          <ProductDetailsPage />
        </Route>
      </Switch>
      <Footer />

      
    </>
  );
};

export default App;
