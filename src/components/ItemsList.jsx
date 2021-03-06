import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./itemslist.css";

const ItemsList = (props) => {
    return (
        <div className = {"content"}>    
        {
            props.items.map( item => {
                return < Item
                key = {item._id} 
                id = {item._id}
                imgSrc = {item.imgSrc}
                title = {item.title} 
                price = {item.price} 
                />;
            })
        }
        </div>
    );
};

ItemsList.propTypes = {
    items: PropTypes.array.isRequired
};

const Item = (props) => {
    return (
        <Link to = {`/items/${props.id}`}>
            <div className = {"item"}>
            <img className = {"item_image"} src = {props.imgSrc} />
            <div className = "item_title">{props.title}</div>
            <div className = "item_price">{props.price}</div>
            </div>
        </Link> 
        );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ItemsList;

