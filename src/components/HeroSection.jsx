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
      <div className="bg-[#37517e] h-[85vh]">
        <div className="flex gap-0 justify-evenly items-center h-[85vh] ">
          <motion.div 
          initial={{ scale: 1.2, opacity: 0 }} // Initial scale (original size)
          whileInView={{ scale: 1, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }} 
          viewport={{ once: true }}
          className="w-2/4 ml-16">
            <h1 className="text-white text-5xl font-extrabold p-2 w-full">Better Solutions For Your Business</h1>
            <h3 className="text-[#c3cad8] text-2xl font-medium p-2 w-[90%]">
              We are team of talented designers making websites with Bootstrap
            </h3>
            <ul className="flex gap-8 my-2 p-2 items-center">
              <li className="">
                <a
                  href="#hero"
                  className="bg-[#47b2e4] py-2 px-6 border border-[#47b2e4] rounded-full text-base text-white font-medium"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#hero"
                  className="flex gap-2 align-middle p-2 items-center text-white"
                >
                  <FaRegCirclePlay className="h-8 w-8"/>
                  <p className="font-medium">Watch Video</p>
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div 
          initial = {{scale:1.2, opacity:0}}
          animate = {controls}
          className="h-5/6 mr-10">
            <img className="h-full"  src="/hero-img.png" alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
