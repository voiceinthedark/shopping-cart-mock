import CategoryCard from "./CategoryCard"
import './category-list.scss'

const CategoryList = () => {
  return (
    <section className="category-list">
      <CategoryCard category='home-decoration' />
      <CategoryCard category='kitchen-accessories' />
      <CategoryCard category='kitchen-accessories' />
      <CategoryCard category='kitchen-accessories' />
      <CategoryCard category='kitchen-accessories' />
      <CategoryCard category='kitchen-accessories' />
      <CategoryCard category='kitchen-accessories' />
    </section>
  )
}

export default CategoryList
