import React from "react";
import Sharedlayout from "./Sharedlayout.jsx";
import { motion } from "motion/react";


function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center h-full sm:h-[100vh] p-2 sm:p-0">
        <motion.h1 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-[#37517e]  font-bold text-2xl sm:text-3xl border-b-4 border-[#47b2e4] w-fit p-2 sm:p-4 mb-14">
          Portfolio
        </motion.h1>
        <motion.p 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-lg font-normal pb-20 text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </motion.p>
        <Sharedlayout />
      </div>
    </>
  );
}

export default Portfolio;
