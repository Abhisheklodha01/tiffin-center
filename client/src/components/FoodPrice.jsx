import React from 'react'
import SpecialthaliImage from '../assets/Special_Thali.jpg'
import TfinImage from '../assets/Tifin.jpg'
import NormalthaliImage from '../assets/Normal_Thali.jpg'

const FoodPrice = () => {
 
  const FoodPrice = [
    {
      id: 1,
      name: "Special Thali",
      price : "Rs: 150",
      src: SpecialthaliImage
    },
    
    {
      id: 2,
      name : "Noraml Thali",
      price: "Rs: 80",
      src : NormalthaliImage
    },

    {
      id: 3,
      name: "Monthly Tifin",
      price: "Rs: 2500",
      src: TfinImage

    },
    {
      id: 4,
      name: "Weekely Tifin",
      price: "Rs: 700",
      src: TfinImage

    },
    {
      id: 5,
      name: "daily Tifin",
      price: "Rs: 200",
      src: TfinImage

    },

    {
      id: 6,
      name: "ont time Tifin",
      price: "Rs: 100",
      src: TfinImage

    },

  ]


  return (
    <div
      className="bg-gradient-to-b from-gray-900
     to-gray-700 w-full text-white md:min-h-screen "
    >
      <div
        className="max-w-screen-lg p-4 mx-auto
     flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Food Price
          </p>
          <p className="py-6">Check out price of our food </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 px-12 ">
          {FoodPrice.map(({ id, src, name, price }) => (
            <div key={id} className="shadow-md rounded-lg ">
              <p className=" text-xl font-bold text-center mb-2 text-gray-300">
                {name}
              </p>
              <img
                className="rounded-md duration-200 hover:scale-105 h-[200px] w-[500px]"
                src={src}
                alt="foodImage"
              />
              <p 
              className='text-xl mt-3 mb-3 text-center'
              >Price: {price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodPrice