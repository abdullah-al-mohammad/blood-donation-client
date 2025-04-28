import useAuth from "../../../hooks/useAuth";
import { FaFunnelDollar, FaUser } from "react-icons/fa";
import useUsersProfile from "../../../hooks/useUsersProfile";
import { useQuery } from "@tanstack/react-query";
import { BiSolidDonateBlood } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import './volunteer.css'
import { Link } from "react-router-dom";

const VolunteerHome = () => {
  const { user } = useAuth();
  const [users] = useUsersProfile();

  const {
    data: donation = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["myDonation"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donations`);
      return res.data;
    },
  });
  if (loading) {
    return <div className='flex justify-center items-center h-screen z-10'>
      <progress className="loading loading-ring loading-xl"></progress>
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
        <h1 className="capitalize text-4xl text-center mb-5">volunteer home page</h1>
        <div className="text-center">
          <Link to={'/'}><button>Home</button></Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-[#ef3d32]">volunteer</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <div className="card card-border bg-base-100 min-w-full min-h-full shadow-xl cardBorder" data-aos="zoom-in-down">
          <div className="card-body">
            <div className="flex align-middle justify-between items-center gap-5">
              <div>
                <FaUser className="text-3xl"></FaUser>
              </div>
              <div>
                <h2 className="card-title">Total User : {users.length}</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 min-w-full min-h-full shadow-xl md:my-0 my-5 cardBorder" data-aos="zoom-in-down">
          <div className="card-body">
            <div className="flex align-middle justify-between items-center gap-5">
              <div>
                <BiSolidDonateBlood className="text-3xl"></BiSolidDonateBlood>
              </div>
              <div>
                <h2 className="card-title">
                  Total Donation : {donation?.length}
                </h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 min-w-full min-h-full shadow-xl cardBorder" data-aos="zoom-in-down">
          <div className="card-body">
            <div className="flex align-middle justify-between items-center gap-5">
              <div>
                <FaFunnelDollar className="text-3xl"></FaFunnelDollar>
              </div>
              <div>
                <h2 className="card-title">
                  Total Funding : {donation?.length}
                </h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerHome