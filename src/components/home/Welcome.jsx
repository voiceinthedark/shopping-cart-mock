import './welcome.scss'
const Welcome = () => {

  return (
    <section className="welcome">
      <div className="title">
        <h1>Avantgardia Shopping Center</h1>
      </div>
      <div className="intro">
        <button className="shop-btn">Shop Now</button>
        <div>
          <p className="intro-desc">
            Welcome to our humble Vangardia
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
