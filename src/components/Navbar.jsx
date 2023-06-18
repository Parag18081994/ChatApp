import React from "react";
import profile from "../img/profile.jpg"
import { signOut } from "firebase/auth";
import {auth} from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Parag Chat</span>
      <div className="user">
        <img src={profile} alt="" />
        <span>Parag</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
