import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './Routes/myRoutes'
import AuthContex from './AuthContext/authContex'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContex><RouterProvider router={myRoutes}></RouterProvider></AuthContex>
    </QueryClientProvider>
  </React.StrictMode>,
)
