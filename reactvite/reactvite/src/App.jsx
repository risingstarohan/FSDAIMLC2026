import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'
import ICardGallery from './component/ICardGallery'
import StateHandling from './component/StateHandling'
import Imagemanipulation from './component/Imagemanipulation'

function App() {
  

  return (
    <div style={{border:'2px solid black', height:'500px'}}>
    
      {/** <ICardGallery /> */}
       {/**<StateHandling />*/}
       <Imagemanipulation/>
     
    </div>
  )
}

export default App
