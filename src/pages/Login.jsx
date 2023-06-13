import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Parag Chat</span>
        <span className="title">Login</span>
        <form action="" className="form">
          <input
            type="text"
            placeholder="Enter Email Adress"
            className="userEmail"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="userPassword"
          />
          <button className="btn-form">Login</button>
        </form>
        <p>You do have an Account? Register</p>
      </div>
    </div>
  );
};

export default Login;
