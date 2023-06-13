import React from 'react'
import profile from "../img/profile.jpg"

const Chats = () => {
  return (
    <div  className='chats'> 
  
  <div className="userChat">
        <img src={profile} alt="" />
        <div className="userChatInfo">
          <span>Parag</span>
        </div>
        </div>

        <div className="userChat">
        <img src={profile} alt="" />
        <div className="userChatInfo">
          <span>Parag</span>
        </div>
        </div>

        <div className="userChat">
        <img src={profile} alt="" />
        <div className="userChatInfo">
          <span>Parag</span>
        </div>
        </div>

    </div>
  )
}

export default Chats