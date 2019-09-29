import React from "react";
import Header from "./Header.jsx";
<<<<<<< HEAD
import PropTypes from "prop-types";
=======
import {products, washFluids} from "./mydatabase";
>>>>>>> a3cf702a05056d253396014a66a8ee27280059ad

class ItemPage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.fetchItem();
    }

    fetchItem = () => {
        fetch(`http://localhost:9000/api/items/${this.props.match.params.itemId}`)
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