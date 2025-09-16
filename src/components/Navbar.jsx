import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/Context";

const Navbar = () => {
  const { user, userSignOut, setUser } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/about`}>About</NavLink>
      </li>
      <li>
        <NavLink to={`/career`}>Carreer</NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    userSignOut().then(() => {
      setUser(null);
    });
  };
  return (
    <div className="navbar bg-transparent  mb-6">
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
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="avatar">
          <div className="w-[45px] rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={`${
                user
                  ? user?.photoURL
                  : "https://i.ibb.co.com/NdC6D2X6/default-profile.png"
              }`}
            />
          </div>
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            <h2 className="font-bold">{user?.displayName}</h2>
            <button
              onClick={handleSignOut}
              className="btn bg-[#403f3f] text-white font-[600]"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to={`/signin`}
            className="btn bg-[#403f3f] text-white font-[600]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
