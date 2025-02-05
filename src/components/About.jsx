import React, { useEffect } from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import {motion} from "motion/react"

function About() {

  return (
    <>
      <div className="container">
        <div>
          <div className="sm:p-16 p-2 text-center flex flex-col items-center">
            <motion.h1 
            initial = {{y: 60, opacity: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
            viewport={{once: true}}
            className="text-[#37517e]  font-bold text-2xl sm:text-3xl border-b-4 border-[#47b2e4] w-fit p-2 sm:p-4 mb-14">
              ABOUT US
            </motion.h1>
            <div className="flex flex-col sm:flex-row gap-14 sm:gap-8 p-5 text-base/6 font-normal">
              <motion.div 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="sm:w-1/2 w-full">
                <p className="text-start pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li className="flex sm:gap-1 sm:items-center items-start py-1">
                    <RiCheckboxCircleLine className="text-blue-400 w-5 h-5 sm:w-auto sm:h-auto" />
                    <p className="text-start px-1 sm:px-0">
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </li>
                  <li className="flex sm:gap-1 sm:items-center items-start py-1">
                    <RiCheckboxCircleLine className="text-blue-400 w-5 h-5 sm:w-auto sm:h-auto" />
                    <p className="text-start px-1 sm:px-0">
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </p>
                  </li>
                  <li className="flex sm:gap-1 sm:items-center items-start py-1">
                    <RiCheckboxCircleLine className="text-blue-400 w-5 h-5 sm:w-auto sm:h-auto" />
                    <p className="text-start px-1 sm:px-0">Ullamco laboris nisi ut aliquip ex ea commodo</p>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="w-full sm:w-1/2 text-start">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#47b2e4" }}
                whileTap={{ scale: 0.95 }} 
                transition={{duration: 0.2, type: "tween" }}
                className="flex gap-1 border border-1 border-[#47b2e4] items-center p-3 mt-3 rounded">
                  Read More
                  <span>
                    <IoIosArrowRoundForward/>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>

          <div className="bg-[#f5f6f8] flex sm:flex-row flex-col-reverse gap-16 px-8 py-10 sm:px-20 sm:py-10">
            <div className=" w-full sm:w-3/5">
              <motion.h1 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="w-full text-[#37517e] text-2xl sm:text-4xl py-2">
                Eum ipsam laborum deleniti <span className="font-bold">velit pariatur architecto aut nihil</span>
              </motion.h1>

              <motion.p 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="w-full text-base text-[#8d8c8c] py-2 pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </motion.p>
              <div className="w-full flex flex-col gap-y-4">
                <motion.div 
                initial = {{y: 60, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
                viewport={{once: true}}
                className="collapse collapse-arrow bg-white w-full rounded-none drop-shadow-lg">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-base sm:text-lg font-normal text-[#47b2e4]">
                    01 Non consectetur a erat nam at lectus urna duis?
                  </div>
                  <div className="collapse-content text-sm sm:text-base">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                initial = {{y: 60, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
                viewport={{once: true}}
                className="collapse collapse-arrow bg-white w-full rounded-none drop-shadow-lg">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-base sm:text-lg font-normal text-[#47b2e4]">
                    02 Feugiat scelerisque varius morbi enim nunc faucibus a
                    pellentesque?
                  </div>
                  <div className="collapse-content text-sm sm:text-base">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                initial = {{y: 60, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
                viewport={{once: true}}
                className="collapse collapse-arrow bg-white w-full rounded-none drop-shadow-lg">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-base sm:text-lg font-normal text-[#47b2e4]">
                    03 Dolor sit amet consectetur adipiscing elit pellentesque?
                  </div>
                  <div className="collapse-content text-sm sm:text-base">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div 
            initial = {{scale: 0, opacity: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
            viewport={{once: true}}
            className="sm:w-2/5 w-full flex items-center justify-center">
              <img className="sm:w-5/6 sm:h-4/5 w-[70%] h-full" src="/why-us.png" alt="" />
            </motion.div>
          </div>

          <div className="flex sm:flex-row flex-col gap-10 sm:p-16 sm:px-20 px-8 items-center">
            <motion.div 
            initial = {{scale: 0, opacity: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
            viewport={{once: true}}
            className="sm:w-2/4 w-full flex flex-col items-center">
              <img className="w-[70%]" src="/skills.png" alt="" />
            </motion.div>
            <div className="sm:w-2/4 w-full py-14 sm:py-0">
              <motion.h1 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="text-[#37517e] text-2xl sm:text-3xl font-bold pb-2">Voluptatem dignissimos provident quasi corporis voluptas</motion.h1>
              <motion.p 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="text-[#8d8c8c] pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.p>
              <motion.div
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              >
                <ul className="flex flex-col gap-y-4">
                  <li>
                    <p className="text-xs font-semibold py-2">HTML</p>
                    <div className="w-full h-3 bg-[#e7e1e1] overflow-hidden">
                      <motion.div 
                      initial = {{x: "-100%"}}
                      whileInView={{opacity: 1, x: 0}}
                      transition = {{delay:2, duration: 2, ease: "linear"}}
                      viewport={{once: true}}
                      className="w-[100%] h-full bg-[#37517e]">.</motion.div>
                    </div>
                  </li>
                  <li>
                    <p className="text-xs font-semibold py-2">CSS</p>
                    <div className="w-full h-3 bg-[#e7e1e1] overflow-hidden">
                      <motion.div 
                      initial = {{x: "-100%"}}
                      whileInView={{opacity: 1, x: 0}}
                      transition = {{delay:2.1, duration: 2, ease: "linear"}}
                      viewport={{once: true}}
                      className="w-[90%] h-full bg-[#37517e]">.</motion.div>
                    </div>
                  </li>
                  <li>
                    <p className="text-xs font-semibold py-2">JAVASCRIPT</p>
                    <div className="w-full h-3 bg-[#e7e1e1] overflow-hidden">
                      <motion.div 
                      initial = {{x: "-100%"}}
                      whileInView={{opacity: 1, x: 0}}
                      transition = {{delay:2.3, duration: 2, ease: "linear"}}
                      viewport={{once: true}}
                      className="w-[75%] h-full bg-[#37517e]">.</motion.div>
                    </div>
                  </li>
                  <li>
                    <p className="text-xs font-semibold py-2">PHOTOSHOT</p>
                    <div className="w-full h-3 bg-[#e7e1e1] overflow-hidden">
                      <motion.div 
                      initial = {{x: "-100%"}}
                      whileInView={{opacity: 1, x: 0}}
                      transition = {{delay:2.4, duration: 2, ease: "linear"}}
                      viewport={{once: true}}
                      className="w-[55%] h-full bg-[#37517e]">.</motion.div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
