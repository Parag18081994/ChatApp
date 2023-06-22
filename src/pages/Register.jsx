import React from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage ,db} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import {doc,setDoc} from "firebase/firestore";
import { useNavigate,Link } from "react-router-dom";



const Register = () => {
  const [err, setErr] = useState(false);
  const navigate=useNavigate();


  const handleSubmit = async (e) => {
 
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    console.log(displayName, email, password);

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, `${displayName}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db,"userChats",res.user.uid),{});
            navigate("/")

            

          
          } catch (err) {
            console.log(err);
            setErr(true);
       
          }
        });
      });
    } catch (err) {
      setErr(true);
 
    }
  };





  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Parag Chat</span>
        <span className="title">Register</span>

        <form onSubmit={handleSubmit} className="form">
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
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an Account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
