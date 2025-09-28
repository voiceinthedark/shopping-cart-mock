import { useLoaderData, useParams } from "react-router"
import ProductList from "../products/ProductList"
import { useEffect, useState } from "react"
import './category.scss'

const Category = () => {
  const [data, setData] = useState([])
  const { products } = useLoaderData()
  const { category } = useParams()

  useEffect(() => {
    setData(products.products.filter(product => product.category === category))
  }, [products, category])

  return (
    <section className="category">
      <h1 className="title">{category}</h1>
      <ProductList data={data} />
    </section>
  )
}

export default Category
