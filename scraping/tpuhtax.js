// Needs scope
{
	const itemContainerClass = "product list-item__product";
	const imageClass = "entry-thumb wp-post-image lazy-loaded";
	const titleClass = "entry-title";
	//const priceClass = "";

	const items = document.getElementsByClassName(itemContainerClass);

	const arr = [];

	// HTMLDivElement[] to Array
	Array.from(items).forEach( item =>{
		const imgs = item.getElementsByClassName(imageClass);
		if(imgs.length === 0) return; //Some have 0, so skip them
		const img = imgs(0);
		
		const src = img.dataset.src;

		if(!src) return; //Skip these

		const title = item.getElementByClassName(titleClass)[0].textContent;
		//const price = item.getElementByClassName(priceClass)[0].textContent;

		arr.push({
			imgSrc: src,
			title,
			//price,
			category: document.title.split("|")[0].trim(),
		})
	});

	console.log(JSON.stringify(arr));
}