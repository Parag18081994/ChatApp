import React from "react";
//import Add from "../img/addAvatar.png";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
    } catch (err) {
      setErr(true);
    }
  };
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
          <button className="btn-form" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p>You do have an Account? Register</p>
      </div>
    </div>
  );
};

export default Login;
