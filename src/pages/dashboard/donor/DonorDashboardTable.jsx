import React from "react";

const DonorDashboardTable = ({ donation }) => {
  const { name, status, email, donationDateTime } = donation;
  const [date, time] = donationDateTime.split("T")
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">
              {status === "inprogress" ? name : "inprogress"}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">{status === 'inprogress' ? email : 'inprogress'}</div>
      </td>
      <td>
        <div className="text-sm opacity-50">{date}</div>
      </td>
      <td>
        <div className="text-sm opacity-50">{time}</div>
      </td>
      <td>Purple</td>
      <th>
        <details className="dropdown">
          {/* <summary className="btn m-1">open or close</summary> */}
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            {donation.status === "inprogress" ? (
              <>
                {/* <li>
                        <a>inprogress</a>
                      </li> */}
                <li>
                  <button onClick={handleDone}>done</button>
                </li>
                <li>
                  <button>cancelled</button>
                </li>
              </>
            ) : (
              <li>
                <button>pending</button>
              </li>
            )}
          </ul>
        </details>
      </th>
    </tr>
  );
};

export default DonorDashboardTable;
