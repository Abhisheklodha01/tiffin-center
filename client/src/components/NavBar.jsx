import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-gray-600 py-5 px-6 text-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold cursor-pointer">
          Tifin-<span className="text-amber-500">Center</span>
        </h1>
        <div className="hidden md:inline">
          <ul className="flex flex-row items-center justify-around gap-10">
            <li className="cursor-pointer text-lg hover:text-amber-600">
              Food
            </li>
            <li className="cursor-pointer text-lg hover:text-amber-600">
              Food Price
            </li>
            <li className="cursor-pointer text-lg hover:text-amber-600">
              Contect Us
            </li>
            <li className="cursor-pointer text-lg hover:text-amber-600">
              Locate Us
            </li>
          </ul>
        </div>
        <div className="hidden md:inline">
          <ul className="mr-10">
            <Link
              to={"/register"}
              className="py-2 px-4 bg-gradient-to-r
             from-blue-600 to-cyan-600 rounded-lg  "
            >
              Sign up
            </Link>
            <Link
              to={"/login"}
              className="py-2 px-6 bg-gradient-to-r
             from-blue-600 to-cyan-600 rounded-lg ml-8  "
            >
              Login
            </Link>
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer pr-4 mt-4 z-20 "
        >
          {nav ? <FaTimes size={30} className="mr-24" /> : <FaBars size={30} />}
        </div>

        {nav ? (
          <div className=" flex flex-col bg-gray-700 z-10">
            <ul
              className="flex flex-col justify-center
                          items-center absolute top-0 left-0
                          w-full h-screen bg-gray-700 text-gray-200 "
            >
              <div className="text-2xl text-center mb-5 font-bold">
              <li className="cursor-pointer ">
                Food
              </li>
              <li className="cursor-pointer mt-10 mb-10 ">
                Food Price
              </li>
              <li className="cursor-pointer mt-10 mb-10">
                Contect Us
              </li>
              <li className="cursor-pointer ">
                Locate Us
              </li>
              </div>
              <li className="x-4 cursor-pointer capitalize py-6 text-4xl">
                <Link
                  className="py-3 px-4 border-1  rounded-lg
                  bg-gradient-to-r from-cyan-600 to-blue-600 text-lg"
                  to="/register"
                  onClick={() => setNav(false)}
                >
                  Sign Up
                </Link>
              </li>
              <li className="x-4 cursor-pointer capitalize py-6 text-4xl">
                <Link
                  className="py-3 px-6 border-1  rounded-lg
                  bg-gradient-to-r from-sky-600 to-violet-700 text-lg"
                  to="/login"
                  onClick={() => setNav(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBar;
