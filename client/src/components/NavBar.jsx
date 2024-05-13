import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-amber-400 py-1 px-6 text-gray-100 sticky top-0 right-0 left-0 z-50">
      <div className="flex items-center justify-between">
       <Link to={'/'}>
        <h1 className="text-xl font-bold cursor-pointer flex justify-center items-center">
           <img  className=" h-20 w-20 pt-3" src="Logo.png" alt="Logo" />
           <span className="flex flex-col text-gray-800">
             <p>ANNAPURNA</p>
             <p>TIFFIN</p>
           </span>
        </h1>
       </Link>
        <div className="hidden md:inline">
          <ul className="flex flex-row items-center justify-around gap-10">
            <li className="cursor-pointer text-lg text-gray-800">
              <Link to={"/food"}>Food</Link>
            </li>
            <li className="cursor-pointer text-lg text-gray-800">
            <Link to={"/foodprice"}>Food Price</Link>
            </li>
            <li className="cursor-pointer text-lg text-gray-800">
              <Link to={"/contect"}>Contact Us</Link>
            </li>
            <li className="cursor-pointer text-lg text-gray-800">
              <Link to={"/locate"}>Locate Us</Link>
            </li>
            <li className="cursor-pointer text-lg text-gray-800">
              <Link to={"/about"}>About Us</Link>
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
                <Link to={"/food"}
                onClick={() => setNav(false)}
                >Food</Link>
              </li>
              <li className="cursor-pointer mt-10 mb-10 ">
               <Link to={"/foodprice"}
               onClick={() => setNav(false)}
               >Food Price</Link>
              </li>
              <li className="cursor-pointer mt-10 mb-10">
                <Link to={"/contect"}
                onClick={() => setNav(false)}
                >Contect Us</Link>
              </li>
              <li className="cursor-pointer mt-10 mb-10 ">
               <Link to={"/locate"}
               onClick={() => setNav(false)}
               >Locate Us</Link>
              </li>
              <li className="cursor-pointer ">
               <Link to={"/about"}
               onClick={() => setNav(false)}
               >About Us</Link>
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
