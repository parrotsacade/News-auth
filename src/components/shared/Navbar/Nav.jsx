import React from "react";
import { Link } from "react-router";

export const Nav = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex justify-between">

        <div>
          <a className="btn btn-ghost lg:text-xl text-sm">News Auth</a>
        </div>

        <div>
          <ul className="flex gap-5">
            <Link to="/" className="btn btn-outline">Home</Link>
            <Link to="/about" className="btn btn-outline">About</Link>
            <Link to="/career" className="btn btn-outline">Career</Link>
          </ul>
        </div>

        <div >
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             
              <li className="btn btn-success">
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};
