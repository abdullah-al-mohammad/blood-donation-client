// layout/DonorDashboard.jsx
import { NavLink, Outlet } from 'react-router-dom';

const VolunteerDashboard = () => {
  return (
    <div className="lg:flex" id="dashboard">
      <nav className="absolute lg:static z-10 lg:w-1/5 lg:[background:linear-gradient(320deg,#7047472c,#3db1c073,_#1806065c)]">
        <div className="drawer lg:drawer-open min-h-screen z-40">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="swap swap-rotate drawer-button lg:hidden p-2 text-2xl text-bold_red-0 absolute top-3 left-3"
            >
              <input type="checkbox" />
              {/* close icon */}
              <FiMenu />
            </label>
          </div>
          <div className="drawer-side min-h-screen">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="p-4 menu [background:linear-gradient(360deg,#3d111131,#8a0303a0,_#1806065c)] lg:bg-none text-white">
              <span className="flex items-center justify-evenly">
                <img className="w-10 h-10 rounded-full mb-2" src={user?.photoURL} alt="" />
                <h5 className="capitalize">{user?.displayName}</h5>
              </span>
              <div className="divider divider-success">****</div>
              <li className="hover:text-bold_red-0">
                <NavLink to="profile">
                  <FaUser />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="donation-request">
                  <BiSolidDonateBlood />
                  <span>Donation Request</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="home">
                  <FaHome />
                  <span>Volunteer Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="donations">
                  <BiSolidDonateBlood />
                  <span>All Donation Page</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="lg:w-full max-w-screen-2xl lg:pl-10 overflow-x-auto bg-base-100">
        <Outlet />
      </div>
    </div>
  );
};

export default VolunteerDashboard;
