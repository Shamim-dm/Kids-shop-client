// import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
// import { AuthContext } from '../../../provider/AuthProviders';

// import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext)
  // const handleLogout = () => {
  //     logOut()
  //         .then()
  //         .catch(error => console.log(error));
  // }
  return (
    <div className="   py-3 px-2">
      <div className="navbar rounded-2xl bg-slate-600">
        <div className="navbar-start">
          <div className="dropdown font-bold">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 "
            >
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li tabIndex={0}>
                <ActiveLink to="/allToys" className="justify-between">
                  All Toys
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/myToys">My Toys</ActiveLink>
              </li>

              <li>
                <ActiveLink to="/addToys">Add Toys</ActiveLink>
              </li>

              <li>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
              </li>
            </ul>
          </div>
          <img
            className="w-16 h-12 mr-2"
            src="https://w7.pngwing.com/pngs/425/792/png-transparent-model-car-toy-toys-child-photography-truck-thumbnail.png"
            alt=""
          />
          <a className=" font-bold normal-case text-xl  md:text-3xl">
            T<span className="text-red-500">oy</span>s{" "}
            <span className="text-sky-600">Veh</span>ic
            <span className="text-red-800">les</span>
          </a>
        </div>
        <div className="navbar-center hidden text-white lg:flex">
          <ul className="menu menu-horizontal px-1  ">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li tabIndex={0}>
              <ActiveLink to="/allToys">All Toys</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/myToys">My Toys</ActiveLink>
            </li>

            <li>
              <ActiveLink to="/addToys">Add Toys</ActiveLink>
            </li>

            <li>
              <ActiveLink to="/blogs">Blogs</ActiveLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          {/* {
                        user && <img className='w-12 h-12 c rounded-full' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
                    }
                    {user ? <Link onClick={handleLogout} className="btn text-xs  bg-purple-900">Logout</Link> :
                        <Link to='/login' className="btn">Login</Link>} */}

          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
