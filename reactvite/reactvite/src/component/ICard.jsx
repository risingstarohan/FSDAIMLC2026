import React from 'react'

function ICard(props) {
   
  return (
    <div style={{border:'10px solid red', height:'300px', width:'200px', marginTop:'100px'}}>
        <h2 style={{backgroundColor:'brown',color:'white'}}>ABES Engineering College</h2>
    <img src={props.pic} height={50} width={50}></img>
    <h3>Roll:{props.roll}</h3>
    <h3>Name:{props.name}</h3>
    <h3>Branch:{props.branch}</h3>
      {/* <h2 style={{color:'red'}}>Welcome to React using Vite</h2> */}
      

    </div>
  )
}

export default ICard