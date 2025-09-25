import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/home/Home'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
  ])

  return(
  <RouterProvider router={routes}>
  </RouterProvider>

  )
}

export default App
