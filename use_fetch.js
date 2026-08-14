const div = document.getElementById('container')
const btn = document.getElementById('btn')
console.log(div);
async function display() {
    // div.innerHTML = `<h1 style = 'color: blue;background-color: lightgray;'>Welcome to DOM Manipulation</h1>`;
    const serverdata = await fetch('https://fakestoreapi.com/products')
       console.log(serverdata);
}
btn.addEventListener('click', display);