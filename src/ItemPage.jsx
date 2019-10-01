import React from "react";
import Header from "./Header.jsx";
import PropTypes from "prop-types";
import "./header.css";

class ItemPage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.fetchItem();
    }

    fetchItem = () => {
        console.log("fetchItem");
        fetch(`/api/items/${this.props.match.params.itemId}`)
        .then( res =>{
            return res.json();
        })
        .then( item =>{
            console.log("item", item);
            this.setState( {
                ...item
            });
        })
        .catch(err =>{
            console.log("item page ", err);
        });
    }

    render(){
        console.log("this.props", this.props);
        console.log("itemID", this.props.match.params.itemId);
        console.log("this.state", this.state);
        return (
            <>
            <Header/>
            <div className = {"item"}>
                <img src = {this.state.imgSrc} />
                <div className = {"item_title"}>{this.state.title}</div>
                <div className = {"item_price"}>{this.state.price}</div>
            </div>
            </>
        );
    }
}
ItemPage.propTypes = {
    match: PropTypes.object.isRequired,
};
export default ItemPage;