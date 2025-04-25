import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useAuth from '../../../hooks/useAuth'
import MyDonation from './MyDonation'
import { Link } from 'react-router-dom'

const MyDonationRequestPage = () => {
  const axiosPublic = useAxiosPublic()
  const { user } = useAuth()
  const { data: myDonation = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['myDonation'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donations?donor=${user?.email}`)
      return res.data
    }
  })
  return (
    <div>
      <div className="adminBG">
        <h1 className="text-center font-bold text-3xl uppercase p-5 font-sans" data-aos="flip-right">
          Welcome {user?.displayName}
        </h1>
      </div>
      <div className="adminBannerBG">
        <h1 className="capitalize text-4xl text-center mb-5">my donation page</h1>
        <div className="text-center">
          <Link to={'/'}><button>Home</button></Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-[#ef3d32]">donor</button>
        </div>
      </div>
      <div>
        <div>
          {myDonation.length > 0 ? (
            <table className="table">
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
                  <MyDonation key={donation._id} donation={donation} refetch={refetch}></MyDonation>
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

export default MyDonationRequestPage
