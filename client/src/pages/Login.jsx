import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { server } from "../utils/constants.js";
import { Context } from "../main.jsx";

const Login = () => {
  const navigate = useNavigate()
  const { setIsAuthenticated, isAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${server}/users/login`,
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
        position: "top-center",
      });
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      navigate("/food")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    navigate("/food")
  }

  return (
    <div className="min-h-screen flex items-center justify-center
     bg-[#A87676] text-gray-50">
      <div className="bg-[#735751] p-8 pt-8 mb-5
       md:mb-10 md:p-16 md:pt-10 md:pb-12 rounded-lg md:mt-24 mt-16 mr-6 ml-5">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Welcome Back To ANNAPURNA MESS
        </h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col  justify-between ">
            <label htmlFor="fullName">Email:</label>
            <input
              type="text"
              placeholder="enter your email"
              className="outline-none rounded-md py-2 pl-4 bg-[#a78a7f] mt-1 mb-5"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="fullName">Password:</label>
            <input
              type="text"
              placeholder="Enter your password"
              className="outline-none rounded-md py-2 pl-4 bg-[#a78a7f] mt-1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="flex mt-2 ">
              <p>
                Don't have an account <br />
                <Link className="text-blue-400" to="/register">
                  {" "}
                  Sign up
                </Link>
              </p>
              <Link to={"/forgotpassword"} className="ml-5 md:ml-28 text-gray-100">
                Fotgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="py-2 px-10 bg-gradient-to-r
          from-blue-600 to-sky-600 rounded-lg mt-5"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
