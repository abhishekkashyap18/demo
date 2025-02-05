import React from 'react';
import {motion} from "motion/react";

function JoinNewsLetter() {
  return (
    <>
      <motion.div 
      initial = {{y: 60, opacity: 0}}
      whileInView={{opacity: 1, y: 0}}
      transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
      viewport={{once: true}}
      className='bg-[#f5f6f8] flex flex-col items-center justify-center p-2 sm:p-16 mt-10 gap-5'>
        <h1 className='text-[#37517E] font-bold text-2xl'>Join Our Newsletter</h1>
        <p className='text-center'>Subscribe to our newsletter and receive the latest news about our products and services!</p>
        <div className='bg-white drop-shadow-xl rounded-full'>
            <input type="text" className='w-[70%] rounded-full'/>
            <button className=' bg-[#47b2e4] text-white rounded-full p-1 sm:p-2'>Subscribe</button>
        </div>
      </motion.div>
    </>
  );
}

export default JoinNewsLetter;
