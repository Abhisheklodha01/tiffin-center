import React, { useContext, useState } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast'
import { server } from "../utils/constants.js";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `${server}/users/forgotpassword`,
        {
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
        position: "top-center"
      })
      navigate("/login")
    } catch (error) {
      toast.error(error.response.message, {
        position: "top-center"
      })
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-100">
      <div className="bg-gray-600 p-8 pt-8 mb-5 md:mb-10 md:p-16 md:pt-10 md:pb-12 rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Forgot Password
        </h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col  justify-between ">
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
            <button
              type="submit"
              className="py-2 px-10 bg-gradient-to-r
          from-blue-600 to-sky-600 rounded-lg mt-5"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
