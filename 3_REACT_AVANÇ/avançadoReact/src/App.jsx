import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//2 - img assets
import night from "./assets/night.jpg"
//3- useState
import Data from './components/Data'

function App() {
 

  return (
    <div className='App' style={{paddingBottom:"500px"}}>
      <h1>Avançando no React</h1>
      {/*1- imagem em public */}
      <img src="/img.jpg" alt="img-rua" />
       {/*2- imagem em  assets */}
       <img src={night} alt="nigth" />
        {/*3- useState*/}
        <Data/>
       
    </div>
  );
}

export default App
