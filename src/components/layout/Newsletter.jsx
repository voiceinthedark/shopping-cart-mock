import { Link } from 'react-router'
import './newsletter.scss'

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className='newsletter-menu'>
        <h2>Menu</h2>
        <ul>
          <li><Link to={'shop'}>Shop</Link></li>
          <li><Link to={'categories'}>Category</Link></li>
          <li><Link>About</Link></li>
        </ul>
      </div>
      <div className='newsletter-sub'>
        <h2>NewsLetter</h2>
        <button>Subscribe</button>
      </div>
      <div className='newsletter-avant'>
        <h2>AvantGardia</h2>
        <p>One hall mall</p>

      </div>
    </section>
  )
}

export default NewsLetter
