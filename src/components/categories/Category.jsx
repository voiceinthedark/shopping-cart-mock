import { Link, useParams } from "react-router"
import ProductList from "../products/ProductList"
import { useEffect, useState } from "react"
import './category.scss'
// import useSWR from "swr"

const fetcher = (url) => fetch(url).then(res => res.json())

const Category = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { category } = useParams()
  // const { data, error, isLoading } =
    // useSWR(`https://dummyjson.com/products/category/${category}`, fetcher)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`)
        const products = await response.json()
        setData(products.products)
        setIsLoading(false)
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
      }
    }
    fetchProducts()

  }, [])

  if (error) <div>An error occured</div>
  if (isLoading) <div>Loading data...</div>

  return (
    <section className="category">
      <Link className="back-btn" to={'/categories'} >Get Back</Link>
      <h1 className="title">{category}</h1>
      <ProductList data={data} />
    </section>
  )
}

export default Category
