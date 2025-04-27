
import Search from '../../SearchPage/Search'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Futured from '../Futured/Futured'
import OurServices from '../Services/OurServices'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <OurServices></OurServices>
        <Futured></Futured>
        <Search></Search>
      </div>
      <Contact></Contact>
    </div>
  )
}

export default Home
