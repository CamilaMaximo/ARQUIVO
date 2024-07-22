import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//renderizando lista
import ListRender from './components/ListRender'
//render condicional IF e ELSE
import ConditionalRender from './components/ConditionalRender'
//props
import ShowUsername from './components/ShowUsername'
//desestruturando props
import CarDetails from './components/CarDetails'
// Renderização de listas com componente
const cars = [
{id: 1, brand: "Ferrari", color: "Amarelo", km:"0"},
{id: 1, brand: "KIA", color: "Branco", km:"20000"},
{id: 1, brand: "Renault", color: "Azul", km:"32000"},
];


function App() {
  return (
    
    <div>
      {/*4- render de list */}
      <ListRender/>
       {/*7 - render condicional */}
      <ConditionalRender/>
       {/*8- props*/}
       <ShowUsername name=" Camila"/>
       {/*9- desestruturando props*/}
       <CarDetails brand={" vw"} km={" 999"} color={" vermelho"}/>
       {/*10- reaproveitamento de componentes*/}
       <CarDetails brand={" Fiat"} km={" 349"} color={" Azul"}/>
       <CarDetails brand={" Gol"} km={" 399"} color={" Prata"}/>

       {/*11- renderização de lista com componente- reutilização */},
       {cars.map((car)=>{
        <CarDetails key={cars.id} brand={cars.brand} color={cars.color} km={cars.km}/>
       })}
    </div>
  )
}

export default App
