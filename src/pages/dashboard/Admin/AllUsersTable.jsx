import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsersTable = ({ user, loading, refetch }) => {
  const { name, email, status, image, _id, role, district, subDistrict, blood } = user
  console.log(user);
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const handleUpdateRole = async (newRole) => {
    const userRole = {
      role: newRole
    };
    const res = await axiosSecure.patch(`/users/${_id}`, userRole);
    if (res.data.modifiedCount > 0) {
      refetch()
    }
    console.log(res.data);
  };
  const handleUpdateStatus = async (newStatus) => {
    const userStatus = {
      status: newStatus,
    };
    const res = await axiosSecure.patch(`/users/${_id}`, userStatus);
    if (res.data.modifiedCount > 0) {
      refetch()
    }
    console.log(res.data);
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">
          {name}
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">
          {email}
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">{role}</div>
      </td>
      <td>{status}</td>
      <th>
        <details className="dropdown">
          <summary
            className={`btn m-1 ${status === "active"
              ? "text-success"
              : status === "block"
                ? "text-red-500"
                : "text-primary"
              }`}
          >
            {status === "active" ? "block" : status === "block" ? "unBlock" : status === "unBlock" ? "active" : "volunteer"}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
            <>
              <li>
                <button
                  onClick={() => handleUpdateRole("admin")}
                  type="button"
                >
                  Admin
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleUpdateRole("volunteer")}
                  type="button"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleUpdateStatus("block")}
                  type="button"
                >
                  Block
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleUpdateStatus("unBlock")}
                  type="button"
                >
                  UnBlock
                </button>
              </li>
            </>
          </ul>
        </details>
      </th>
    </tr>
  )
}

export default AllUsersTable