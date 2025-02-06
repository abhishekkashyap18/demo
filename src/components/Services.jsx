import React from "react";
import { MdOutlineShowChart } from "react-icons/md";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdOutlineWifiTethering } from "react-icons/md";
import {motion} from "motion/react"


function Services() {
  return (
    <>
    <div>
      <div className="flex flex-col items-center bg-[#f5f6f8] p-2 lg:p-0">
        <motion.h1 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-[#37517e]  font-bold text-2xl lg:text-3xl border-b-4 border-[#47b2e4] w-fit p-2 lg:p-4 mb-14">
          Services
        </motion.h1>

        <motion.p 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-lg font-normal text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </motion.p>
        <div>
          <motion.ul 
          initial = {{y: 60, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
          viewport={{once: true}}
          className="flex lg:flex-row flex-col gap-10 lg:gap-5 p-8 lg:p-16 lg:px-5 xl:px-20 justify-center">
            <motion.li 
            initial = {{y:0}}
            whileHover={{y:-12}}
            transition={{delay:0.1, duration: 0.3, ease: "linear"}}
            className="bg-white p-10 h-72 drop-shadow-2xl cursor-pointer">
              <MdOutlineShowChart className="w-10 h-10 text-[#47b2e4]"/>  
              <h1 className="text-[#37517e] py-4 text-lg font-bold">Lorem Ipsum</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum magni provident.
              </p >
            </motion.li>
            <motion.li  
            initial = {{y:0}}
            whileHover={{y:-12}}
            transition={{delay:0.1, duration: 0.3, ease: "linear"}}
            className="bg-white p-10 h-72 drop-shadow-2xl cursor-pointer">
              <BsBoundingBoxCircles className="w-10 h-10 text-[#47b2e4]"/>
              <h1 className="text-[#37517e] py-4 text-lg font-bold">Lorem Ipsum</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum magni provident.
              </p>
            </motion.li>
            <motion.li  
            initial = {{y:0}}
            whileHover={{y:-12}}
            transition={{delay:0.1, duration: 0.3, ease: "linear"}}
            className="bg-white p-10 h-72 drop-shadow-2xl cursor-pointer">
              <SlCalender className="w-10 h-10 text-[#47b2e4]"/>
              <h1 className="text-[#37517e] py-4 text-lg font-bold">Lorem Ipsum</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum magni provident.
              </p>
            </motion.li>
            <motion.li  
            initial = {{y:0}}
            whileHover={{y:-12}}
            transition={{delay:0.1, duration: 0.3, ease: "linear"}}
            className="bg-white p-10 h-72 drop-shadow-xl cursor-pointer">
              <MdOutlineWifiTethering className="w-10 h-10 text-[#47b2e4]"/>
              <h1 className="text-[#37517e] py-4 text-lg font-bold">Lorem Ipsum</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum magni provident.
              </p>
            </motion.li>
          </motion.ul>
        </div>

        
      </div>
    </div>
    </>
  );
}

export default Services;
