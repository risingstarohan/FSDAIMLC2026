const div = document.getElementById('container')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
console.log(div);
const h2 = document.createElement('h2');
h2.innerText = 'Welcome to DOM Manipulation';

console.log(h2);
async function display() {
    try{
        div.appendChild(h2);
    // div.innerHTML = `<h1 style = 'color: blue;background-color: lightgray;'>Welcome to DOM Manipulation</h1>`;
    const serverdata = await fetch('https://fakestoreapi.com/products')
               const jsondata = await serverdata.json()

               div.innerHTML= `<h1 style = 'color: green;background-color: lightgray;'>${jsondata[0].title}</h1>`;
       console.log(jsondata);
       console.log(jsondata[0]);
       result.innerHTML = `<div>${jsondata[0].title}</div>`;
}catch(e){
    console.log("Error is:" + e);
    

} finally{
    div.removeChild(h2);
}
}
btn.addEventListener('click', display);
result.addEventListener('click', display);