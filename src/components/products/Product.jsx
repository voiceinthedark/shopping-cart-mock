import { useParams } from "react-router"
import './product.scss'
import useSWR from "swr"
import { Star } from "lucide-react"
import ProductReview from "./ProductReview"
import { Link, useNavigate } from "react-router"

const fetcher = (url) => fetch(url).then(res => res.json())

const Product = () => {
  const { productId } = useParams()
  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${productId}`, fetcher)

  const navigate = useNavigate()

  if (error) throw error
  if (isLoading) return <div>Loading...</div>

  return (
    <section className="product">
      <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
      <div className="product-title">
        <h1 className="title">{data.title}</h1>
        <h2 className="brand">{data.brand}</h2>
      </div>
      <div className="info">
        <div className="info-image">
          <img src={data.images[0]} alt="" />
          <p className="description">{data.description}</p>
          <span className="discount">-{data.discountPercentage}%</span>
        </div>
        <div className="info-stock">
          <p>Items in stock {data.stock}</p>
        </div>
        <div className="info-product">
          <p>{`Price $${data.price}`}</p>
          <p>{`Stock ${data.stock}`}</p>
          <div className="info-rating">
            <p>{`Ratings ${data.rating}`} </p>
            <Star size={28} fill="gold" />
          </div>

        </div>

      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        {data.reviews.map(review => {
          return (
            <>
              <hr className="seperator" />
              <ProductReview key={review.date} review={review} />
            </>
          )
        })}

      </div>
    </section>
  )
}

export default Product
