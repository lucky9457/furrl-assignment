import Navbar from '../Navbar'
import '../../Styles/homepage.css'
import Banner from '../Banner'

const Homepage = () => {
  const a = 'a'
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
    </div>
  )
}

export default Homepage
