import { useQuery } from '@tanstack/react-query';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import AllDonationTable from './AllDonationTable';
import './volunteer.css';
// ..
AOS.init();

const DonationsPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: allDonation = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['allDonation'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/donations`);
      return res.data;
    },
  });
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="loading loading-ring loading-xl"></progress>
      </div>
    );
  }
  return (
    <div>
      <div className="adminBG">
        <h1 className="text-center font-bold text-3xl uppercase p-5 " data-aos="flip-right">
          Welcome {user?.displayName}
        </h1>
      </div>
      <div className="adminBannerBG">
        <h1 className="capitalize text-2xl md:text-4xl text-center mb-5">volunteer home page</h1>
        <div className="text-center">
          <Link to={'/'}>
            <button>Home</button>
          </Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-[#ef3d32]">volunteer</button>
        </div>
      </div>
      <div className="overflow-x-auto">
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
              {allDonation.map(donation => (
                <AllDonationTable
                  key={donation._id}
                  donation={donation}
                  refetch={refetch}
                ></AllDonationTable>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 className="text-center font-light py-56 pl-56">Donations Request is not Found...</h3>
        )}
      </div>
    </div>
  );
};

export default DonationsPage;
