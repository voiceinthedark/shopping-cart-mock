import './product-card.scss'
const ProductCard = () => {
  return (
    <div className="product-card">
      <img className="product-image" src="https://placehold.co/180x320" alt="image" />
      <div className="product-info">
        <div className="product-title">
          <h3>product title</h3>
          <h4>brand</h4>
        </div>
        <div className="product-price">
          <span>price</span>
          <span>rating</span>
        </div>
      </div>
      <ul className="product-tags">
        tags
      </ul>
    </div>
  )
}

export default ProductCard
