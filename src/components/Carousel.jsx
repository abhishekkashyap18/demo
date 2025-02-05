import React from "react";
import { FaStar } from "react-icons/fa";

function Carousel() {
  return (
    <>
      <div className="w-full p-2">
        <div className="carousel w-full place-items-center">
          <div
            id="item1"
            className="carousel-item w-full bg-white flex flex-col justify-center items-center"
          >
            <img
              src="/testimonials-1.jpg"
              className="w-32 h-32 rounded-full"
            />
            <h1 className="text-[#37517e] text-xl font-bold py-3">Saul Goodman</h1>
            <p className="text-gray-500 pb-4">Ceo & Founder</p>
            <div className="flex text-yellow-400 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="w-full sm:w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              alias minima delectus? Numquam pariatur sint consequatur quidem
              voluptates maiores assumenda!
            </p>
          </div>
          <div
            id="item2"
            className="carousel-item w-full bg-white flex flex-col justify-center items-center"
          >
            <img
              src="/testimonials-2.jpg"
              className="w-32 h-32 rounded-full"
            />
            <h1 className="text-[#37517e] text-xl font-bold py-3">Sara Wilsson</h1>
            <p className="text-gray-500 pb-4">Designer</p>
            <div className="flex text-yellow-400 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              alias minima delectus? Numquam pariatur sint consequatur quidem
              voluptates maiores assumenda!
            </p>
          </div>
          <div
            id="item3"
            className="carousel-item w-full bg-white flex flex-col justify-center items-center"
          >
            <img
              src="/testimonials-3.jpg"
              className="w-32 h-32 rounded-full"
            />
            <h1 className="text-[#37517e] text-xl font-bold py-3">Jena karlis</h1>
            <p className="text-gray-500 pb-4">Store Owner</p>
            <div className="flex text-yellow-400 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              alias minima delectus? Numquam pariatur sint consequatur quidem
              voluptates maiores assumenda!
            </p>
          </div>
          <div
            id="item4"
            className="carousel-item w-full bg-white flex flex-col justify-center items-center"
          >
            <img
              src="/testimonials-5.jpg"
              className="w-32 h-32 rounded-full"
            />
            <h1 className="text-[#37517e] text-xl font-bold py-3">Matt Brandon</h1>
            <p className="text-gray-500 pb-4">Freelanceer</p>
            <div className="flex text-yellow-400 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              alias minima delectus? Numquam pariatur sint consequatur quidem
              voluptates maiores assumenda!
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 pt-10">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </>
  );
}

export default Carousel;
