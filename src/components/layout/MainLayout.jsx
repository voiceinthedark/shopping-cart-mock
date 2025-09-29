import { Outlet, useLoaderData } from "react-router"
import Header from "./Header"
import './mainlayout.scss'
import NewsLetter from "./Newsletter"
import Footer from "./Footer"
import { useState } from "react"

const MainLayout = () => {
  const {products} = useLoaderData()
  const [cart, setCart] = useState([])

  return (
    <section className="shop-layout">
      <Header />
      <Outlet context={{products, cart, setCart}} />
      <NewsLetter />
      <Footer />
    </section>
  )
}

export default MainLayout
