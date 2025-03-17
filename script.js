let cartItems=[]
const rightDiv = document.getElementById('rightDiv');
async function fetchData ()
{
    try
    {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()	
        console.log(data.products)
        displayData(data.products)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData()
function displayData (items)
{
    rightDiv.textContent = '';
    items.forEach((i) =>
    {
        const div = document.createElement('div');
        div.classList.add('product')
        const image = document.createElement('img');
        image.src = i.thumbnail;
        image.alt = i.title;
        const title = document.createElement('h2');
        title.textContent= i.title
        const price = document.createElement('p');
        price.textContent= "Price: ₹"+i.price
        const AddCartButton = document.createElement('button');
        AddCartButton.textContent = "add to cart"
        AddCartButton.addEventListener('click', () => addToCart(i));
        div.append(image, title, price, AddCartButton)
        rightDiv.appendChild(div)
    })
}
document.getElementById('leftDiv').addEventListener('click', function (e)
{
  getCategoryData(e.target.textContent)  
} )
async function getCategoryData (cat)
{
    try {
			const res = await fetch(`https://dummyjson.com/products/category/${cat}`)
			const data = await res.json()
			console.log(data.products)
			displayData(data.products)
		} catch (err) {
			console.log(err)
		}
}
function addToCart (pro)
{
    cartItems.push(pro);
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    document.getElementById('count').textContent= cartItems.length
}
//BOM - Browser Object Model
console.log(window)