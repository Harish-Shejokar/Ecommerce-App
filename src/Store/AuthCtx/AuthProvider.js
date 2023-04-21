import { useState } from "react";
import CreateAuthCtx from "./Auth-Context";

const AuthProvider = (props) => {
  const [tokens, setTokens] = useState(localStorage.getItem('token'));
  const [email, setEmail] = useState(localStorage.getItem('email'));

  const addTokensHandler = (token,email) => {
    console.log(token);
    setTokens(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem('email',email)
  };

  const userLogIn = !!tokens;
  // console.log(userLogIn,email);
  const context = {
    token: tokens,
    userEmail: email,
    isLoggedIn: userLogIn,
    addTokens: addTokensHandler,
  };
  return (
    <CreateAuthCtx.Provider value={context}>
      {props.children}
    </CreateAuthCtx.Provider>
  );
};

export default AuthProvider;
