import React from "react";
import SliderImage1 from "../assets/SliderImage1.jpg";
import SpecielaThaliImage from '../assets/Special_Thali.jpg'
import NormalThaliImage from '../assets/Normal_Thali.jpg'
import TifinImage from '../assets/Tifin.jpg' 

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={SliderImage1}
            className="w-full h-screen md:h-[700px]"
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
            src={SpecielaThaliImage}
            className="w-full h-screen pt-16"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={NormalThaliImage}
            className="w-full h-screen pt-16"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={TifinImage}
            className="w-full h-screen pt-16"
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
