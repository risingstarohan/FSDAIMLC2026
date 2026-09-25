import React from 'react';
import { useState } from 'react';

function StateHandling() {

    const [counter, setcounter] = useState(20);
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function incrementCounter() {
        setcounter(counter + 10);
    }

    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }

    return (
        <div style={{border: '2px solid black',height: '300px',width: '300px',background:`rgb(${red},${green},${blue})` ,padding: '20px',textAlign: 'center'}}>

            <h2 style={{ backgroundColor: '', color: 'brown' }}>Counter App</h2>
            <h2 style = {{color:'white'}}>Counter = {counter}</h2>
            <button onClick={incrementCounter} style={{backgroundColor: 'green',color: 'white',padding: '8px 15px',margin: '5px',border: 'none',borderRadius: '100px'}}>Increase</button>

            <button onClick={() => setcounter(counter - 5)}
                style={{backgroundColor: 'maroon',color: 'white',padding: '8px 15px',margin: '5px',border: 'none',borderRadius: '100px'}}>Decrease</button>
            <button onClick={changeBGColor}>changeBGColor</button>
        </div>
    );
}

export default StateHandling;