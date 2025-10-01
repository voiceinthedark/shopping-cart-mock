import { useOutletContext } from "react-router"
import CartList from "./CartList"
import './carthome.scss'
import CartTotal from "./CartTotal"

const CartHome = () => {
  const { cart } = useOutletContext()

  return (
    <section className="cart-home">
      <CartList cart={cart} />
      <CartTotal cart={cart} />
    </section>
  )
}

export default CartHome
