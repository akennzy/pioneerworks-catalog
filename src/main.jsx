import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import NavBar from './components/NavBar'
import './index.css'

function Root() {
  return (
    <RouterProvider router={router}>
      <NavBar />
    </RouterProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)