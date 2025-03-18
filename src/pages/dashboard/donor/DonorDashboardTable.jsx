import React from "react";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const DonorDashboardTable = ({ donation }) => {
  const { status, email, donationDateTime, _id, recipientName, district, subDistrict } = donation;
  const [date, time] = donationDateTime.split("T")
  const axiosPublic = useAxiosPublic()

  const handleUpdateStatus = async (newStatus) => {
    const res = await axiosPublic.patch(`/donations/${_id}`, newStatus, {
      headers: { "Content-Type": "text/plain" }
    })
    console.log(res.data);
  }

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">
              {status === "inprogress" || status === "done" || status === "cancelled" ? recipientName : "inprogress"}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">{status === 'inprogress' || status === 'done' || status === 'cancelled' ? email : 'inprogress'}</div>
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
          <summary className={`btn m-1 ${status === "done" ? "text-success" : status === "cancelled" ? "text-red-500" : "text-primary"}`}>{status}</summary>
          {status === "done" || status === "cancelled" ? ""

            : <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <button onClick={() => handleUpdateStatus('inprogress')} type="button">Inprogress</button>
              </li>
              {status === "inprogress" ? (
                <>
                  <li>
                    <button onClick={() => handleUpdateStatus('done')} type="button">Done</button>
                  </li>
                  <li>
                    <button onClick={() => handleUpdateStatus('cancelled')} type="button">Cancelled</button>
                  </li>
                </>
              ) : (
                <li>
                  <button onClick={() => handleUpdateStatus('pending')} type="button">Pending</button>
                </li>
              )}
              <li>
                <Link to={`/dashboardHome/updateDonationRequest/${_id}`}><button onClick={() => handleEdit()} type="button">Edit</button></Link>
              </li>
              <li>
                <button onClick={() => handleUpdateStatus('pending')} type="button">Delete</button>
              </li>
            </ul>}
        </details>
      </th>
    </tr >
  );
};

export default DonorDashboardTable;
