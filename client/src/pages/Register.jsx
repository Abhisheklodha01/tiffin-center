import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { server } from "../utils/constants.js";
import { Context } from "../main.jsx";

const Register = () => {
  const navigate = useNavigate()
  const { setIsAuthenticated, isAuthenticated } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${server}/users/signup`,
        {
          fullName,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message, {
        position: "top-center",
      });
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      navigate("/food")
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated === true) {
     navigate("/food")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-100">
      <div className="bg-gray-600 p-8 pt-8 mb-5 md:mb-10 md:p-16 md:pt-8 md:pb-8 rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Welcome to Tifin-Center
        </h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col  justify-between ">
            <label htmlFor="fullName" className="mt-5">
              FullName:
            </label>
            <input
              type="text"
              placeholder="enter your fullname"
              className="outline-none rounded-md py-2 pl-4 bg-gray-500 mt-1 mb-5"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <label htmlFor="fullName">Email:</label>
            <input
              type="text"
              placeholder="enter your email"
              className="outline-none rounded-md py-2 pl-4 bg-gray-500 mt-1 mb-5"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="fullName">Password:</label>
            <input
              type="text"
              placeholder="Enter your password"
              className="outline-none rounded-md py-2 pl-4 bg-gray-500 mt-1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="flex mt-2 ">
              <p>
                Already have an account
                <Link className="text-[#1640D6] ml-2" to="/login">
                  {" "}
                  Login Here
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="py-2 px-10 bg-gradient-to-r
            from-blue-600 to-sky-600 rounded-lg mt-5"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
