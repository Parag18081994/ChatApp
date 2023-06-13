import React from "react";
import profile from "../img/profile.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Parag Chat</span>
      <div className="user">
        <img src={profile} alt="" />
        <span>Parag</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
