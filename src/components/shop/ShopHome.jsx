import { useLoaderData } from 'react-router'
import './shophome.scss'
import { useEffect, useState } from 'react'
import ProductList from '../products/ProductList'

const ShopHome = () => {
  const { products } = useLoaderData()
  const [prods, setProds] = useState(null)

  useEffect(() => {
    setProds(products)
  }, [])

  // TODO: MAIN shop section
  return (
    <section className="shophome">
      <ProductList />
    </section>
  )
}

export default ShopHome
