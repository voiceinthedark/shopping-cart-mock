import { useLoaderData, useOutletContext } from "react-router"
import CategoryCard from "./CategoryCard"
import './category-list.scss'

const CategoryList = () => {
  const { categories } = useLoaderData()
  const { products } = useOutletContext()

  const filteredProducts = (category) => {
    console.log(products.filter(p => p.category === category))
  }

  return (
    <section className="category-list">
      {categories.map(c => {
        return <CategoryCard key={c} category={c} />
      })}
    </section>
  )
}

export default CategoryList
