import React, { useContext } from 'react';
import {signOut} from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { ArrowRightCircle } from "react-bootstrap-icons";


const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">WebChat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        {/* <button onClick={()=>signOut(auth)}>logout</button> */}
        <div
        className="socialBoxNav"
        onClick={()=>signOut(auth)}
      >
        LogOut
        <ArrowRightCircle size={25} />
      </div>
      </div>
    </div>
  )
}

export default Navbar