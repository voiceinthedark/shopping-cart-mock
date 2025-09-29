import { ShoppingCart } from "lucide-react"
import './cartwidget.scss'

const CartWidget = ({ cart }) => {

  return (
    <button className="cart">
      <ShoppingCart size={28} color="white" />
      <span className="amount">{cart.length}</span>
    </button>
  )
}

export default CartWidget
