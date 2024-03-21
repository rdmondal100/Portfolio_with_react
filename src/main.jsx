import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Blogs from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'home',
        element:<Home/>

      },
      {
        path:'projects',
        element:<Projects/>
      },
      {
        path:'blogs',
        element:<Blogs/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)