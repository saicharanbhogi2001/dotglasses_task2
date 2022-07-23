import React from "react";
import "./Navbar.css"
const Navbar=()=>{
    return(
    <div className="nav">
         <div className="left">
            <img src="https://dotglasses.org/wp-content/uploads/2020/07/logo.png" alt=""></img>
        </div>
        <div className="right">
            <ul>
                <li>Home</li>
                <li>solution</li>
                <li>where we work</li>
                <li>About us</li>
            </ul>
            <button className="but">contact</button>
        </div> 
    </div>
    )
}
export default Navbar;