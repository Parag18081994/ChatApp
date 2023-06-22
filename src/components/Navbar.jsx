import React from "react";
import profile from "../img/profile.jpg"
import { useContext } from "react";
import { signOut } from "firebase/auth";
import {auth} from "../firebase";
import {AuthContext} from "../context/AuthContext"

const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className="navbar">
      <span className="logo">Parag Chat</span>
      <div className="user">
        <img src={currentUser.photoUrl} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
