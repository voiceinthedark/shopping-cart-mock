import './welcome.scss'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'

const Welcome = () => {

  return (
    <section className="welcome">
      <div className="title">
        <h1>Avantgardia Shopping Center</h1>
      </div>
      <div className="intro">
          <Link to={`shop`} className="shop-btn">
            Shop Now
            <ChevronRight
              size={32}
              color='white'
              strokeWidth={4} />
          </Link>
        <div>
          <p className="intro-desc">
            Welcome to our humble Avantgardia
          </p>
          <p className='intro-desc'>
            A one stop for all your shopping needs
          </p>
        </div>
      </div>
    </section>
  )
}

export default Welcome
