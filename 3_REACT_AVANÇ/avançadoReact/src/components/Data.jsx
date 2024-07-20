import {useState}from 'react'

const Data= () => {
    let somaData = 10;

    //useState
    const[anothernamber, setAnotherNamber] = useState(15)
  return (
    <div>
        <div>
            <p>O valor : {somaData}</p>
            <button onClick={()=>{somaData=15}}>Mudar variavel</button>
        </div>
         {/*useState */}
         <div>
            <p>Valor:{anothernamber}</p>
            <button onClick={()=> setAnotherNamber(20)}>Mudar state</button>
         </div>
     
    </div>
  )
}

export default Data
