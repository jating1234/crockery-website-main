
import Hero from '../component/Hero/Hero'
import Slider from '../component/slider/Slider'
import Collection from '../component/Hero-Collection/collection'

function Home({cart, setCart}) {

  return (
    <div>
      <Hero/>
      <Slider/>
      <Collection cart={cart} setCart={setCart}/>
    </div>
  )
}

export default Home