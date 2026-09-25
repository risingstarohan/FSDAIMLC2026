const div = document.getElementById('container')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

console.log(div);

const h2 = document.createElement('h2');
// h2.innerText = 'Welcome to DOM Manipulation';

// console.log(h2);

function addToCart(itemId) {
    alert(`Item with ID ${itemId} added to cart!`);
}

async function display() {
    try {
        div.appendChild(h2);

        // div.innerHTML = `<h1 style = 'color: blue;background-color: lightgray;'>Welcome to DOM Manipulation</h1>`;

        const serverdata = await fetch('https://fakestoreapi.com/products')
        const jsonData = await serverdata.json()

        // div.innerHTML= `<h1 style = 'color: green;background-color: lightgray;'>${jsonData[0].title}</h1>`;

        let table = `<table border = '1' style = 'border-collapse: collapse;'> 
            <tr><th>Image</th><th>Item Id</th><th>Item Title</th><th>Item Price</th><th>Add to Cart</th></tr> 
            ${ 
                jsonData.map((item) => { 
                    return `<tr> 
                        <td><img src="${item.image}" alt="${item.title}" style="width: 100px; height: auto;"></td> 
                        <td>${item.id}</td> 
                        <td>${item.title}</td> 
                        <td>${item.price}</td> 
                        <td><button onclick="addToCart(${item.id})">Add to Cart</button></td> 
                    </tr>` 
                }).join('') 
            } 
            </table>`;

        result.innerHTML = table;

        // console.log(jsonData);
        // console.log(jsonData[0]);
        // result.innerHTML = `<div>${JSON.stringify(jsonData)}</div>`;

        // IN TABULAR FORMATTING 

    } catch (e) { 
        console.log("Error is:" + e); 

    } finally { 
        div.removeChild(h2); 
    } 
} 

btn.addEventListener('click', display); 
// result.addEventListener('click', display);