import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import "../styles/headerStyles/header.css";

function Header() {
   const [active, setActive] = useState(false);
   const navRef = useRef(null);
   const handleActive = () => {
      setActive(true);
   };

   useEffect(() => {
      const handleCloseMenu = (e) => {
         if (!navRef.current.contains(e.target)) {
            setActive(false);
         }
      };
      document.body.addEventListener("click", handleCloseMenu, true);
      return () => document.body.removeEventListener("click", handleCloseMenu, true);
   });
   return (
      <header className="header">
         <img src={logo} alt="logo" />
         <img className="icon-menu" src={menu} alt="icon menu" onClick={handleActive} />
         <nav className={active ? "navbar active" : "navbar"} ref={navRef}>
            <ul className="ul">
               <li>Features</li>
               <li>Pricing</li>
               <li>Resources</li>
            </ul>
            <div className="login-sign-up">
               <p className="login">Login</p>
               <button className="sign-up-button">Sign Up</button>
            </div>
         </nav>
      </header>
   );
}

export default Header;
