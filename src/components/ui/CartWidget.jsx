import { ShoppingCart } from "lucide-react"
import { Link } from "react-router"
import './cartwidget.scss'

const CartWidget = ({ cart }) => {

  return (
    <Link to={'cart'} className="cart">
      <ShoppingCart size={28} color="white" />
      <span className="amount">{cart.length}</span>
    </Link>
  )
}

export default CartWidget
