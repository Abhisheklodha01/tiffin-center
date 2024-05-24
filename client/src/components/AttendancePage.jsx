import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { server } from "../utils/constants.js";
import { Context } from "../main.jsx";

const AttendancePage = () => {
  const { user } = useContext(Context);
  const token = localStorage.getItem("token");
  const [userAttendance, setUserAttendance] = useState([]);

  useEffect(() => {
    const fetchUserAttendance = async () => {
      const { data } = await axios.get(`${server}/userattendance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserAttendance([...data.UserAttendance]);
      toast.success(data.message, {
        position: "top-center",
      });
    };
    fetchUserAttendance();
  }, []);
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <div
      className="min-h-screen bg-[#15616d] flex
     justify-center items-center flex-col pt-32 text-white"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-8 text-lg">
        <h1 className="text-xl">
          Name: <span>{user.fullName}</span>
        </h1>
        <h1 className="text-xl">
          Email: <span>{user.email}</span>
        </h1>
      </div>
      <div className="flex flex-row gap-16 md:gap-20 text-2xl font-bold mb-5">
        <h1 className="md:mr-10">Status</h1>
        <h1 className="md:mr-10">Date</h1>
        <h1 className="md:mr-4 ml-4">Shift</h1>
      </div>
      {userAttendance.map(({ status, date }) => (
        <div>
          <ul className="flex gap-8 md:gap-12 text-xl pt-2 pb-5 m-2">
            <li
              className={
                status == "present" ? "text-green-500" : "text-amber-500"
              }
            >
              {status.toUpperCase()}
            </li>
            <li className="md:mr-12 md:ml-12">{formatDateString(date)}</li>
            <li>MORNING</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AttendancePage;
