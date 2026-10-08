import React from 'react'
import { useState } from 'react';
import cat from '../images/cat.png';
function Imagemanipulation() {

    const[catHeight, setCatHeight]= useState(200);
    const[catWidth, setCatWidth]= useState(200);
    function setHeight(){
        setCatHeight(catHeight+10);
    }
    function setWidth(){
        setCatWidth(catWidth+10);
    }
    return (
        <div>
            <h2 style = {{color: 'red', backgroundColor: 'black'}}>Imagemanipulation</h2>
            <div style = {{border: '2px solid red', height: '400px', width: '400px', padding: '20px'}}>
            <img src = {cat} height = {catHeight} width ={catWidth}></img>
            </div>
            <div>
                <button onClick={setHeight}>enhanceHeight</button>
                <button onClick={setWidth}>enhanceWidth</button>
            </div>

        </div>

    )
}
export default Imagemanipulation