import React from 'react'
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Contact = () => {
  return (
    <div className='contactBg bg-fixed mb-5'>
      <div className='container mx-auto bg-opacity-50 bg-black py-32'
        data-aos="fade-up"
        data-aos-easing='ease-in-sine'
        data-aos-duration='1000'>
        <h1 className='text-3xl text-center font-bold font-sans pt-5 mb-5'>Contact with us 📞 <br /> Save Lives with Blood Donation</h1>
        <p className='text-center font-bold'>contact: 017825432653223</p>
      </div>
    </div>
  )
}

export default Contact
