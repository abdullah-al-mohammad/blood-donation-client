import React from 'react'

const AllUsersTable = ({user, loading, refetch}) => {
    const {name, email, status, image, _id, role} = user
    console.log(user);

    const handleUpdateStatus = async (newStatus) => {
      const res = await axiosPublic.patch(`/users/${_id}`, newStatus, {
        headers: { "Content-Type": "text/plain" },
      });
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
          <div>
            <div className="font-bold">
              {name}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">
          {email}
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">{status}</div>
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
            {status === "active" && "block"}
          </summary>
          {status === "active"  ? (
            ""
          ) : (
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                <>
                 {status === "active" && <li>
                    <button
                      onClick={() => handleUpdateStatus("block")}
                      type="button"
                    >
                      Block
                    </button>
                  </li>}
                </>
                <li>
                  <button
                    onClick={() => handleUpdateStatus("unBlock")}
                    type="button"
                  >
                    UnBlock
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleUpdateStatus("admin")}
                    type="button"
                  >
                    Admin
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleUpdateStatus("volunteer")}
                    type="button"
                  >
                    Volunteer
                  </button>
                </li>
            </ul>
          )}
        </details>
      </th>
    </tr>
  )
}

export default AllUsersTable