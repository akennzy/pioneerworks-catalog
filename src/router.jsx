import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Login from './pages/Login'
import Military from './pages/Military'
import Dashboard from './pages/Dashboard'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/catalogo', element: <Catalog /> },
  { path: '/login', element: <Login /> },
  { path: '/militar', element: <Military /> },
  { path: '/dashboard', element: <Dashboard /> },
])