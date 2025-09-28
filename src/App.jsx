import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/home/Home'
import ShopHome from './components/shop/ShopHome'
import MainLayout from './components/layout/MainLayout'
import { useState } from 'react'
import ErrorPage from './components/error/ErrorPage'
import CategoryHome from './components/categories/CategoryHome'
import Category from './components/categories/Category'

function App() {
  const [isLoading, setIsloading] = useState(true)
  const [error, setError] = useState(null)

  const productsLoader = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const products = await response.json()
      setIsloading(false)
      return { products }

    } catch (error) {
      setError(error)
      setIsloading(false)

    } finally {
      setIsloading(false)

    }
  }

  const categoriesLoader = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category-list')
      const categories = await response.json()
      setIsloading(false)
      return { categories }

    } catch (error) {
      setError(error)
      setIsloading(false)
    }
    finally {
      setIsloading(false)
    }
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      element: <MainLayout />,
      loader: productsLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: 'shop',
          element: <ShopHome />,
          loader: productsLoader,

        },
        {
          path: 'categories',
          element: <CategoryHome />,
          loader: categoriesLoader,
        },
        {
          path: 'categories/:category',
          element: <Category />,
          loader: productsLoader,
        },



      ],
    }
  ])

  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App
