import { useLoaderData } from "react-router"
import CategoryCard from "./CategoryCard"
import './category-list.scss'

const CategoryList = () => {
  const { categories } = useLoaderData()

  return (
    <section className="category-list">
      {categories.map(c => {
        return <CategoryCard category={c} />
      })}
      
    </section>
  )
}

export default CategoryList
