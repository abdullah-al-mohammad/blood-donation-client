
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";
import useAdmin from "../../hooks/useAdmin";
import { useDonor } from "../../hooks/useDonor";
import useVolunteer from "../../hooks/useVolunteer";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isDonor] = useDonor();
  const [isVolunteer] = useVolunteer();
  return (
    <div className="lg:flex">
      <nav className="absolute lg:static z-10 lg:w-1/5 lg:[background:linear-gradient(90deg,_black,_black,_#ef3d32)]">
        <div className="drawer lg:drawer-open lg:min-h-screen z-40">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="swap swap-rotate drawer-button lg:hidden p-2 text-2xl text-bold_red-0 absolute top-3 left-3"
            >
              <input type="checkbox" />
              {/* close icon */}
              <FiMenu></FiMenu>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="p-4 menu [background:linear-gradient(90deg,_black,_black,_#ef3d32)] lg:bg-none text-white">
              <li className="btn btn-active btn-error">
                <NavLink to="profile">
                  <FaUser></FaUser>
                  <span>Profile</span>
                </NavLink>
              </li>
              <div className="divider divider-success">****</div>
              <li>
                <NavLink to="/dashboard/createDonationRequest">
                  <BiSolidDonateBlood />
                  <span>Donation Request</span>
                </NavLink>
              </li>
              {isDonor && (
                <>
                  <li>
                    <NavLink to="/dashboard/dashboardHome">
                      <FaHome></FaHome>
                      <span>Donor Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myPage">
                      <MdBloodtype />
                      <span>My Donation Page</span>
                    </NavLink>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li>
                    <NavLink to="/dashboard/adminHome">
                      <FaHome></FaHome>
                      <span>Admin Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allUsers">
                      <FaUser></FaUser>
                      <span>All Users</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allDonationPage">
                      <BiSolidDonateBlood />
                      <span>All Donation</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/contentManagement">
                      <BiBookContent />
                      <span>Content Management</span>
                    </NavLink>
                  </li>
                </>
              )}
              {isVolunteer && (
                <>
                  <li>
                    <NavLink to="/dashboard/volunteerHome">
                      <FaHome></FaHome>
                      <span>Volunteer Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allDonation">
                      <BiSolidDonateBlood />
                      <span>All Donation Page</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="lg:w-full max-w-screen-xl lg:mx-auto p-3 overflow-x-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
