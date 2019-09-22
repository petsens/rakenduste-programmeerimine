import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
    <div className="header">
        <Link to = {"/"}>
            <img className="header_logo" src=".//images/rd_logo.png" /> 
        </Link>
        <div className="header_buttons">
            <button>Login/Signup</button>
            <button>Cart</button>
        </div>
  	</div>
    )
};

export default Header;