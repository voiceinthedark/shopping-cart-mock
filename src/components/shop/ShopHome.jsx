import { useLoaderData } from 'react-router'
import './shophome.scss'
import { useEffect, useState } from 'react'
import ProductList from '../products/ProductList'

const ShopHome = () => {
  const { products } = useLoaderData()
  const [prods, setProds] = useState([])

  useEffect(() => {
    setProds(products.products)
  }, [])

  return (
    <section className="shophome">
      <ProductList data={prods} />
    </section>
  )
}

export default ShopHome
