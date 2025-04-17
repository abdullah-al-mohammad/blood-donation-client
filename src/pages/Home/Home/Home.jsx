
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Futured from '../Futured/Futured'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Futured></Futured>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default Home
