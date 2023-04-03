import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//usados
import App from './App'
import { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'

//rotas
import Home from './routes/Home'
import HomeFunc from './routes/HomeFunc'
import Lermais from './routes/Lermais'
import AddLivro from './routes/AddLivro'
import Edit from './routes/Edit'
import Singin from './routes/Singin'
import Singnup from './routes/Singnup'
import FormADM from './routes/FormADM'
import QuemSomos from './routes/QuemSomos'
import useAuth from './hooks/useAuth'

const Private = ({Item}) => {
  const signed = false;

  return signed > 0 ? <Item /> : <AddLivro />;
};



const router = createBrowserRouter([
  {
    element:<App />,
    children: [
      {
        path: "*",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />,        
      },
      {
        path: "/homeFunc",
        element: <HomeFunc />,        
      },
      {
        path: "/lermais/:id",
        element: <Lermais />,
      },
      {
        path: "/post",
        element: <Private Item= {AddLivro} />
      },
      {
        path: "/edit/:id",
        element: <Edit/>
      },
      {
        path: "/singin",
        element: <Singin/>
      },
      {
        path: "/Singnup",
        element: <Singnup/>
      },
      {
        path: "/quemsomos",
        element: <QuemSomos />
      },
      {
        path: "/formadm",
        element: <FormADM />
      },
      

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
