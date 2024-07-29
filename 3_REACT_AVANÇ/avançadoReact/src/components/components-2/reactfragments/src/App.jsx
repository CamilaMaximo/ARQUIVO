import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import ReactFragments from '../../ReactFragments'
//13-children

import Container from '../Container'
//função em prop
import ExecuteFunction from '../ExecuteFunction'
//15-state lift
import Message from '../message'
import changeMessage from '../changeMessage'





function App() {

function showMessage(){
  console.log("Evento componente pai")
};


//15- state lift
const [message, setmessage] = useState("");
//altera mensagem
const handlemessage = (msg) => {
  setmessage(meg);
};

  return (
    <div>
      <ReactFragments/>
      {/*13- children */}
       <Container>
        <p>Algum coisa</p>
       </Container>
       <Container>
        <div>
          <h1>Teste</h1>
          <p>Meu componente</p>
        </div>
       </Container>
       <ExecuteFunction myFunction={showMessage}  />

       {/*esse tem função mensagem */}
       <Message msg={message}/>
       {/*esse a alteração mensagem */}
       <changeMessage handlemessage/>

    </div>
  )
}

export default App
