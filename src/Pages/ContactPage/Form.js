import React, { useRef } from "react";
import classes from "./Form.module.css";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const formHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    const obj = { name, email, phone };
    console.log(obj);

    // const response = await fetch(
    //   "https://ecomm-data-afdc5-default-rtdb.firebaseio.com/ecom.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(obj),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <>
      <h1>Contact Us</h1>
      <form className={classes.form}>
        <label>Name</label>
        <input ref={nameRef} type="text" />
        <label>Email</label>
        <input
          ref={emailRef}
          rows="5"
          className={classes["open-text"]}
          type="email"
        />
        <label>Message</label>
        <textarea ref={phoneRef} type="message" rows="5" />
        <button className="btn" onClick={formHandler}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
