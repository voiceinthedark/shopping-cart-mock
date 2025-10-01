import { useParams } from "react-router"
import './product.scss'
import useSWR from "swr"
import { Star } from "lucide-react"
import ProductReview from "./ProductReview"

const fetcher = (url) => fetch(url).then(res => res.json())

const Product = () => {
  const { productId } = useParams()
  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${productId}`, fetcher)

  if (error) throw error
  if (isLoading) return <div>Loading...</div>

  return (
    <section className="product">
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
        <div className="info-product">
          <h2>{`Price $${data.price}`}</h2>
          <h2>{`Stock ${data.stock}`}</h2>
          <div className="info-rating">
            <h2>{`Ratings ${data.rating}`} </h2>
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
              <ProductReview review={review} />
            </>
          )
        })}

      </div>
    </section>
  )
}

export default Product
