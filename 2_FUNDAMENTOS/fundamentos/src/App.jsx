import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//2 - importando componente
import FirstComponents from './assets/components/FirstComponents.jsx'
//4 - template expression
import TemplateExpression from './assets/components/TemplateExpression.jsx'

import MyComponent from './assets/components/MyComponent.jsx'
//evento
import Events from './assets/components/Events.jsx'

function App() {
  // 3- comentários
  return (
      <div className='App'>
        {/*3- comentário JSX */}
        <h1>Fundamentos React</h1>
        <FirstComponents/>
        <TemplateExpression/>
        <MyComponent/>
        <Events/>
     
      </div>
     
  )
}

export default App
