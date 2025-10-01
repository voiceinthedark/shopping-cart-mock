import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/home/Home'
import ShopHome from './components/shop/ShopHome'
import MainLayout from './components/layout/MainLayout'
import ErrorPage from './components/error/ErrorPage'
import CategoryHome from './components/categories/CategoryHome'
import Category from './components/categories/Category'
import CartHome from './components/cart/CartHome'
import Product from './components/products/Product'

function App() {

  const productsLoader = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const products = await response.json()
      return { products }

    } catch (error) {
      throw error

    } finally {
    }
  }

  const categoriesLoader = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category-list')
      const categories = await response.json()
      return { categories }

    } catch (error) {
      throw error
    }
    finally {
    }
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
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
        },
        {
          path: 'cart',
          element: <CartHome />
        },
        {
          path: 'product/:productId',
          element: <Product />
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
