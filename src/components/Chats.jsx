import React from 'react'
import { useContext } from 'react'
import profile from "../img/profile.jpg"
import { AuthContext } from '../context/AuthContext'

const Chats = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div  className='chats'> 
  
  <div className="userChat">
        <img src={currentUser.photoUrl} alt="" />
        <div className="userChatInfo">
          <span>{currentUser.displayName}</span>
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