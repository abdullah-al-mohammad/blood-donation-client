import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DonorDashboardTable from "./DonorDashboardTable";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import './donor.css'
import { Link } from "react-router-dom";

const DonorDashBoard = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: donations = [], refetch, isLoading: loading } = useQuery({
    queryKey: ["donor", user?.email],
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/donations?donor=${user?.email}&limit=${3}`
      );
      return response.data; // Ensure data is returned
    },
  });

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>
      <progress className="loading loading-spinner loading-xl"></progress>
    </div>
  }

  return (
    <div>
      <div className="adminBG">
        <h1 className="text-center font-bold text-3xl uppercase p-5 font-sans" data-aos="flip-right">
          Welcome {user?.displayName}
        </h1>
      </div>
      <div className="adminBannerBG">
        <h1 className="capitalize text-4xl text-center mb-5">donor dashboard</h1>
        <div className="text-center">
          <Link to={'/'}><button>Home</button></Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-[#ef3d32]">donor</button>
        </div>
      </div>
      <div>
        <div>
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
                {donations.map((donation) => (
                  <DonorDashboardTable
                    key={donation._id}
                    donation={donation}
                    refetch={refetch}
                  ></DonorDashboardTable>
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

export default DonorDashBoard;
