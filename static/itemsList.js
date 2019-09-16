const products = [{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Tyre-X.jpg","title":"Tyre-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Reload-X.jpg","title":"Reload-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/08/Marine-X.jpg","title":"Marine-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_ASPO_Plus.jpg","title":"ASPO PLUS","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Agro-X.jpg","title":"AGRO-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Foam-X.jpg","title":"FOAM-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2019/04/Hydro-X-1.jpg","title":"HÜDRO-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-005.jpg","title":"LTP 13 PLUS","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/02/foto-023.jpg","title":"TURBO","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-002.jpg","title":"RIM-X","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-013.jpg","title":"AUTOVAX","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-003.jpg","title":"KONTSENTREERITUD AUTOPESUVAHEND","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-019.jpg","title":"ASPO","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_ASPO-1.jpg","title":"ASPO lõhnatu","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-010.jpg","title":"TK OFF","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-030.jpg","title":"SILICON","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-006.jpg","title":"MATTEX","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-025.jpg","title":"GLAS","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/T-Puhtax_Products_full_size-12.jpg","title":"MIKROEMULSIOON","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Bio_Autovaht.jpg","title":"BIO-AUTOVAHT","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Kui-Vax.jpg","title":"KUI-VAX","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/Can1_4.jpg","title":"HP-200","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/Can2_3.jpg","title":"HP-10","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/2ItClean_medium.jpg","title":"2 IT CLEAN","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-020.jpg","title":"TURBO 2","category":"Autokeemia Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/T-Puhtax_Products_full_size-19.jpg","title":"BRAKE CLEANER","category":"Autokeemia Archives - T-Puhtax"}]
const washFluids = [{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/5L_Tuulekaals-20.jpg","title":"TUULEKLAASI PESUVEDELIK –20°C","category":"Klaasipesuvedelikud Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-012.jpg","title":"TUULEX –25°C","category":"Klaasipesuvedelikud Archives - T-Puhtax"},{"imgSrc":"https://t-puhtax.ee/wp-content/uploads/2016/03/foto-009.jpg","title":"SUVINE TUULEKLAASI","category":"Klaasipesuvedelikud Archives - T-Puhtax"}]

const categories = {
	TOOTED: "products",
	KLAASIPESUVEDELIK: "washFluids",
};

// Initial state
const selectedCategory = categories.TOOTED;

function createItems(){
	const root = document.getElementById("item-list");

	let items = [];

	if(selectedCategory === categories.TOOTED){
		items = products;
	}
	else if(selectedCategory === categories.KLAASIPESUVEDELIK){
		items = washFluids;
	}
	items.forEach((item)=>{
		const element = createItemElement(item);
		root.append(element);
//		console.log(element);
	})
}

// Support function
function createItemElement(item){
	const anchor = document.createElement("a");
	anchor.href = `./item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`;
	
	const itemContainer = document.createElement("div");
	itemContainer.className = "item";
	
	const imgElement = document.createElement("img");
	imgElement.src = item.imgSrc;
	
//	const priceElement = document.createElement("div");
//	priceElement.innerText = item.price;
//	priceElement.className = "item_price";

	const titleElement = document.createElement("div");
	titleElement.className = "item_title";
	titleElement.textContent = item.title;


	anchor.append(itemContainer);
	itemContainer.append(imgElement);
	itemContainer.append(titleElement);
//	itemContainer.append(priceElement);

	return anchor;
}

window.addEventListener("load", () =>{
//	console.log("Hello World");
	createItems();
});

//<a href = "./item.html?title=Tyre-X Keraamiline kummi ja plastiku hooldusvahend välispindadele&cost=25EUR&src=./images/Tyre-X.jpg">
//	<div class = "item">
//		<img src = "./images/Tyre-X.jpg">
//		<div class = "item_title">Tyre-X Keraamiline kummi ja plastiku hooldusvahend välispindadele</div>
//		<div class = "item_price">25EUR</div>
//	</div>
//</a>