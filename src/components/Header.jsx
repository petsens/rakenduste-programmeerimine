import React from "react";
import {Link} from "react-router-dom";
import {userIcon, userCart} from "../icons.js";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({token, user}) => {
    console.log("header", token, user);
    return (
    <div className = "header">
        <Link to = {"/"}>
            <img className = "header_logo" src = "/images/rd_logo.png" /> 
        </Link>
        <div className = "header_buttons">
            
            {user.email && <WelcomeIcon user={user}/>}
            
            {!user.email && <LoginRegisterIcon /> }

            <div className = {"header_button"}>
                <img src = {userCart}/>
                <div className = {"header_button-text"}>Cart</div>
            </div>
        </div>
    </div>
    );
};

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.object,
};

const WelcomeIcon = ({user}) => (
    <Link className = {"header_button"} to={`/users/${user._id}`}>
        <img src = {userIcon}/>
        <div className = {"header_button-text"}>Welcome, {user.email}</div>
    </Link>
);

WelcomeIcon.propTypes = {
    user: PropTypes.object.isRequired
};

const LoginRegisterIcon = () => (
    <Link className = {"header_button"} to="/login">
        <img src = {userIcon}/>
        <div className = {"header_button-text"}>Login/<br/>Register</div>
    </Link>
);

export default Header;