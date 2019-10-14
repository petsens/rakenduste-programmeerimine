const products = [
    {
      "imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Tyre-X.jpg",
      "title":"Tyre-X",
      "category":"Autokeemia Archives - T-Puhtax",
      "price":"20.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Reload-X.jpg",
    "title":"Reload-X",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"25.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Marine-X.jpg",
    "title":"Marine-X",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"28.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Hydro-X-1.jpg",
    "title":"HÜDRO-X",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"23.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Agro-X.jpg",
    "title":"AGRO-X",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"30.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Foam-X.jpg",
    "title":"FOAM-X",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"21.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_ASPO_Plus.jpg",
    "title":"ASPO PLUS",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"24.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-005.jpg",
    "title":"LTP 13 PLUS",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"18.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/02/foto-023.jpg",
    "title":"TURBO",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"19.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-002.jpg",
    "title":"RIM-X",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"26.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-013.jpg",
    "title":"AUTOVAX",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"40.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-003.jpg",
    "title":"KONTSENTREERITUD AUTOPESUVAHEND",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"35.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-019.jpg",
    "title":"ASPO",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"32.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_ASPO-1.jpg",
    "title":"ASPO lõhnatu",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"31.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-010.jpg",
    "title":"TK OFF",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"36.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-030.jpg",
    "title":"SILICON",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"37.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-006.jpg",
    "title":"MATTEX",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"32.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-025.jpg",
    "title":"GLAS",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"39.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/T-Puhtax_Products_full_size-12.jpg",
    "title":"MIKROEMULSIOON",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"24.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Bio_Autovaht.jpg",
    "title":"BIO-AUTOVAHT",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"23.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Kui-Vax.jpg",
    "title":"KUI-VAX",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"26.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/Can1_4.jpg",
    "title":"HP-200",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"28.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/Can2_3.jpg",
    "title":"HP-10",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"29.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/2ItClean_medium.jpg",
    "title":"2 IT CLEAN",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"27.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-020.jpg",
    "title":"TURBO 2",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"22.50"
    },
    {"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/T-Puhtax_Products_full_size-19.jpg",
    "title":"BRAKE CLEANER",
    "category":"Autokeemia Archives - T-Puhtax",
    "price":"21.50"
    }];
const washFluids = [
    {
        "imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Tuulekaals-20.jpg",
        "title":"TUULEKLAASI PESUVEDELIK –20°C",
        "category":"Klaasipesuvedelikud Archives - T-Puhtax",
        "price":"15.50"
    },
    {
        "imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-012.jpg",
        "title":"TUULEX –25°C",
        "category":"Klaasipesuvedelikud Archives - T-Puhtax",
        "price":"16.50"
    },
    {
        "imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-009.jpg",
        "title":"SUVINE TUULEKLAASI",
        "category":"Klaasipesuvedelikud Archives - T-Puhtax",
        "price":"17.50"
    }];
 
const getItems = () => {
    const items = [];
    products.forEach( (product, index) =>{
        items.push({
            ...product,
            //id: "products-" + index,
            category: "products"
        });
    });
    washFluids.forEach( (washFluid, index) =>{
        items.push({
            ...washFluid,
            //id: "washFluids-" + index,
            category: "washFluids"
        });
    });
    return items;
};

const getItem = (itemId) =>{
    return getItems().find(item => item.id === itemId);
};

module.exports = {
    getItems,
    getItem
};