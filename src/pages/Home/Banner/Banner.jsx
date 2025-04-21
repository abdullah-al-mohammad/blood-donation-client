import { Link } from 'react-router-dom'
import './banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
  return (
    <div id='banner' className='bannerBg min-h-screen py-32 relative'>
      <div className='container mx-auto md:text-start text-white text-wrap text-center mt-10'>
        <h1 className='text-6xl font-bold font-sans'
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
          data-aos-duration="2000"
        >Join the Lifesaving Mission <br /> Become a Donor</h1>
        <p className='grid md:grid-cols-2 my-5 text-2xl'>Every drop of blood can make a difference. Donating blood is a simple yet powerful way to save lives. Join our mission to ensure that no one has to suffer due to a shortage of blood.</p>
        <ul className='mt-5'>
          <li><Link to={'/donation'}
          > <button type="button" className='btn btn-error px-8 py-7 text-lg text-white btn-ripple hover:text-red-500'> Join as a donor </button> </Link></li>
          {/* <li><Link to={'/search'}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"><button type="button" className='btn btn-primary mt-5'>Search Donors</button></Link></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Banner
