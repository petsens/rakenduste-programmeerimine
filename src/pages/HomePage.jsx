import React from "react";
import ItemsList from "../components/ItemsList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "./homepage.css";
import SortDropdown from "../components/SortDropdown.jsx";
import {getItems} from "../actions/itemsActions";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            sortDirection: -1,
            items: [],
            allCategories: ["products", "washFluids"],
            selectedCategories: ["products"],
        };
    }

    componentDidMount(){
        this.fetchItems();
    }

    fetchItems = () => {
        getItems()
            .then(items => {
                console.log("items", items);
                this.setState({
                    items
                });
            })
            .catch(err => {
                console.log("err", err);
            });
    };

    handleFilterSelect = (event) => {
        const categoryName = event.target.name;
        if(this.isSelected(categoryName)) {
            return this.unselectedCategory(categoryName);
        }
        this.selectCategory(categoryName);
    };

    selectCategory = (categoryName) => {
        this.setState({
            selectedCategories: this.state.selectedCategories.concat([categoryName])
        });
    };
    
    unselectedCategory = (categoryName) => {
            const newArr = this.state.selectedCategories.filter( cn => cn !== categoryName);
            this.setState( {
                selectedCategories: newArr
        });
    };

    getVisibleItems = () => {
        return this.state.items
            .filter( item => this.isSelected(item.category))
            .sort( (a, b) => {
                switch (this.state.sortDirection) {
                    case -1: return b.price - a.price;
                    case 1: return a.price - b.price;
                }
            });
    };

    isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

    handleSortDropdown = (sortDirection) => {
        this.setState({
            sortDirection,
        });
    };

    render(){
        const items = this.getVisibleItems();
        return (
            <>
                <ItemFilters
                    allCategories = {this.state.allCategories}
                    handleDropdown = {this.handleFilterSelect}
                    isSelected = {this.isSelected}
                />
                <div className = {"items_settings"}>
                    <div>
                        Items found {items.length} from {this.state.selectedCategories.join(", ")}
                    </div>
                    <SortDropdown 
                        direction = {this.state.sortDirection}
                        onChange = {this.handleSortDropdown}
                    />
                </div>
                <ItemsList items = {items} />
            </>
        );
    }
}

const ItemFilters = ({allCategories, handleDropdown, isSelected}) => {
    return (
        <div className = {"itemFilters_wrapper"}>
            {
                allCategories.map( categoryName => {
                    return (
                        <Checkbox 
                            key = {categoryName}
                            name = {categoryName} 
                            onChange = {handleDropdown}
                            checked = {isSelected(categoryName)}
                        />
                    );
                })
            }
        </div>
    );
};

ItemFilters.propTypes = {
    allCategories: PropTypes.array.isRequired,
    handleDropdown: PropTypes.func.isRequired,
    isSelected: PropTypes.func.isRequired,
};

export default HomePage;