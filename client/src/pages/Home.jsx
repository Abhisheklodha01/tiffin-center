import React from "react";
import SliderImage1 from "../assets/SliderImage1.jpg";
import SpecielaThaliImage from '../assets/Special_Thali.jpg'
import NormalThaliImage from '../assets/Normal_Thali.jpg'
import TifinImage from '../assets/Tifin.jpg' 

const Home = () => {
  return (
    <div className="">
      <div className="carousel w-full h-[500px] ">
        <div id="slide1" className="carousel-item relative w-full pt-10">
          <img
            src={SliderImage1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={TifinImage}
            className="w-full  pt-16"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
