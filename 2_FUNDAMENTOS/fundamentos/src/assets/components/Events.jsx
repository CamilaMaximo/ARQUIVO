import React from 'react'

const Events = () => {
    const handleClick = (e) => {
        console.log(e)
        console.log("EXECUTOU")
    };

    // 8 - Função de renderização
    const rendersomenthing = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Renderizando outro</h1>
        };
    }

  return (
    <div>
        <div>
            <button onClick={()=> console.log("testando")}>Clique aqui!</button>
        </div>
        {/*7 - evento com função */}
        <div>
            <button onClick={handleClick}>Clique aqui- com função</button>
        </div>
        {/*8 -função com render */}
        {rendersomenthing(true)}
        {rendersomenthing(false)}
    </div>
  )
}

export default Events
