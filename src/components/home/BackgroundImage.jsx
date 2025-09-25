import heroImage from '../../assets/images/47177.jpg'
import './background_image.scss'

const BackgroundImage = () => {
  return (
    <img
      className='hero-image'
      src={heroImage}
      alt="hero image banner" />
  )
}

export default BackgroundImage
