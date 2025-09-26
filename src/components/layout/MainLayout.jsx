import { Outlet } from "react-router"
import Header from "./Header"
import './mainlayout.scss'
import NewsLetter from "./Newsletter"
import Footer from "./Footer"

const MainLayout = () => {
  return (
    <section className="shop-layout">
      <Header />
      <Outlet />
      <NewsLetter />
      <Footer />
    </section>
  )
}

export default MainLayout
