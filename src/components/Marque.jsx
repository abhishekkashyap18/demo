import React from "react";
import { motion } from "framer-motion";

function Marque() {
  const marquee = [
    "/client-1.png",
    "/client-2.png",
    "/client-3.png",
    "/client-4.png",
    "/client-5.png",
    "/client-6.png",
    "/client-7.png",
    "/client-8.png",
  ];
  return (
    <>
      <motion.div 
      initial = {{scale: 0, opacity: 0}}
      whileInView = {{scale: 1, opacity: 1}}
      transition = {{duration: 0.9, ease: "linear", once: true}}
      className="bg-[#f5f6f8] h-40 px-5 overflow-hidden flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear"}}
          className="flex flex-shrink-0 items-center h-full gap-20 px-5"
        >
          {marquee.map((image, index) => {
            return (
              <img
                className="h-9 transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src={image}
                alt=""
                key={index}
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear"}}
          className="flex flex-shrink-0 items-center h-full gap-20 px-5"
        >
          {marquee.map((image, index) => {
            return (
              <img
                className="h-9 transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src={image}
                alt=""
                key={index}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Marque;
