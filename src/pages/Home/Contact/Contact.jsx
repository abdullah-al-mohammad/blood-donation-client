import React from 'react'
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Contact = () => {
  return (
    <div className='contactBg bg-fixed mb-16'>
      <div className='container mx-auto'>
        <p className='text-center font-bold text-bold_red-0 pb-6'>Join Us</p>
        <h1 className='text-4xl md:text-6xl text-center font-bold pb-6'>Become a Blood Donator</h1>
        <p className='text-center font-bold pb-6 md:text-2xl'>Call Now: 017825432653223</p>
        <address className='text-center'><span>manikganj,</span><span>dhaka,</span> <span>Bangladesh</span></address>
      </div>
    </div>
  )
}

export default Contact
