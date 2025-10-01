import Tag from '../ui/Tag'
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react'
import './product-card.scss'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router'

const ProductCard = ({ product }) => {
  const { cart, setCart } = useOutletContext()
  const initialAmount = cart.find(item => item.id === product.id)?.amount || 0
  const [amount, setAmount] = useState(initialAmount)
  const [inCart, setInCart] = useState(initialAmount > 0)

  useEffect(() => {
    const itemInCart = cart.find(item => item.id === product.id)
    const cartAmount = itemInCart ? itemInCart.amount : 0
    setAmount(cartAmount)
    setInCart(!!itemInCart)
  }, [cart, product.id])

  const handleCartClick = () => {
    if (cart.findIndex((p) => p.id === product.id) === -1 && amount !== 0) {
      setCart([...cart, { id: product.id, product: product, amount: amount }])
      setInCart(true)
    }
    else if (cart.findIndex((p) => p.id === product.id) >= 0) {
      setCart(() => {
        return cart.filter(p => p.id !== product.id)
      })
      setInCart(false)
    }
  }

  const handleAmountChange = (newAmountValue) => {
    const validatedAmount = Math.max(0, newAmountValue);
    setAmount(validatedAmount); // Update local state immediately for input display

    // If the item is currently in the cart, update its amount in the global cart
    if (inCart) {
      if (validatedAmount === 0) {
        // If amount drops to 0, remove it from the cart
        setCart(prevCart => prevCart.filter(item => item.id !== product.id));
      } else {
        // Otherwise, update the amount
        setCart(prevCart => prevCart.map(item =>
          item.id === product.id ? { ...item, amount: validatedAmount } : item
        ));
      }
    }
    // If not in cart, changing amount here just updates local state.
    // It won't modify the cart until handleCartClick is used to explicitly add it.
  };

  return (
    <div className="product-card">
      <img
        className="product-image"
        // src="https://placehold.co/180x320"
        src={product.images[0]}
        alt="image" />
      <div className="product-info">
        <div className="product-title">
          <h3 className='title'>{product.title}</h3>
          <h4 className='brand'>{product.brand}</h4>
        </div>
        <div className="product-price">
          <div className='price'>${product.price}</div>
          <div className='rating'>
            <span>{product.rating}</span>
            <i><Star size={18} fill='gold' /></i>
          </div>
        </div>
      </div>
      <div className='product-amount'>
        <button onClick={() => handleAmountChange(amount - 1)}>
          <Minus size={24} />
        </button>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={(e) => handleAmountChange(+e.target.value)}
          value={amount}
          min={0} />
        <button onClick={() => handleAmountChange(amount + 1)}><Plus size={24} /></button>

      </div>
      <div className='product-options'>
        <ul className="product-tags">
          {product.tags.map(tag => {
            return <Tag key={tag} tag={tag} />
          })}
        </ul>
        <button
          className='cart-btn'
          onClick={handleCartClick}
        >
          <ShoppingCart size={32} fill={inCart ? 'black' : 'white'} />
        </button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({ 
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default ProductCard
