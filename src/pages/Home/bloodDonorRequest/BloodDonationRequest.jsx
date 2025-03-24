import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import { Link } from 'react-router-dom'

const BloodDonationRequest = () => {
  const axiosPublic = useAxiosPublic()
  const { data: donors = [], refetch } = useQuery({
    queryKey: ['donors'],
    queryFn: async () => {
      const res = await axiosPublic.get('donations')
      return res.data
    }
  })
  return (
    <div className="overflow-x-auto pt-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Date & Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {
            donors
              .filter(donor => donor.status === 'pending')
              .map((donor, index) => (
                <tr key={donor._id}>
                  <th>{index + 1}</th>
                  <td>{donor.recipientName}</td>
                  <td>
                    {donor.district.value},
                    {donor.subDistrict.value}
                  </td>
                  <td>{donor.donationDateTime.split('T')}</td>
                  <td><Link to={`/donationDetails/${donor._id}`}>View</Link></td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default BloodDonationRequest