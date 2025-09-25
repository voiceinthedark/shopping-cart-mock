import './hero.scss'
import BackgroundImage from './BackgroundImage'
import Welcome from './Welcome'

const Hero = () => {
  return (
    <section className='hero'>
      <BackgroundImage />
      <Welcome />
    </section>
  )
}

export default Hero
