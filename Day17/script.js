const productGrid=document.querySelector('.pdt_items');
const totalResult=document.getElementById('total');
const cartGrid=document.querySelector('.cartitem')
const btnAdd=document.getElementById('addBtn')

const fetchProduct=async()=>{
    const products=await fetch('./products.json').then(data=>data.json())

    products.forEach((item)=>{
        const productElm=document.createElement('div');
        productElm.classList.add('item');
        productElm.innerHTML=`
        <img src="${item.image}">
        <div class="info">
            <h3>${item.name}</h3>
            <div class="action">
                <span>$${item.price.toString()}</span>
                <button id="addBtn" onclick="addToCart(${item.id},${item.name},${item.price})" >Add to Cart</button>
            </div>
        </div>
        `;
        productGrid.append(productElm);
    })
}
fetchProduct()

let cart=[]
console.log(cart);


const getTotal=(arr)=>{
    let total=0;
    arr.forEach((c)=>{
        total+=Number(c.price);
    });
    totalResult.innerHTML=`$${total}`
}

const addToCart=(id,name,price)=>{
    const existProduct=cart.find((c)=>c.id==id);
    if(!existProduct){
        cart.push({id,name,price});
        getTotal(cart)
        const cartElm=document.createElement('li');
        cartElm.id=`product-${id}`;
        cartElm.innerHTML=`
            <span>${name}</span>
            <button onclick="removeFromCart(${id})">x</button>
        `
        cartGrid.append(cartElm);
    }
}
const removeFromCart = (id) => {
	const findProduct = cart.find((c) => c.id === id);
	if (cart.indexOf(findProduct) > -1) {
		Swal.fire({
			title: 'Are u sure?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: `Delete`,
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Deleted!', '', 'success');
				cart.splice(cart.indexOf(findProduct), 1);
				document.getElementById(`product-${id}`).remove();
				getTotal(cart);
			} else if (result.isDenied) {
				Swal.fire('Product not deleted', '', 'info');
			}
		});
	}
};