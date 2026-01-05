import { useQuery } from '@tanstack/react-query';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import DonationsTable from './DonationsTable';
import './donor.css';
// ..
AOS.init();

const BloodDonationsPage = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: donations = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ['donor', user?.email],
    queryFn: async () => {
      const response = await axiosPublic.get(`/donations?donor=${user?.email}&limit=${3}`);
      return response.data;
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
        <h1 className="capitalize text-2xl md:text-4xl text-center mb-5">donor dashboard</h1>
        <div className="text-center">
          <Link to={'/'}>
            <button>Home</button>
          </Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-bold_red-0">donor</button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          {donations.length > 0 ? (
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
                {donations.map(donation => (
                  <DonationsTable
                    key={donation._id}
                    donation={donation}
                    refetch={refetch}
                  ></DonationsTable>
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
  );
};

export default BloodDonationsPage;
