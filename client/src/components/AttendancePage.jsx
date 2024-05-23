import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { server } from "../utils/constants.js";

const AttendancePage = () => {
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
  return (
    <div
      className="min-h-screen bg-gray-700 flex
     justify-center items-center flex-col pt-32"
    >
      <div className="flex flex-row gap-20 text-2xl font-bold mb-5">
        <h1 className="mr-16">Status</h1>
        <h1 className="mr-10">Date</h1>
        <h1 className="ml-10">Shift</h1> 
      </div>
      {userAttendance.map(({ status, date }) => (
        <div>
          <ul className="flex gap-12 text-xl pt-2 pb-5">
            <li className ={status == 'present' ? "text-green-600" : "text-amber-600"}>
                {status.toUpperCase()}</li>
            <li>{date}</li>
            <li>MORNING</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AttendancePage;
