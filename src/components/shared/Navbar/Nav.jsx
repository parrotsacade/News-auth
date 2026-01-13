import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";

export const Nav = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  console.log(user?.displayName);
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <div>
          <a className="btn btn-ghost lg:text-xl text-sm font-pacifico">
            News Auth
          </a>
        </div>

        <div>
          <ul className="flex gap-5">
            {/* <Link to="/" className="btn btn-outline">
              Home
            </Link> */}
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active text-white font-medium bg-red-500 rounded-md p-1"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active  text-white font-medium bg-red-500 rounded-md p-1"
                  : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active  text-white font-medium bg-red-500 rounded-md p-1"
                  : ""
              }
            >
              Career
            </NavLink>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user ? (
                  <>
                    <img alt="user" src={user?.photoURL} />
                  </>
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                )}
              </div>
            </div>
            <p className="text-xl text-black">{user?.displayName}</p>
            <div>
              {user ? (
                <button
                  onClick={() => {
                    handleLogOut();
                  }}
                  className="btn btn-warning text-black font-xl font-medium"
                >
                  Log out
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-warning text-black font-xl font-medium">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
