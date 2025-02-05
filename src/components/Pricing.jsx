import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {motion} from "motion/react";

function Pricing() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#f5f6f8] pt-10 sm:h-[110vh] h-full">
        <motion.h1 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-[#37517e]  font-bold text-3xl border-b-4 border-[#47b2e4] w-fit p-4 mb-6">
          Pricing
        </motion.h1>

        <motion.p 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-lg font-normal mb-16 text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </motion.p>
        <div className="w-full px-10 sm:px-0 sm:w-fit">
          <ul className="flex sm:flex-row flex-col gap-10">
            <motion.li 
            initial = {{scale:0, opacity: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition = {{delay:0.2, duration: 0.9, ease: "easeInOut"}}
            viewport={{once: true}}
            className="bg-white px-16 py-10 rounded-lg drop-shadow-xl">
              <h1 className="text-[#37517e] text-xl font-bold mb-4">Free Plan</h1>
              <h1 className="text-[#47b2e4] text-5xl">
               $0
                <span className="text-[#c1c0c0] text-lg">/month</span>
              </h1>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500" />
                <p className="p-3 text-base">Quam adipiscing vitae proin</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base">Nec feugiat nisl pretium</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base">Nulla at volutpat diam uteera</p>
              </div>
              <div className="flex gap-1 items-center">
                <RxCross2 className="text-gray-400"/>
                <p className="p-3 text-base line-through text-gray-400">Quam adipiscing vitae proin</p>
              </div>
              <div className="flex gap-1 items-center mb-8">
                <RxCross2 className="text-gray-400"/>
                <p className="p-3 text-base line-through text-gray-400">Quam adipiscing vitae proin</p>
              </div>
              
              <button className="py-2 px-9 border border-1 border-[#47b2e4] rounded-3xl transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white">
                Buy Now
              </button>
            </motion.li>
            <motion.li 
            initial = {{scale: 0, opacity: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition = {{delay:0.3, duration: 0.9, ease: "easeInOut"}}
            viewport={{once: true}}
            className="bg-white px-16 py-10 border-t-4 border-[#47b2e4] rounded-lg drop-shadow-xl">
              <h1 className="text-[#37517e] text-xl font-bold mb-4">Bussiness Plan</h1>
              <h1 className="text-[#47b2e4] text-5xl">
               $29
                <span className="text-[#c1c0c0] text-lg">/month</span>
              </h1>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500" />
                <p className="p-3 text-base">Quam adipiscing vitae proin</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base">Nec feugiat nisl pretium</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base">Nulla at volutpat diam uteera</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base ">Quam adipiscing vitae proin</p>
              </div>
              <div className="flex gap-1 items-center mb-8">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base ">Quam adipiscing vitae proin</p>
              </div>
              
              <button className="py-2 px-9 bg-[#47b2e4] text-white border border-1 border-[#47b2e4] rounded-3xl transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white">
                Buy Now
              </button>
            </motion.li>
            <motion.li 
            initial = {{scale: 0, opacity: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition = {{delay:0.4, duration: 0.9, ease: "easeInOut"}}
            viewport={{once: true}}
            className="bg-white px-16 py-10 rounded-lg drop-shadow-lg">
              <h1 className="text-[#37517e] text-xl font-bold mb-4">Developer Plan</h1>
              <h1 className="text-[#47b2e4] text-5xl">
               $49
                <span className="text-[#c1c0c0] text-lg">/month</span>
              </h1>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500" />
                <p className="p-3 text-base">Quam adipiscing vitae proin</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base">Nec feugiat nisl pretium</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base">Nulla at volutpat diam uteera</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base ">Quam adipiscing vitae proin</p>
              </div>
              <div className="flex gap-1 items-center mb-8">
                <MdOutlineDone className="text-green-500"/>
                <p className="p-3 text-base">Quam adipiscing vitae proin</p>
              </div>
              
              <button className="py-2 px-9 border border-1 border-[#47b2e4] rounded-3xl transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white">
                Buy Now
              </button>
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Pricing;
