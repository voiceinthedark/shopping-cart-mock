import { Outlet, useLoaderData } from "react-router"
import Header from "./Header"
import './mainlayout.scss'
import NewsLetter from "./Newsletter"
import Footer from "./Footer"

const MainLayout = () => {
  const {products} = useLoaderData()

  return (
    <section className="shop-layout">
      <Header />
      <Outlet context={products.products} />
      <NewsLetter />
      <Footer />
    </section>
  )
}

export default MainLayout
