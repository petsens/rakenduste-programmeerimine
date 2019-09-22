import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./Itemlist.jsx";

const root = document.getElementById("app");

const products = [{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Tyre-X.jpg","title":"Tyre-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Reload-X.jpg","title":"Reload-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Marine-X.jpg","title":"Marine-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_ASPO_Plus.jpg","title":"ASPO PLUS","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Agro-X.jpg","title":"AGRO-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Foam-X.jpg","title":"FOAM-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Hydro-X-1.jpg","title":"HÜDRO-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-005.jpg","title":"LTP 13 PLUS","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/02/foto-023.jpg","title":"TURBO","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-002.jpg","title":"RIM-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-013.jpg","title":"AUTOVAX","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-003.jpg","title":"KONTSENTREERITUD AUTOPESUVAHEND","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-019.jpg","title":"ASPO","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_ASPO-1.jpg","title":"ASPO lõhnatu","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-010.jpg","title":"TK OFF","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-030.jpg","title":"SILICON","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-006.jpg","title":"MATTEX","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-025.jpg","title":"GLAS","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/T-Puhtax_Products_full_size-12.jpg","title":"MIKROEMULSIOON","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Bio_Autovaht.jpg","title":"BIO-AUTOVAHT","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Kui-Vax.jpg","title":"KUI-VAX","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/Can1_4.jpg","title":"HP-200","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/Can2_3.jpg","title":"HP-10","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/2ItClean_medium.jpg","title":"2 IT CLEAN","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-020.jpg","title":"TURBO 2","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/T-Puhtax_Products_full_size-19.jpg","title":"BRAKE CLEANER","category":"Autokeemia Archives - T-Puhtax"}]
const washFluids = [{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Tuulekaals-20.jpg","title":"TUULEKLAASI PESUVEDELIK –20°C","category":"Klaasipesuvedelikud Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-012.jpg","title":"TUULEX –25°C","category":"Klaasipesuvedelikud Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-009.jpg","title":"SUVINE TUULEKLAASI","category":"Klaasipesuvedelikud Archives - T-Puhtax"}]

class App extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: products,
        }
    }

    handleChange(event){
        console.log(event.target.value);
        switch (event.target.value){
            case "products": {
                this.setState({
                    items: products,
                });
                break;
            }
            case "washFluids": {
                this.setState({
                    items: washFluids,
                })
            };
            break;
        }
    };

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
        )
    }
}

ReactDOM.render(
    <App/>,
    root
);