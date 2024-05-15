import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => console.error(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/rooms">Rooms</Link>
      </li>

      <li>
        <Link to="/myBookings">My Bookings</Link>
      </li>

      <li>
        <Link>About Us</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-cyan-950 text-slate-200 ">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-cyan-900 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <h2 className="btn btn-ghost text-xl lg:text-3xl font-extrabold">
            Gringotts
          </h2>
        </Link>
      </div>
      <div className="navbar-center">
        <img className="w-28 " src={logo} alt="" />
      </div>

      <div className="navbar-end">
        <div className=" hidden  lg:flex">
          <ul className="menu menu-horizontal px-1 bg-cyan-900 mr-3 drop-shadow-2xl">
            {navItems}
          </ul>
        </div>
        <div>
          {user ? (
            <>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  className="tooltip user-profile mr-2 md:mr-4 btn m-1 bg-cyan-950 border-none"
                  data-tip={user.displayName}
                >
                  <img
                    className="profile-picture  w-12 h-12 rounded-full "
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>

                <button
                  tabIndex={0}
                  className="btn text-sky-900 dropdown-content  menu z-[2]  shadow  rounded-box "
                  onClick={handleLogout}
                >
                  LogOut
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <button className="btn text-sky-900">Login</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
