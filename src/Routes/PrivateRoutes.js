import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CreateAuthCtx from "../Store/AuthCtx/Auth-Context";
import Login from "../Pages/LoginPage/Login";

const PrivateRoutes = ({ Component }) => {
  const AuthCtx = useContext(CreateAuthCtx);
  // console.log(AuthCtx.isLoggedIn);
  return <Route>{!AuthCtx.isLoggedIn ? <Login /> : <Component />}</Route>;
};

export default PrivateRoutes;
