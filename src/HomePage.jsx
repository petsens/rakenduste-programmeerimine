import React from "react";
import {products, washFluids} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: products,
        };
    }

    componentDidMount(){
        fetch("http://localhost:9000/api/items")
        .then(res =>{
            console.log("res", res);
            return res.json();
        })
        .then( items => {
            console.log("items", items);
        })
        .catch(err =>{
            console.log("err", err);
        });
    }

    handleChange(event){
        switch (event.target.value) {
            case "products":{
                this.setState({
                    items: products,
                });
                break;
            }
            case "washFluids":{
                this.setState({
                    items: washFluids,
                });
                break;
            }
        }
    }

    render(){
        return (
            <>
                <Header/>
                <select onChange = {this.handleChange.bind(this)}>
                    <option value = "products">Tooted</option>
                    <option value = "washFluids">Aknapesuvedelikud</option>
                </select>
                <ItemList items = {this.state.items} />
            </>
        );
    }
}

export default HomePage;