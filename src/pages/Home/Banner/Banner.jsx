import { Link } from 'react-router-dom'
import './banner.css'

const Banner = () => {
  return (
    <div className='bannerBg min-h-screen py-28'>
     <div className='text-center'>
     <h1 className='text-5xl font-bold'>Join the Lifesaving Mission <br /> Become a Donor</h1>
     <ul className='mt-5'>
     <li><Link to={'/dashboard/createDonationRequest'}> <button type="button" className='btn btn-neutral '> Join as a donor </button> </Link></li>
     <li><Link to={'/dashboard/allDonationPage'}><button type="button" className='btn btn-neutral mt-5'>Search Donors</button></Link></li>
     </ul>
     </div>
    </div>
  )
}

export default Banner
