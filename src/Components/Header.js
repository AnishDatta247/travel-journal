import React from "react";
import navlogo from "../Images/nav-logo.png"

export default function Header() {
    return (
        <nav>
            {/* <div className="navbar">
                
            </div> */}
            <img className='nav-logo' src={navlogo} />
            <span className="heading">my travel journal.</span>
        </nav>
    )
}