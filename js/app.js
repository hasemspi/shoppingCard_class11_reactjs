arrayProduct = [];

function displayProduct(arrayProduct){
    let totalPrice = 0; //total price defual deleration

     //console.log(Arraycart[i].pdName,Arraycart[i].pdPrice);
    // const productName = Arraycart[i].pdName;
    // const productPrice = Arraycart[i].pdPrice;

    const totalProducts = document.getElementById("total-products"); //Table id
    totalProducts.innerText = arrayProduct.length;


    const cartContainer = document.getElementById("products-cart");

    cartContainer.textContent = ''; //data clear 


    for(let i = 0; i < arrayProduct.length; i++) {
        // console.log(totalPrice);
        //  console.log(arrayProduct[i].productPriect);
        //  console.log(totalPrice+arrayProduct[i].productPriect);
        //  totalPrice = totalPrice + arrayProduct[i].productPriect;
         totalPrice += arrayProduct[i].productPriect;
        // console.log(totalPrice);
        //const finalResult = parseFloat(totalPrice)
        const tr = document.createElement("tr");//Table create 
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${arrayProduct[i].productName}</td>
        <td>${arrayProduct[i].productPriect}</td>
        `;
        cartContainer.appendChild(tr);
}
//result data showing
const tr = document.createElement('tr');
tr.innerHTML = `
<th></th>
<td>Total Price</td>
<td>${totalPrice}</td>
`;
cartContainer.appendChild(tr);
}


function addToCart(element){
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0]);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);

const productName = element.parentNode.parentNode.children[0].innerText;
const productPriect = element.parentNode.parentNode.children[1].children[0].innerText;

//console.log(productName,productPriect);

const ObjecProduct = {
    productName : productName,
    productPriect:parseInt(productPriect)
}
// console.log(ObjecProduct);

arrayProduct.push(ObjecProduct);

displayProduct(arrayProduct);
}