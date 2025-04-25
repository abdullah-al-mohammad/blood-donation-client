import service1 from '../../../assets/service1.jpg'
import service2 from '../../../assets/service2.jpg'
import service3 from '../../../assets/service3.jpg'

const OurServices = () => {
  return (
    <div className='font-rubik_storm'>
      <div className='text-center my-10'>
        <p className='font-bold mb-5'>What We Do</p>
        <h1 className='text-6xl capitalize font-bold'>our best services</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center place-items-center my-10'>
        <div className="overflow-hidden md:order-1 p-3">
          <img className='transition-all ease-in-out duration-500 hover:scale-[1.5]' src={service1} alt="" />
        </div>
        <div className="md:float-none float-right md:order-2 p-3">
          <h1 className='text-7xl font-bold text-gray-500 mb-5'>01</h1>
          <h1 className='text-4xl font-bold mb-5 transition-all ease-in-out duration-500 hover:text-[#ef3d32]'>Free Health Checkup Before Donation</h1>
          <p className='mb-5'>Every donor undergoes a basic health screening before donating. We check blood pressure, hemoglobin level, weight, and general health to ensure the safety of both the donor and recipient.</p>
          <button className='capitalize btn [background:linear-gradient(25deg,_red_5%,_white_90%)]'>read more</button>
        </div>
        <div className="overflow-hidden md:order-4 p-3">
          <img className='transition-all ease-in-out duration-500 hover:scale-[1.5]' src={service2} alt="" />
        </div>
        <div className="text-end md:order-3 p-3">
          <h1 className='text-7xl font-bold text-gray-500 mb-5'>02</h1>
          <h1 className='text-4xl font-bold mb-5 transition-all ease-in-out duration-500 hover:text-[#ef3d32]'>Connected Blood Banks</h1>
          <p className='mb-5'>We collaborate with trusted blood banks to ensure safe storage, testing, and distribution of blood. You can easily locate the nearest blood bank through our platform.</p>
          <button className='capitalize btn [background:linear-gradient(25deg,_red_5%,_white_90%)]'>read more</button>
        </div>
        <div className="overflow-hidden hover:bg-black hover:bg-opacity-50 md:order-5 p-3">
          <img className='transition-all ease-in-out duration-500 transform hover:scale-[1.5]' src={service3} alt="" />
        </div>
        <div className="md:order-6 p-3">
          <h1 className='text-7xl font-bold text-gray-500 mb-5'>03</h1>
          <h1 className='text-4xl mb-5 font-bold transition-all ease-in-out duration-500 hover:text-[#ef3d32]'>Donor & Patient Support</h1>
          <p className='mb-5'>We offer 24/7 support for donors and patients—whether you need help booking a donation, locating a blood bank, or making an urgent request.</p>
          <button className='capitalize btn [background:linear-gradient(25deg,_red_5%,_white_90%)]'>read more</button>
        </div>
      </div>
    </div>
  )
}

export default OurServices