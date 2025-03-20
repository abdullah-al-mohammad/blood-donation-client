import { useQuery } from "@tanstack/react-query";
import AllUsersTable from "./AllUsersTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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
      <h1 className="text-center font-bold text-3xl uppercase bg-slate-400 p-5">
        All Users Profile Details For Admin
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
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
