import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import AllBloodDonationPageTable from './AllBloodDonationPageTable'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

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
    return <span className="loading loading-spinner loading-xl"></span>
  }
  return (
    <div>
      <h1 className="text-center font-bold text-3xl uppercase bg-slate-400 p-5">
        Welcome {user?.displayName}
      </h1>
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
