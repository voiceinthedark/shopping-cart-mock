import Tag from '../ui/Tag'
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react'
import './product-card.scss'
import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import { useOutletContext } from 'react-router'

const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(0)
  const { cart, setCart } = useOutletContext()
  const [inCart, setInCart] = useState(false)

  const handleCartClick = () => {
    if (cart.findIndex((p) => p.id === product.id) === -1) {
      setCart([...cart, { id: product.id, product: product, amount: amount }])
      setInCart(true)
    }
    else {
      setCart(() => {
        return cart.filter(p => p.id !== product.id)
      })
      setInCart(false)

    }
  }

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
        <button onClick={() => {
          if (amount > 0)
            setAmount(amount - 1)
        }
        }>
          <Minus size={24} />
        </button>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={(e) => setAmount(+e.target.value)}
          value={amount}
          min={0} />
        <button onClick={() => setAmount(amount + 1)}><Plus size={24} /></button>

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
  images: PropTypes.array,
  title: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  tags: PropTypes.array,
}

export default ProductCard
