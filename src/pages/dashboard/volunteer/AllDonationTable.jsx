import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllDonationTable = ({ donation, refetch }) => {
  const {
    status,
    email,
    donationDateTime,
    _id,
    recipientName,
    district,
    subDistrict,
  } = donation;
  const [date, time] = donationDateTime.split("T");
  const axiosSecure = useAxiosSecure()

  const handleUpdateStatus = async (newStatus) => {
    const res = await axiosSecure.patch(`/donations/${_id}`, newStatus, {
      headers: { "Content-Type": "text/plain" },
    });
    if (res.data.modifiedCount > 0) {
      refetch()
    }
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">
              {status === "inprogress" ||
                status === "done" ||
                status === "cancelled"
                ? recipientName
                : "inprogress"}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">
          {status === "inprogress" ||
            status === "done" ||
            status === "cancelled"
            ? email
            : "inprogress"}
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">{date}</div>
      </td>
      <td>
        <div className="text-sm opacity-50">{time}</div>
      </td>
      <td>
        <div className="text-sm opacity-50">{district.value}</div>
        <div className="text-sm opacity-50">{subDistrict.value}</div>
      </td>
      <td>{status}</td>
      <th>
        <details className="dropdown">
          <summary
            className={`btn m-1 ${status === "done"
              ? "text-success"
              : status === "cancelled"
                ? "text-red-500"
                : "text-primary"
              }`}
          >
            {status}
          </summary>
          {status === "done" || status === "cancelled" ? (
            ""
          ) : (
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
              <li>
                <button
                  onClick={() => handleUpdateStatus("inprogress")}
                  type="button"
                >
                  Inprogress
                </button>
              </li>
              {status === "inprogress" ? (
                <>
                  <li>
                    <button
                      onClick={() => handleUpdateStatus("done")}
                      type="button"
                    >
                      Done
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleUpdateStatus("cancelled")}
                      type="button"
                    >
                      Cancelled
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => handleUpdateStatus("pending")}
                    type="button"
                  >
                    Pending
                  </button>
                </li>
              )}
            </ul>
          )}
        </details>
      </th>
    </tr>
  )
}

export default AllDonationTable