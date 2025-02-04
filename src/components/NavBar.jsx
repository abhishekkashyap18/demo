import {motion, useScroll} from "framer-motion";
import React, { useState } from "react";

function NavBar() {

  const { scrollY } = useScroll({
    onUpdate: (latest) => setTransparent(latest.y <= 100), // Update transparency on scroll
  });
  const [isTransparent, setTransparent] = useState(true);


  return (
    <>
      <motion.div 
      
      className={`fixed top-0 left-0 z-10 w-full p-4 transition-background duration-200 ease-in-out text-white ${
        isTransparent ? "bg-[#37517e]/70" : "bg-[#37517e]/100"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}>
        <div className="flex justify-between items-center py-2 ">
          <h1 className="text-3xl font-semibold ml-28">ARSHA</h1>
          <ul className="flex gap-8 text-center mr-28 p-1">
            <li className="text-lg transition delay-50 duration-300 ease-in-out hover:text-[#47b2e4]">
              <a href="#hero">Home</a>
            </li>
            <li className="text-lg transition delay-50 duration-300 ease-in-out hover:text-[#47b2e4]">
              <a href="#About">About</a>
            </li>
            <li className="text-lg transition delay-50 duration-300 ease-in-out hover:text-[#47b2e4]">
              <a href="#Services">Services</a>
            </li>
            <li className="text-lg transition delay-50 duration-300 ease-in-out hover:text-[#47b2e4]">
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="text-lg transition delay-50 duration-300 ease-in-out hover:text-[#47b2e4]">
              <a href="#Team">Team</a>
            </li>
            <li className="text-lg transition delay-50 duration-300 ease-in-out hover:text-[#47b2e4]">
              <a href="#Pricing">Pricing</a>
            </li>
            <li className="text-lg transition delay-50 duration-300 ease-in-out hover:text-[#47b2e4]">
              <a href="#Contact">Contact</a>
            </li>
            <li className="">
              <a href="#hero" className="bg-[#47b2e4] py-2 px-6 border border-[#47b2e4] rounded-full text-base">Get Started</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default NavBar;

