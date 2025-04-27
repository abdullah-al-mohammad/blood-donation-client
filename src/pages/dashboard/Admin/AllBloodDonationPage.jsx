import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import AllBloodDonationPageTable from './AllBloodDonationPageTable'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import './admin.css'
import { Link } from 'react-router-dom'

const AllBloodDonationPage = () => {
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const { data: myDonation = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['myDonation'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/donations`)
      return res.data
    }
  })
  if (loading) {
    return <div className='flex justify-center items-center h-screen'>
      <progress className="loading loading-spinner loading-xl"></progress>
    </div>
  }
  return (
    <div>
      <div className='adminBG'>
        <h1 className="text-center font-bold text-3xl uppercase p-5" data-aos="flip-right">
          Welcome {user?.displayName}
        </h1>
      </div>
      <div className="adminBannerBG">
        <h1 className="capitalize text-4xl text-center mb-5">all donor's</h1>
        <div className="text-center">
          <Link to={'/'}><button>Home</button></Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-[#ef3d32]">donor</button>
        </div>
      </div>
      <div>
        <div>
          {myDonation.length > 0 ? (
            <table className="table" data-aos="zoom-in-down">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="relative">
                {myDonation.map((donation) => (
                  <AllBloodDonationPageTable key={donation._id} donation={donation} refetch={refetch}></AllBloodDonationPageTable>
                ))}
              </tbody>
            </table>
          ) : (
            <h3 className="text-center font-light py-56 pl-56">
              Donations Request is not Found...
            </h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllBloodDonationPage
