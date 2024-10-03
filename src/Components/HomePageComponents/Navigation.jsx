import React from "react";

const NavigationComponent = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className = "navbar-brand ms-5"  href="/" >Vodo File Manager</a>
        <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item mx-2"> 
                <a className=" btn btn-primary btn-sm" href="/login">
                    login
                </a>
            </li>
            <li className="nav-item">
                <a className=" btn btn-success btn-sm " href="/register">

                    Register
                </a>
            </li>
        </ul>
        
        
        </nav>
   
    );
        
};

export default NavigationComponent;