const div = document.getElementById('container')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
console.log(div);
async function display() {
    // div.innerHTML = `<h1 style = 'color: blue;background-color: lightgray;'>Welcome to DOM Manipulation</h1>`;
    const serverdata = await fetch('https://fakestoreapi.com/products')
               const jsondata = await serverdata.json()
       console.log(jsondata);
       console.log(jsondata[0]);
       result.innerHTML = `<div>${jsondata[0].title}</div>`;
}
btn.addEventListener('click', display);
result.addEventListener('click', display);