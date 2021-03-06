import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../Nav.css';
function Nav(){

    const [show,handleShow]=useState(false);
    useEffect(() =>{
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                    handleShow(true);
            }else handleShow(false);
        });
        return () => {
        window.removeEventListener("scroll",false);
        };
    },[]);
    return(
    <div className={`nav ${show && "nav__black}"}`}>
        <img className="nav-logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" 
        alt="Netflix Logo"/>

        <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Netflix Avatar" className="nav-avatar"/>
    </div>
    )
}

export default Nav;