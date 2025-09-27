import ProductCard from "./ProductCard"
import './product-list.scss'

const ProductList = ({ data }) => {

  return (
    <section className="product-list">
      {data.map(d => {
        return <ProductCard key={d.id} product={d} />
      })}
    </section>
  )
}

export default ProductList
