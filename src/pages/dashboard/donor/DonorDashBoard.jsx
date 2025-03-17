import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DonorDashboardTable from "./DonorDashboardTable";

const DonorDashBoard = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosPublic = useAxiosPublic();

  const { data: donations = [], refetch, isLoading: loading} = useQuery({
    queryKey: ["donor", user?.email],
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/donations?donor=${user?.email}&limit=${3}`
      );
      return response.data; // Ensure data is returned
    },
  });

  console.log(donations);
  if(loading){
    return <p>data is loading</p>
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl uppercase bg-slate-400 p-5">
        Welcome {user?.displayName}
      </h1>
      <div>
        <div className="overflow-x-auto">
          {donations.length > 0 ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="relative">
                {donations.map((donation) => (
                  <DonorDashboardTable
                    key={donation._id}
                    donation={donation}
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
