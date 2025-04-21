import React from 'react'
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Contact = () => {
  return (
    <div className='contactBg bg-fixed mb-5' data-aos="fade-up"
      data-aos-easing='ease-in-sine'
      data-aos-duration='2000'>
      <h1 className='text-3xl text-center font-bold pt-4'>Contact with us 📞 <br /> Save Lives with Blood Donation</h1>
      <p className='text-center font-bold'>contact: 017825432653223</p>
    </div>
  )
}

export default Contact
