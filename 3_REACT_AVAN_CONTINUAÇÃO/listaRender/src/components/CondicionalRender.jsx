import React from 'react'

function condicionalRender() {
    const x = true;
  return (
    <div>
        <h3>Resultado aqui</h3>
        { x && <p>aparece true</p>}
      
    </div>
  )
}

export default condicionalRender
