import React from "react";
import profile from "../img/profile.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={profile} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Message;
