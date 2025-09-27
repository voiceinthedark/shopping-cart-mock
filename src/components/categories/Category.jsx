import ProductList from "../products/ProductList"

const Category = ({ data }) => {
  return (
    <section className="category">
      <ProductList data={data} />
    </section>
  )
}

export default Category
