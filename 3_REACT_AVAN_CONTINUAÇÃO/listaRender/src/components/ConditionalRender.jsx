import React from 'react'

const ConditionalRender = () => {
    const x = false;

    const name = "joão"
  return (
    <div>
        {/*7- render condicional IF */}
        <h3>Isso será exibidose for true.</h3>
           { x && <p>se x for true, sim!</p>}
        {/*8- else */}
        {name === "joão" ?(<div>
            <p>Olá joão</p></div>):(<div><p>Nome não encontrado</p></div>)}
      
    </div>
  )
}

export default ConditionalRender
