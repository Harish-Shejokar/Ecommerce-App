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
import Product from "./Pages/Product";

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

        <Route path="/productDetails/:productId/">
          <ProductDetailsPage />
        </Route>

        <Route path="/product">
          <Product/>
        </Route>

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
