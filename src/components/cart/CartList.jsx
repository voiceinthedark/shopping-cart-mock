import ProductCard from "../products/ProductCard"
import './cartlist.scss'

const CartList = ({ cart }) => {
  return (
    <section className="cart-list">
      {cart.map((item) => {
        return (
          <ProductCard
            key={item.id}
            product={item.product}
            itemsCount={item.amount} />
        )
      })
      }
    </section>
  )
}

export default CartList
