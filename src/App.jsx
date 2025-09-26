import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/home/Home'
import ShopHome from './components/shop/ShopHome'
import MainLayout from './components/layout/MainLayout'

function App() {

  const productsLoader = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const products = await response.json()

    return { products }

  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: 'shop',
          element: <ShopHome />,
          loader: productsLoader,
        }
      ],
    }
  ])

  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App
