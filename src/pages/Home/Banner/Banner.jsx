import { Link } from 'react-router-dom'
import './banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
  return (
    <div id='banner' className='bannerBg min-h-screen pt-40 mb-40 pb-10 lg:pb-0'>
      <div className='container mx-auto md:text-start text-white text-wrap text-center p-3'>
        <h1 className='text-4xl md:text-6xl font-bold font-rubik_storm'
          data-aos="fade-top"
          data-aos-easing="ease-in-sine"
          data-aos-offset="200"
          data-aos-duration="2000"
          data-aos-once="true"
        >Join the Lifesaving Mission <br /> Become a Donor</h1>
        <p className='grid md:grid-cols-2 py-6 md:text-2xl font-rubik_storm'>Every drop of blood can make a difference. Donating blood is a simple yet powerful way to save lives. Join our mission to ensure that no one has to suffer due to a shortage of blood.</p>
        <ul>
          <li><Link to={'/donation'}
          > <button type="button" className='btn bg-bold_red-0 border-bold_red-0 py-5 px-5 md:px-8 md:py-7 text-lg text-white btn-ripple hover:text-bold_red-0 font-rubik_storm'> Join as a donor </button> </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Banner
