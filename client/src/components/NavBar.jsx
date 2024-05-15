import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Context } from "../main";
import LogoImage from "../assets/Logo.jpg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const LogoutHandler = () => {
    localStorage.removeItem("token");
    setNav(false);
    setIsAuthenticated(false);
  };

  return (
    <div className="bg-gray-600 p-3 text-gray-100 fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between">
        <Link to={"/"} className="text-xl font-bold cursor-pointer">
          <img src={LogoImage} alt="Logo" className="h-16 w-16 rounded-full" />
        </Link>
        <div className="hidden md:inline">
          <ul className="flex flex-row items-center justify-around gap-10 mr-[-20px]">
            <li className="cursor-pointer text-lg hover:text-amber-600">
              <Link to={"/food"}>Food</Link>
            </li>
            <li className="cursor-pointer text-lg hover:text-amber-600">
              <Link to={"/foodprice"}>Food Price</Link>
            </li>
            <li className="cursor-pointer text-lg hover:text-amber-600">
              <Link to={"/contect"}>Contact Us</Link>
            </li>
            <li className="cursor-pointer text-lg hover:text-amber-600">
              <Link to={"/locate"}>Locate Us</Link>
            </li>
            <li className="cursor-pointer text-lg hover:text-amber-600">
              <Link to={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:inline">
          {isAuthenticated ? (
            <ul className="mr-10">
              <Link
                to={"/userprofile"}
                className="py-2 px-4 bg-gradient-to-r
             from-blue-600 to-cyan-600 rounded-lg "
              >
                My Profile
              </Link>
              <Link
                to={"/login"}
                onClick={LogoutHandler}
                className="py-2 px-6 bg-gradient-to-r
             from-blue-600 to-cyan-600 rounded-lg ml-8 "
              >
                Logout
              </Link>
            </ul>
          ) : (
            <ul className="mr-10">
              <Link
                to={"/register"}
                className="py-2 px-4 bg-gradient-to-r
             from-blue-600 to-cyan-600 rounded-lg"
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
          )}
        </div>
        <Link
          to={"/food"}
          className="text-xl  ml-8
          md:hidden py-[5px] px-4 border-2 border-gray-400 rounded-lg"
        >
          Food
        </Link>

        <div className="md:hidden">
          {isAuthenticated ? (
            <Link
              to={"/userprofile"}
              className="py-2 px-4 
              border-2 border-gray-400 rounded-lg text-gray-100"
            >
              My Profile
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="py-2 px-4 
              border-2 border-gray-400 rounded-lg text-gray-100"
            >
              Login
            </Link>
          )}
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer pr-4 mt-4 z-20 "
        >
          {nav ? (
            <FaTimes size={30} className="mr-40" />
          ) : (
            <FaBars size={30} className="mb-4" />
          )}
        </div>

        {nav ? (
          <div className=" flex flex-col bg-gray-700 z-10">
            {isAuthenticated ? (
              <ul
                className="flex flex-col justify-center
                         items-center absolute top-0 left-0
                         w-full h-screen bg-gray-700 text-gray-200 "
              >
                <div className="text-2xl text-center mb-5 font-bold">
                  <li className="cursor-pointer ">
                    <Link to={"/food"} onClick={() => setNav(false)}>
                      Food
                    </Link>
                  </li>
                  <li className="cursor-pointer mt-10 mb-10 ">
                    <Link to={"/foodprice"} onClick={() => setNav(false)}>
                      Food Price
                    </Link>
                  </li>
                  <li className="cursor-pointer mt-10 mb-10">
                    <Link to={"/contect"} onClick={() => setNav(false)}>
                      Contact Us
                    </Link>
                  </li>
                  <li className="cursor-pointer mt-10 mb-10 ">
                    <Link to={"/locate"} onClick={() => setNav(false)}>
                      Locate Us
                    </Link>
                  </li>
                  <li className="cursor-pointer ">
                    <Link to={"/about"} onClick={() => setNav(false)}>
                      About Us
                    </Link>
                  </li>
                </div>
                <li className="x-4 cursor-pointer capitalize py-6 text-4xl">
                  <Link
                    className="py-3 px-6 border-1  rounded-lg
                 bg-gradient-to-r from-sky-600 to-violet-700 text-lg"
                    to="/login"
                    onClick={LogoutHandler}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul
                className="flex flex-col justify-center
                        items-center absolute top-0 left-0
                        w-full h-screen bg-gray-700 text-gray-200 "
              >
                <div className="text-2xl text-center mb-5 font-bold">
                  <li className="cursor-pointer ">
                    <Link to={"/food"} onClick={() => setNav(false)}>
                      Food
                    </Link>
                  </li>
                  <li className="cursor-pointer mt-10 mb-10 ">
                    <Link to={"/foodprice"} onClick={() => setNav(false)}>
                      Food Price
                    </Link>
                  </li>
                  <li className="cursor-pointer mt-10 mb-10">
                    <Link to={"/contect"} onClick={() => setNav(false)}>
                      Contect Us
                    </Link>
                  </li>
                  <li className="cursor-pointer mt-10 mb-10 ">
                    <Link to={"/locate"} onClick={() => setNav(false)}>
                      Locate Us
                    </Link>
                  </li>
                  <li className="cursor-pointer ">
                    <Link to={"/about"} onClick={() => setNav(false)}>
                      About Us
                    </Link>
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
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBar;
