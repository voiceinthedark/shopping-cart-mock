import { Star } from "lucide-react"
import './productreviews.scss'

const ProductReview = ({ review }) => {
  return (
    <section className="review">
      <div className="review-header">
        <div className="header-left">
          <h3>{review.reviewerName}</h3>
          <h4>{review.reviewerEmail}</h4>
        </div>
        <div className="header-right">
          <h4>{review.date}</h4>
        </div>
      </div>
      <div className="review-comment">
        <div className="rating">
          <p>{review.rating}</p>
          <Star size={28} fill="gold" />
        </div>
        <p className="comment">{review.comment}</p>

      </div>

    </section>
  )
}

export default ProductReview
