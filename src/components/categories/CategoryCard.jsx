import { Link } from 'react-router'
import { categoriesMap } from '../../assets/images/images'
import './category-card.scss'

const CategoryCard = ({ category }) => {
  return (
    <Link to={`${category}`}>
      <div className="category-card">
        <img
          className="category-img"
          src={categoriesMap.get(category)}
          alt='category image' />
        <div className='category-title'>
          <h2>{category}</h2>
        </div>

      </div>
    </Link>
  )
}

export default CategoryCard
