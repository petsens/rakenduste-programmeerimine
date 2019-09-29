import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            selectedCategory: "products",
        };
    }

    componentDidMount(){
        this.fetchItems();
    }

    fetchItems = () => {
        fetch("http://localhost:9000/api/items")
        .then(res =>{
            console.log("res", res);
            return res.json();
        })
        .then( items => {
            console.log("items", items);
            this.setState({
                items
            });
        })
        .catch(err =>{
            console.log("err", err);
        });
    };

    handleDropdown(event){
       this.setState({
           selectedCategory: event.target.value
       });
    } 

    getVisibleItems = () => {
        return this.state.items.filter( item => item.category === this.state.selectedCategory);
    };

    render(){
        return (
            <>
                <Header/>
                <select onChange = {this.handleDropdown.bind(this)}>
                    <option value = "products">Tooted</option>
                    <option value = "washFluids">Aknapesuvedelikud</option>
                </select>
                <ItemList items = {this.getVisibleItems()} />
            </>
        );
    }
}

export default HomePage;
