const items = JSON.parse(localStorage.getItem('cartItems'))
const mainDiv = document.getElementById('cartDiv')
console.log(items)
function displayData ()
{
    items.forEach((i) =>
    {
        const div = document.createElement("div")
				div.classList.add("product")
				const image = document.createElement("img")
				image.src = i.thumbnail
        image.alt = i.title
        image.height="50"
				const title = document.createElement("h2")
				title.textContent = i.title
				const price = document.createElement("p")
        price.textContent = "Price: ₹" + i.price
        div.append(image,title,price)
        mainDiv.appendChild(div)
    })
}
displayData()