import { Link } from 'react-router-dom'
import './banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
  return (
    <div className='bannerBg min-h-screen py-28'>
      <div className='p-8 text-center md:text-start'>
        <h1 className='text-5xl font-bold'
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out" >Join the Lifesaving Mission <br /> Become a Donor</h1>
        <p className='grid md:grid-cols-2 my-3'
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">Every drop of blood can make a difference. Donating blood is a simple yet powerful way to save lives. Join our mission to ensure that no one has to suffer due to a shortage of blood.</p>
        <ul className='mt-5'>
          <li><Link to={'/donation'}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"> <button type="button" className='btn btn-neutral '> Join as a donor </button> </Link></li>
          <li><Link to={'/search'}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"><button type="button" className='btn btn-neutral mt-5'>Search Donors</button></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Banner
