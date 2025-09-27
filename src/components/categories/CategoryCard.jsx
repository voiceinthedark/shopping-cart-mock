import { categoriesMap } from '../../assets/images/images'
import './category-card.scss'

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img
        className="category-img"
        src={categoriesMap.get(category)}
        alt='category image' />
      <div className='category-title'>
        <h2>{category}</h2>
      </div>

    </div>
  )
}

export default CategoryCard
