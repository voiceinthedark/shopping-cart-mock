import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/home/Home'
import ShopHome from './components/shop/ShopHome'
import MainLayout from './components/layout/MainLayout'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      element: <MainLayout />,
      children: [
        { index: true, path: 'shop', element: <ShopHome /> }
      ],
    }
  ])

  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App
