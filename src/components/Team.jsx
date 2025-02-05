import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {motion} from "motion/react"


function Team() {
  return (
    <>
      <div className="flex flex-col items-center sm:h-[100vh] h-full justify-center pt-10 p-2 sm:p-0">
        <motion.h1 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-[#37517e]  font-bold text-2xl sm:text-3xl border-b-4 border-[#47b2e4] w-fit p-2 sm:p-4 mb-6">
          TEAM
        </motion.h1>

        <motion.p 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-lg font-normal mb-8 sm:mb-16 text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </motion.p>

        <div>
            <motion.ul 
            initial = {{y: 60, opacity: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
            viewport={{once: true}}
            className="grid sm:grid-cols-2 gap-8 grid-cols-1 p-4 sm:p-0">
                <motion.li 
                initial = {{y: 0}}
                whileHover={{y: -12}}
                transition={{delay:0.1, duration: 0.3, ease: "linear"}}
                className="bg-white drop-shadow-2xl flex gap-8 justify-center items-center p-8 cursor-pointer">
                    <img className="sm:w-36 w-28 h-28 sm:h-auto rounded-full" src="/team-1.jpg" alt="" />
                    <div>
                        <h1 className="text-xl text-[#37517E] font-bold pb-1">Walter White</h1>
                        <h3>Chief Executive Officer</h3>
                        <p className="pt-5">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                        <div className="flex gap-2 pt-4">
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaFacebook className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaXTwitter className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaInstagram className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaLinkedin className="rounded-full "/></span>
                        </div>
                    </div>
                </motion.li>
                <motion.li 
                initial = {{y: 0}}
                whileHover={{y: -12}}
                transition={{delay:0.1, duration: 0.3, ease: "linear"}}
                className="bg-white drop-shadow-2xl flex gap-8 justify-center items-center p-8 cursor-pointer">
                    <img className="sm:w-36 w-28 h-28 sm:h-auto rounded-full" src="/team-2.jpg" alt="" />
                    <div>
                        <h1 className="text-xl text-[#37517E] font-bold pb-1">Walter White</h1>
                        <h3>Chief Executive Officer</h3>
                        <p className="pt-5">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                        <div className="flex gap-2 pt-4">
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaFacebook className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaXTwitter className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaInstagram className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaLinkedin className="rounded-full "/></span>
                        </div>
                    </div>
                </motion.li>
                <motion.li 
                initial = {{y: 0}}
                whileHover={{y: -12}}
                transition={{delay:0.1, duration: 0.3, ease: "linear"}}
                className="bg-white drop-shadow-2xl flex gap-8 justify-center items-center  p-8 cursor-pointer">
                    <img className="sm:w-36 w-28 h-28 sm:h-auto rounded-full" src="/team-3.jpg" alt="" />
                    <div>
                        <h1 className="text-xl text-[#37517E] font-bold pb-1">Walter White</h1>
                        <h3>Chief Executive Officer</h3>
                        <p className="pt-5">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                        <div className="flex gap-2 pt-4">
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaFacebook className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaXTwitter className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaInstagram className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaLinkedin className="rounded-full "/></span>
                        </div>
                    </div>
                </motion.li>
                <motion.li 
                initial = {{y: 0}}
                whileHover={{y: -12}}
                transition={{delay:0.1, duration: 0.3, ease: "linear"}}
                className="bg-white drop-shadow-2xl flex gap-8 justify-center items-center  p-8 cursor-pointer">
                    <img className="sm:w-36 w-28 h-28 sm:h-auto rounded-full" src="/team-4.jpg" alt="" />
                    <div>
                        <h1 className="text-xl text-[#37517E] font-bold pb-1">Walter White</h1>
                        <h3>Chief Executive Officer</h3>
                        <p className="pt-5">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                        <div className="flex gap-2 pt-4">
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaFacebook className="rounded-full"/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaXTwitter className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaInstagram className="rounded-full "/></span>
                            <span className="rounded-full bg-[#e3e1e1] p-1 transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><FaLinkedin className="rounded-full "/></span>
                        </div>
                    </div>
                </motion.li>
            </motion.ul>
        </div>
      </div>
    </>
  );
}

export default Team;
