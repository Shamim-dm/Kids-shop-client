// import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../../provider/AuthProviders";
import { useContext } from "react";


const Navbar = () => {

  


  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="   py-3 px-2">
      <div className="navbar rounded-2xl ">
        <div className="navbar-start">
          <div className="dropdown font-bold">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 "
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-white bg-slate-900   "
            >
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li tabIndex={0}>
                <ActiveLink to="/allToys" className="justify-between">
                  All Toys
                </ActiveLink>
              </li>

               {user && (
             <li>
             <ActiveLink to="/myToys">My Toys</ActiveLink>
           </li>
          )}
            {user && (
            <li>
            <ActiveLink to="/addToys">Add Toys</ActiveLink>
          </li>
          )}

              <li>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
              </li>
              <li>
              {user ? (
            <Link onClick={handleLogout} className="btn text-xs bg-purple-900">
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="btn ">
              Login
            </Link>
          )}
              </li>
            </ul>
          </div>
          <img
            className=" h-14 mr-2"
            src="https://i.ibb.co/mXpbrCL/toys-logo-vector-template-bear-260nw-1019682181.webp"
            alt=""
          />
      
          <h2 className="text-xl md:text-3xl font-bold "><span className="text-red-800">Kids</span><span className="text-sky-800">Toys</span></h2>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li tabIndex={0}>
              <ActiveLink to="/allToys">All Toys</ActiveLink>
            </li>
            {/* <li>
              <ActiveLink to="/myToys">My Toys</ActiveLink>
            </li>

            <li>
              <ActiveLink to="/addToys">Add Toys</ActiveLink>
            </li> */}

            {user && (
             <li>
             <ActiveLink to="/myToys">My Toys</ActiveLink>
           </li>
          )}
            {user && (
            <li>
            <ActiveLink to="/addToys">Add Toys</ActiveLink>
          </li>
          )}




            <li>
              <ActiveLink to="/blogs">Blogs</ActiveLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <div className="form-control  hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>

          {user && (
            <img
              className="w-12 h-12 c rounded-full"
              src="https://img.freepik.com/free-icon/user_318-159711.jpg"
            />
          )}

          {user ? (
            <Link onClick={handleLogout} className="btn text-xs hidden  md:grid  bg-purple-900">
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="btn hidden md:grid">
              Login
            </Link>
          )}


        </div>
      </div>
    </div>
  );
};

export default Navbar;
