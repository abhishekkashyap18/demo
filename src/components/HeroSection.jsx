import React, { useEffect } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import {motion, useAnimation} from "motion/react"


function HeroSection() {

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.9, ease: "easeInOut", once:true}, 
    });

    controls.start({
      // scale: [1, 1.2 , 1], 
      y: [0, -20, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <>
      <div className="bg-[#37517e] h-full sm:h-[85vh] w-full">
        <div className="flex flex-col-reverse sm:flex-row sm:gap-0 gap-3 justify-evenly items-center h-full sm:h-[85vh] flex-grow w-full">
          <motion.div 
          initial={{ scale: 1.2, opacity: 0 }} // Initial scale (original size)
          whileInView={{ scale: 1, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }} 
          viewport={{ once: true }}
          className=" flex flex-col sm:w-[100%] w-full sm:ml-16 items-center text-center sm:text-start">
            <h1 className="text-white text-3xl sm:text-5xl sm:ml-16 font-extrabold p-2 sm:flex-grow sm:w-full">Better Solutions For Your Business</h1>
            <h3 className="text-[#c3cad8] text-xl sm:text-2xl font-medium p-2 w-[90%]">
              We are team of talented designers making websites with Bootstrap
            </h3>
            <ul className="flex gap-8 my-2 p-2 py-5  items-center">
              <li className="">
                <a
                  href="#hero"
                  className="bg-[#47b2e4] py-2 px-6 border border-[#47b2e4] rounded-full text-sm sm:text-base text-white font-medium"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#hero"
                  className="flex gap-2 align-middle p-2 items-center text-white"
                >
                  <FaRegCirclePlay className="sm:h-8 sm:w-8 h-5 w-5"/>
                  <p className="sm:font-medium font-normal">Watch Video</p>
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div 
          initial = {{scale:1.2, opacity:0}}
          animate = {controls}
          className="sm:h-5/6 sm:mr-10 h-3/6 sm:w-full w-4/5 mt-20 sm:mt-0">
            <img className="h-full"  src="/hero-img.png" alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
