import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then((result) => {
        const res = result.user
        console.log(res);

      })
  }
  const navLinks = (
    <>
      {user ? (
        <>
          <li>
            <NavLink to="/dashboard/createDonationRequest">
              Donate Blood
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/adminHome">Funding</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/dashboard/createDonationRequest">
              Donate Blood
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
      <div className="navbar fixed  z-10 max-w-screen-xl opacity-30 text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-10 h-10" src={logo} alt="" />
            <h5>Blood Donation</h5>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user && <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
            >
              <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
            >
              <li>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
              </li>
              <li>
                <button onClick={handleLogout} type="button">Logout</button>
              </li>
            </ul>
          </div>}
        </div>
      </div>
  );
};

export default Navbar;
