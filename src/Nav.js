import React, { useState, useEffect } from "react";
import "./Nav.css"
const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Nav;
