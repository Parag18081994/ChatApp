import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Parag Chat</span>
        <span className="title">Register</span>
        <form action="" className="form">
          <input
            type="text"
            placeholder="Display Name"
            className="displayName"
          />
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
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>

          <button className="btn-form">Signup</button>
        </form>
        <p>You do have an Account? Login</p>
      </div>
    </div>
  );
};

export default Register;
