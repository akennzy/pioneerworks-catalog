import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import NavBar from './components/NavBar.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  )
}