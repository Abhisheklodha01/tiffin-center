import React from "react";
import ChholeImage from "../assets/Chhole.jpg";
import AlooGobhiImage from "../assets/Aloo_Gobhi.jpg";
import MatarPaneerImage from "../assets/Matar_Paneer.jpg";
import DalChavalImage from "../assets/Dal_Chaval.jpg";
import SpecialThaliImage from "../assets/Special_Thali.jpg";
import NormalThaliImage from "../assets/Normal_Thali.jpg";

const Food = () => {
  const foods = [
    {
      id: 1,
      name: "Special Thali",
      src: SpecialThaliImage,
    },

    {
      id: 2,
      name: "Normal Thali",
      src: NormalThaliImage,
    },

    {
      id: 3,
      name: "Chhole Bhature",
      src: ChholeImage,
    },

    {
      id: 4,
      name: "Aloo Gobhi",
      src: AlooGobhiImage,
    },

    {
      id: 5,
      name: "Dal Chaval",
      src: DalChavalImage,
    },

    {
      id: 6,
      name: "Matar Paneer",
      src: MatarPaneerImage,
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-gray-900
     to-gray-700 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto
     flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Some special Foods
          </p>
          <p className="py-6">Check out some demo of our food </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 px-12 mb-5 ">
          {foods.map(({ id, src, name }) => (
            <div key={id} className="shadow-md rounded-lg ">
              <p className=" text-xl font-bold text-center mb-2 text-gray-300">
                {name}
              </p>
              <img
                className="rounded-md duration-200 hover:scale-105 h-[200px] w-[500px]"
                src={src}
                alt="foodImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
