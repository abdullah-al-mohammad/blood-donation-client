import React from 'react'
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Contact = () => {
  return (
    <div className='contactBg bg-fixed'>
      <div className='container mx-auto'
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-offset="200"
        data-aos-duration="2000"
        data-aos-once="true">
        <p className='text-center  text-bold_red-0 pb-6'>Join Us</p>
        <h1 className='text-4xl md:text-6xl text-center  pb-6'>Become a Blood Donator</h1>
        <p className='text-center  pb-6 md:text-2xl'>Call Now: 017825432653223</p>
        <address className='text-center'><span>manikganj,</span><span>dhaka,</span> <span>Bangladesh</span></address>
      </div>
    </div>
  )
}

export default Contact
