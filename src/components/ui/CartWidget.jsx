import { ShoppingCart } from "lucide-react"
import './cartwidget.scss'

const CartWidget = () => {
  return (
    <button className="cart">
      <ShoppingCart size={28} color="white" />
    </button>
  )
}

export default CartWidget
