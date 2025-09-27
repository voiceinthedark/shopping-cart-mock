import Tag from '../ui/Tag'
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
          <div className='rating'>{product.rating}</div>
        </div>
      </div>
      <ul className="product-tags">
        {product.tags.map(tag => {
          return <Tag tag={tag} />
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
