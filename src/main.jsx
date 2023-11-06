import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './Routes/myRoutes'
import AuthContex from './AuthContext/authContex'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContex><RouterProvider router={myRoutes}></RouterProvider></AuthContex>
    
  </React.StrictMode>,
)
