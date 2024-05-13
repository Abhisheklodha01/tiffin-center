import React, { useContext } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, isAuthenticated } = useContext(Context);
  const navigate = useNavigate()
  if (isAuthenticated === false) {
    navigate("/")
  }

  return (
    <div
      className="w-full h-full flex flex-col bg-gradient-to-b
     from-gray-700 to-gray-600 text-gray-200 items-center justify-center"
    >
      <div className="pb-24 pt-24">
        <p className="text-xl font-semibold">
          FullName: <span className="text-lg">{user?.fullName}</span>
        </p>
        <p className="text-xl font-semibold mt-2 mb-4">
          Email: <span className="text-lg">{user?.email}</span>
        </p>
        <div className="flex items-center justify-center mr-2">
        <Link
        to={"/attendance"}
        className="text-xl py-1 px-2 border-2
         border-amber-600 rounded-md text-center text-amber-600"
        >View Your Attendance</Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
