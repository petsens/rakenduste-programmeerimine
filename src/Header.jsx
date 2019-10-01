import React from "react";
import {Link} from "react-router-dom";
import {userIcon, userCart} from "./icons.js";
import "./header.css";

const Header = () => {
    return (
    <div className = "header">
        <Link to = {"/"}>
            <img className = "header_logo" src = "/images/rd_logo.png" /> 
        </Link>
        <div className = "header_buttons">
            <div className = {"header_button"}>
                <img src = {userIcon}/>
                <div className = {"header_button-text"}>Login/<br/>Register</div>
            </div>
            <div className = {"header_button"}>
                <img src = {userCart}/>
                <div className = {"header_button-text"}>Cart</div>
            </div>
        </div>
    </div>
    );
};

export default Header;