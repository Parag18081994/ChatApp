import React from "react";
import profile from "../img/profile.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search for user" />
      </div>
      <div className="userChat">
        <img src={profile} alt="" />
        <div className="userChatInfo">
          <span>Parag hello</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
