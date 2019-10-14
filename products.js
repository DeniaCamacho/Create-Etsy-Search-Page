
const html = items.results.map(item => {
    return `
    <div class= "display">
        <img src=${unescape(item.Images[0].url_170x135)}/>
        <p class="title">${item.title}</p>
        <div class="des">
         <p>${item.Shop.shop_name}</p>
         <p>(${item.views})</p>
         <p class="price">$${item.price}</p>
        </div>
    </div>
    `
}).join('')

document.querySelector("#products").innerHTML = html


{/* <link href= ${item.Shop.url}> */}