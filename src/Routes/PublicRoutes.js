import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import CreateAuthCtx from "../Store/AuthCtx/Auth-Context";
// import Login from "../Pages/LoginPage/Login";
import ErrorPage from '../Pages/ErrorPage';


const PublicRoutes = ({ Component }) => {
  const AuthCtx = useContext(CreateAuthCtx);
  return <Route>{!AuthCtx.isLoggedIn ? <Component /> : <ErrorPage />}</Route>;
}

export default PublicRoutes;
