import React from "react";
import HomeImage from "../assets/HomeImage.jpg";
import Home1 from '../assets/Home1.jpg'

const Home = () => {
  return (
    <main
      className="
      h-full bg-white text-white pb-10"
    >
      <div className="flex flex-col md:flex-row  mt-10">
      <h1
        className="text-2xl md:text-3xl text-amber-500 font-bold
       text-center mb-8 md:hidden"
      >
        Welcome to Tifin Center services
      </h1>
      <img className="md:h-[550px] md:w-[1000px]" src={HomeImage} alt="Banner1" />
      <img className="md:h-[550px]" src={Home1} alt="Banner2" />
      </div>
    </main>
  );
};

export default Home;
