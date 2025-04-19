import React from 'react'
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Contact = () => {
  return (
    <div className='contactBg bg-fixed mb-5'>
      <h1 className='text-3xl text-center font-bold pt-4'
        data-aos="zoom-in-down"
        // data-aos-delay="50"
        data-aos-duration="200"
        data-aos-easing="ease-in">Contact with us 📞 <br /> Save Lives with Blood Donation</h1>
      <p className='text-center font-bold'
        data-aos="zoom-in-down"
        // data-aos-delay="50"
        data-aos-duration="200"
        data-aos-easing="ease-in">contact: 017825432653223</p>
    </div>
  )
}

export default Contact
