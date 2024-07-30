import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//2-css de componentes
import MyComponents from './components/MyComponents'
import Title from './components/Title'

function App() {
  //4-css inline dinâmico
 const n = 15;
 //classes dinâmicas
const  redTitle = true
  return (
  

    <div className='App'>
      {/*1-css global */}
      <h1>CSS no react</h1>
     {/*2-css de componentes */}
     <MyComponents/>
     <p>pegou o CSS do componente</p>
       {/*3- inline style*/}
      <p style={{color:"blue", padding:"25px", borderBottom:"3px solid black"}}>Este elemento tem estilos Inline</p>
      {/*4 - inline style dinâmico */}
        <h1 style={n > 10 ?{color:"purple"}:{color:"magenta"}}>CSS dinâmico</h1>

        <h1 style={n > 20 ?{color:"purple"}:{color:"magenta"}}>CSS dinâmico</h1>
       {/* 5- class dinâmicas*/}
       <h2 className={redTitle ? "red-title":"title"}>Este título vai ter uma classe</h2>
       {/*6- classes dinâmicas */}
       <Title/>

    </div>
  )
}

export default App
