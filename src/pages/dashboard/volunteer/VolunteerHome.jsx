import useAuth from "../../../hooks/useAuth";
import { FaFunnelDollar, FaUser } from "react-icons/fa";
import useUsersProfile from "../../../hooks/useUsersProfile";
import { useQuery } from "@tanstack/react-query";
import { BiSolidDonateBlood } from "react-icons/bi";

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
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  return (
    <div>
      <h1 className="text-center font-bold text-3xl uppercase bg-slate-400 p-5">
        Welcome {user?.displayName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-5">
        <div className="card card-border bg-base-100 w-64 shadow-xl">
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
        <div className="card card-border bg-base-100 w-64 shadow-xl md:my-0 my-5">
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
        <div className="card card-border bg-base-100 w-64 shadow-xl">
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