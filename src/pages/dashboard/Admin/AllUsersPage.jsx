import { useQuery } from "@tanstack/react-query";
import AllUsersTable from "./AllUsersTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AllUsersPage = () => {
  const axiosSecure = useAxiosSecure()

  const { data: users = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get("/users")
      return res.data
    }
  })
  return (
    <div>
      <div className="bg-gradient-to-r from-red-500 to-red-300">
        <h1 className="text-center font-bold text-3xl uppercase p-5" data-aos="flip-right">
          All Users Profile Details For Admin
        </h1>
      </div>
      <div>
        <div>
          <table className="table" data-aos="zoom-in-down">
            {/* head */}
            <thead>
              <tr>
                <th>image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="relative">
              {users.map((user) => (
                <AllUsersTable
                  key={user._id}
                  user={user}
                  loading={loading}
                  refetch={refetch}
                ></AllUsersTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsersPage;
