// src/router.jsx
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Login from './pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/catalogo',
    element: <Catalog />
  },
  {
    path: '/login',
    element: <Login />
  }
])