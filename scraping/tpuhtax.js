// Needs scope
{
	const itemContainerClass = "product list-item__product";
	const imageClass = "entry-thumb wp-post-image lazy-loaded";

	const items = document.GetElementsByClassName(itemContainerClass);

	// HTMLDivElement[] to Array
	Array.from(items).forEach( item =>{
		const imgs = item.getElementsByClassName(imageClass);
		if(imgs.length === 0) return; //Some have 0, so skip them
		const img = imgs(0);
		
		const src = img.dataset.src;
		console.log("src", src);
		console.log(img);
	});

	//console.log(items);
}