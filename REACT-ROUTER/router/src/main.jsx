import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


/*importar router */
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
/*import error */
import Errorpage from './router/Errorpage.jsx';
/*contact import */
import Contact from './router/Contact.jsx';




/*Para utilzar  e configurar as rotas */
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Errorpage/>,
  },
  {
    path:"contact",
    element: <Contact/>,
  },
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* substituir o App pelo Router que recebe uma props configurado acima*/}
    <RouterProvider router = {router}/>
  </StrictMode>,
)
