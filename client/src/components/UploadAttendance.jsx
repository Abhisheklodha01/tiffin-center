import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../utils/constants.js";

const UploadAttendance = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${server}/users/getusers`);
        setUsers([...data.users]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div
      className="min-h-screen bg-[#15616d] flex
     justify-center items-center flex-col pt-32 text-white"
    >
      {users.map(({ _id, fullName }) => (
        <div key={_id}>
          <ul
            className="flex justify-center items-center
           flex-col gap-8 md:gap-12 text-xl pt-2 pb-5 m-2"
          >
            <li className="text-center">Name: {fullName.toUpperCase()}</li>
            <form action="" className="ml-10 md:ml-0">
              <input
                type="text"
                placeholder="  Enter status"
                className="outline-none rounded-lg bg-gray-600 py-2 px-4 ml-5"
              />
              <input
                type="text"
                placeholder="  Enter shift"
                className=" ml-5 py-2 px-4 outline-none rounded-lg bg-gray-600 mt-3 mb-3"
              />
              <input
                type="text"
                value={_id}
                className=" ml-5 py-2 px-4 outline-none rounded-lg bg-gray-600"
              />
              <br className="md:hidden" />
              <button className="py-2 px-6 bg-blue-600 rounded-lg md:ml-5 mt-4 ml-20">
                upload
              </button>
            </form>
            <div className="flex justify-center border-2 border-cyan-500 w-full mt-5 mb-2"></div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UploadAttendance;
