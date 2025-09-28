import Tag from '../ui/Tag'
import { Star } from 'lucide-react'
import './product-card.scss'
import PropTypes from 'prop-types'

const ProductCard = ({ product }) => {

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
      <ul className="product-tags">
        {product.tags.map(tag => {
          return <Tag key={tag} tag={tag} />
        })}
      </ul>
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
