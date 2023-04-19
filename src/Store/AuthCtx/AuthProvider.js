import { useState } from "react";
import CreateAuthCtx from "./Auth-Context";

const AuthProvider = (props) => {
  const [tokens, setTokens] = useState(null);

  const addTokensHandler = (token) => {
    console.log(token);
    setTokens(token);
    localStorage.setItem("token", token);
  };

  const context = {
    token: tokens,
    addTokens: addTokensHandler,
  };
  return (
    <CreateAuthCtx.Provider value={context}>
      {props.children}
    </CreateAuthCtx.Provider>
  );
};

export default AuthProvider;
