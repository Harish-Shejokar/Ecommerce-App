import React, { createContext } from "react";

const CreateAuthCtx  = React.createContext({
    token: '',
    addTokens: {},
});

export default CreateAuthCtx;
