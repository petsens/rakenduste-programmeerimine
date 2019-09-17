// Needs scope
{
	const itemContainerClass = "s-item   ";
	const imageClass = "s-item__image-img";

	const items = document.GetElementsByClassName(itemContainerClass);

	const arr = [];

	// HTMLDivElement[] to Array
	Array.from(items).forEach( item =>{
		const imgs = item.getElementsByClassName(imageClass);
		if(imgs.length === 0) return; //Some have 0, so skip them
		const img = imgs(0);
		
		const src = img.dataset.src;

		if(!src) return; //Skip these
		//console.log("src", src);
		//console.log(img);

		arr.push({
			imgSrc: src,
		})
	});

	//console.log(items);
}