import React,{useContext} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import StorePage from "./Pages/StorePage/StorePage";
import About from "./Pages/AboutPage/About";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Login from "./Pages/LoginPage/Login";
import CreateAuthCtx from "./Store/AuthCtx/Auth-Context";

const App = () => {
  const AuthCtx = useContext(CreateAuthCtx);
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          {AuthCtx.isLoggedIn && <Redirect to="/home" />}
          {!AuthCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/home">
          {AuthCtx.isLoggedIn && <HomePage />}
          {!AuthCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/store">
          {AuthCtx.isLoggedIn && <StorePage />}
          {!AuthCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/about">
          {AuthCtx.isLoggedIn && <About />}
          {!AuthCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/contact">
          {AuthCtx.isLoggedIn && <ContactPage />}
          {!AuthCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          {!AuthCtx.isLoggedIn && <Login />}
          {AuthCtx.isLoggedIn && <Redirect to="/login" />}
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
