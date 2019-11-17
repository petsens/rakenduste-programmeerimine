import React from "react";
import {Link} from "react-router-dom";
import {AuthConsumer} from "./authConsumer.jsx";

const Header = ({user, token}) => {
    console.log("header", token, user);
    return (
        <div className="header">
        <Link to = {"/"}>
            <img className="header_logo" src="/images/rd_logo.png" /> 
        </Link>
        <div className="header_buttons">
            {user.email && <WelcomeIcon user={user} />}

            {!user.email && <LoginRegisterIcon />}

            <div className = {"header_button"}>
                <img src = {cartIcon} style = {{height: 35}} />
                <div className = {"header_button-text"}>Cart</div>
            </div>
        </div>
    </div>
    )
};

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.object,
};

const LoginRegisterIcon = () => {
    <Link className = {"header_button"} to = {"/login"}>
        <img src = {userIcon} />
        <div className = {"header_button-text"}>Login/br/>Register</div>
    </Link>
};

const WelcomeIcon = ({user}) => (
    <Link className = {"header_button"} to = {`/users/${user_id}`}>
        <img src = {userIcon} />
        <div className = {"header_button-text"}>Welcome</div>
    </Link>
);

export default authConsumer(Header);