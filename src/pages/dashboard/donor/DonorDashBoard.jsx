import React, { useContext } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const DonorDashBoard = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosPublic = useAxiosPublic();

  const { data: donations = [] } = useQuery({
    queryKey: ["donor"],
    queryFn: async () => {
      axiosPublic.get(`/donations/donor=${user?.email}&&limit=3`);
    },
  });
  const [status] = donations;
  return (
    <div>
      <h1 className="text-center font-bold text-3xl uppercase bg-slate-400 p-5">
        Welcome {user?.displayName}
      </h1>
      <div>
        <div className="overflow-x-auto">
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
            {donations.length > 0 ? (
              <tbody className="relative">
                {/* row 1 */}
                <tr>
                  {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <details className="dropdown">
                      {/* <summary className="btn m-1">open or close</summary> */}
                      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {donations.status === 'inprogress' ? <>
                        {/* <li>
                        <a>inprogress</a>
                      </li> */}
                      <li>
                        <a>done</a>
                      </li>
                      <li>
                        <a>cancelled</a>
                      </li>
                        </> : <li>
                          <a>pending</a>
                        </li>}
                      </ul>
                    </details>
                  </th>
                  {/* <th>
                    <button className="btn btn-ghost btn-xs">
                      In Progress
                    </button>
                  </th> */}
                </tr>
              </tbody>
            ) : (
              <h3 className="text-center font-light py-56 pl-56">
                Donations Request is not Found...
              </h3>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonorDashBoard;
