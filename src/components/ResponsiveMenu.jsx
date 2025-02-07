import React from 'react';
import {AnimatePresence, motion} from 'motion/react'

function ResponsiveMenu({open}) {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div
                initial = {{opacity: 0, y: 100}}
                animate = {{opacity: 1, y: 0}}
                exit = {{opacity: 0, y: -100}}
                transition={{delay:0.3}}
                className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'
                >
                    <div className='text-xl font-semibold uppercase bg-white text-black py-10 m-6 rounded-3xl cursor-pointer'>
                        <ul className='flex flex-col justify-center items-center gap-8'>
                            <li className='transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white rounded-full p-3'>Home</li>
                            <li className='transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white rounded-full p-3'>About</li>
                            <li className='transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white rounded-full p-3'>Services</li>
                            <li className='transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white rounded-full p-3'>Portfolio</li>
                            <li className='transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white rounded-full p-3'>Team</li>
                            <li className='transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white rounded-full p-3'>Pricing</li>
                            <li className='transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white rounded-full p-3'>Contact</li>
                        </ul>
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
