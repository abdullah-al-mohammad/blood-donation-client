
import { FaHome } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
const DashBoardHome = () => {
  return (
    <div>
    <div className="flex">
      <div className="w-64 bg-orange-200 min-h-screen">
        <nav>
          <ul className="p-4">
            <li className="text-black"><NavLink to="dashboardHome"><FaHome></FaHome> Donor Home</NavLink></li>
            <li className="text-black"><NavLink to="myPage"><MdBloodtype/> My Donation Page</NavLink></li>
            <li className="text-black"><NavLink to="createDonationRequest"><BiSolidDonateBlood/>Donation Request</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="p-4 w-full shadow-2xl">
        <Outlet></Outlet>
      </div>
    </div>
  </div>
  )
}

export default DashBoardHome
