import './carttotal.scss'
const CartTotal = ({ cart }) => {
  // calculate total items in cart
  let itemsInCart = cart.reduce((total, item) => total + item.amount, 0)
  let amountTotal = cart.reduce((total, item) => total + ((item.product.price) * item.amount), 0)

  return (
    <section className="cart-info">
      <h1>Total</h1>
      <div className="items">
        <h3>Items in cart</h3>
        <h3>{itemsInCart}</h3>
      </div>
      <div className='amount'>
        <h3>Amount</h3>
        <h3>{`$${amountTotal.toFixed(2)}`}</h3>
      </div>
    </section>

  )
}

export default CartTotal
