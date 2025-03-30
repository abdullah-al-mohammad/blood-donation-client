import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import AllDonationTable from './AllDonationTable'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AllBloodDonation = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const { data: allDonation = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['allDonation'],
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
      <h1 className="text-center font-bold text-3xl uppercase bg-slate-400 p-5" data-aos="fade-left">
        Welcome {user?.displayName}
      </h1>
      <div>
        <div>
          {allDonation.length > 0 ? (
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
                {allDonation.map(donation => <AllDonationTable key={donation._id} donation={donation} refetch={refetch}></AllDonationTable>)}
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

export default AllBloodDonation