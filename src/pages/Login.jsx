import React from "react";
//import Add from "../img/addAvatar.png";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target)
    const email = e.target.elements.useremail.value;
    const password = e.target.elements.userpassword.value;
    

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Parag Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter Email Adress"
            className="userEmail"
            name="useremail"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="userPassword"
            name="userpassword"
          />
          <button className="btn-form" >
            Login
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an Account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
