import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";

const root = document.getElementById("app");

const ItemList = () => {
    return (
        <div>Item List</div>
    )
};

const App = () => {
    return (
        <>
            <Header/>
            <ItemList />
        </>
    )
};

ReactDOM.render(
    <App/>,
    root
);