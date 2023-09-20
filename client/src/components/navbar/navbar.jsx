import "./navbar.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";
import {Link}  from "react-router-dom";

function Navbar() {


  const [signedIn, setSignedIn] = useState(false);
  const currentUser = useSelector((state) => state.auth.user);
  const [userName, setUserName] = useState(currentUser?.data);


  useEffect(()=>{
    if(userName !== null || userName !== undefined){
    setSignedIn(true);
  }
  }, [userName]);
  

  const toggleSignIn = () => {

    if(userName !== null && userName!== undefined){
      setSignedIn(true);
    }
  };


  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li className="nav-logo">
         <Link to="/">
            <img src="favicon.png" alt="Logo" className="logo"/> 
            
            </Link><p>Film Insider</p>
        </li>

        <li className="nav-item">
            <Link to="/">HOME</Link>
        </li>

        <li className="nav-item">
            <Link to="/Community">COMMUNITY</Link>
        </li>

        <li className="sign-in">

            <Link to="/Auth">
              
            {signedIn ===  true ? (
              <Link to="/Community">
              <button onClick= {setSignedIn(false)}>Log out</button>
              </Link>
            ): (
              <Link to="/Auth">
             <button onClick={toggleSignIn}>
              Log In
             </button>
             </Link>
             )}
          
          </Link>
          <Avatar  height={35} width={35}></Avatar>
          
        </li>

      </ul>
    </nav>
  );
}
export default Navbar;

