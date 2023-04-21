import React, { useRef, useContext } from "react";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
import CreateAuth from '../../Store/AuthCtx/Auth-Context'

const Login = () => {
  const AuthCtx = useContext(CreateAuth);
  const history = useHistory();
  const emailRef = useRef();
  const passRef = useRef();

  const formHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const pass = passRef.current.value;

    console.log(email, pass);

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAOARx_mefd3pc7MMgvxZhMKpo230DKH0",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pass,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        // console.log(data.idToken);
        AuthCtx.addTokens(data.idToken,email);
        history.replace("/store");
      } else {
        alert("Invalid-Authentication");
      }
    } catch (err) {
      console.log(err);
    }

    emailRef.current.value = "";
    passRef.current.value = "";
  };

  return (
    <form className={classes.form}>
      <label>Email</label>
      <input
        ref={emailRef}
        rows="5"
        className={classes["open-text"]}
        type="email"
      />
      <label>Password</label>
      <input ref={passRef} type="password" min="3" />
      <button onClick={formHandler}>LogIn</button>
    </form>
  );
};

export default Login;
