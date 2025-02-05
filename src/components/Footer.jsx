import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import {motion} from "motion/react"

function Footer() {
  return (
    <>
      <motion.div
      initial = {{y: 60, opacity: 0}}
      whileInView={{opacity: 1, y: 0}}
      transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
      viewport={{once: true}}
      className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-0 bg-white p-8 sm:p-24 w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#37517E] font-bold text-2xl">ARSHA</h1>
          <h3 className="text-gray-500 w-44">A108 Adam Street New York, NY 535022</h3>
          <p className="text-gray-500">
            <span className="font-bold text-gray-700">Phone:</span>
            +1 5589 55488 55
          </p>
          <p className="text-gray-500">
            <span className="font-bold text-gray-700">Email:</span>
            info@example.com
          </p>
        </div>
        <div>
          <h1 className="text-[#37517E] font-bold text-2xl">Useful Links</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-gray-500">&gt; Home</li>
            <li className="text-gray-500">&gt; About</li>
            <li className="text-gray-500">&gt; Services</li>
            <li className="text-gray-500">&gt; Term Of Services</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#37517E] font-bold text-2xl">Our Services</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-gray-500"><span className="text-[#47b2e4]">&gt;</span> Web Designer</li>
            <li className="text-gray-500"><span className="text-[#47b2e4]">&gt;</span> Web Developer</li>
            <li className="text-gray-500"><span className="text-[#47b2e4]">&gt;</span> Product Management</li>
            <li className="text-gray-500"><span className="text-[#47b2e4]">&gt;</span> Marketing</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#37517E] font-bold text-2xl pb-3">Follow us</h1>
          <p className="text-gray-500 pb-3">
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="flex gap-4 pt-4">
            <span className="rounded-full bg-[#e3e1e1] p-1">
              <FaFacebook className="rounded-full w-8 h-8" />
            </span>
            <span className="rounded-full bg-[#e3e1e1] p-1">
              <FaXTwitter className="rounded-full w-8 h-8" />
            </span>
            <span className="rounded-full bg-[#e3e1e1] p-1">
              <FaInstagram className="rounded-full w-8 h-8" />
            </span>
            <span className="rounded-full bg-[#e3e1e1] p-1">
              <FaLinkedin className="rounded-full w-8 h-8" />
            </span>
          </div>
        </div>

        
      </motion.div>
      <motion.div 
      initial = {{y: 60, opacity: 0}}
      whileInView={{opacity: 1, y: 0}}
      transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
      viewport={{once: true}}
      className="flex flex-col w-full items-center justify-center border-t-2 border-gray-200 p-5">
            <h1>© Copyright <span className="font-semibold">Arsha</span> All Rights Reserved</h1>
            <h3>
            Designed by 
                <span className="text-[#47b2e4]"> Abhishek</span>
            </h3>
        </motion.div>
    </>
  );
}

export default Footer;
