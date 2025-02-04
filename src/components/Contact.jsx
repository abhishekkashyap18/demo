import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import {motion} from "motion/react";

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <motion.h1 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-[#37517e]  font-bold text-3xl border-b-4 border-[#47b2e4] w-fit px-3 pb-5 mb-6">
          Contact
        </motion.h1>

        <motion.p 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-lg font-normal mb-16 px-28 text-center">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </motion.p>

        <div className="w-full flex justify-center px-24 gap-16">
          <motion.div 
          initial = {{y: 60, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
          viewport={{once: true}}
          className="bg-white drop-shadow-xl w-2/5 p-8 border-t-4 border-[#47b2e4] rounded-lg">
            <ul className="flex flex-col gap-6">
              <motion.li 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="flex gap-3">
                <span className="bg-gray-200 p-3 rounded-full flex flex-col items-center justify-center transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><IoLocationOutline className="w-6 h-6 rounded-full"/></span>
                
                <div>
                  <h1>Adress</h1>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </motion.li>
              <motion.li 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="flex gap-3">
                <span className="bg-gray-200 p-3 rounded-full flex flex-col items-center justify-center transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><MdOutlineLocalPhone className="w-6 h-6 rounded-full"/></span>
                <div>
                  <h1>Call Us</h1>
                  <p>+1 5589 55488 55</p>
                </div>
              </motion.li>
              <motion.li 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="flex gap-3">
                <span className="bg-gray-200 p-3 rounded-full flex flex-col items-center justify-center transition delay-50 duration-300 ease-in-out hover:bg-[#47b2e4] hover:text-white"><MdOutlineEmail className="w-6 h-6 rounded-full"/></span>
                <div>
                  <h1>Email Us</h1>
                  <p>info@example.com</p>
                </div>
              </motion.li>
              <motion.li 
              initial = {{y: 60, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
              viewport={{once: true}}
              className="w-full overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193559.13256472183!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1738511056232!5m2!1sen!2sus" width="540" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div 
          initial = {{y: 60, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
          viewport={{once: true}}
          className="flex flex-col gap-8 w-3/5 bg-white p-8 drop-shadow-xl border-t-4 border-[#47b2e4] rounded-lg">
            
                <ul className="flex w-full gap-5">
                    <motion.li 
                    initial = {{y: 60, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
                    viewport={{once: true}}
                    className="w-[50%]">
                        <h1 className="pb-2">Your Name</h1>
                        <input type="text" className="border-2  border-gray-400 rounded-lg w-full h-11"/>
                    </motion.li>
                    <motion.li 
                    initial = {{y: 60, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
                    viewport={{once: true}}
                    className="w-[50%]">
                        <h1 className="pb-2">Your Email</h1>
                        <input type="text" className="border-2  border-gray-400 rounded-lg w-full h-11"/>
                    </motion.li>
                </ul>
                <ul className="flex flex-col gap-5 w-full">
                    <motion.li
                    initial = {{y: 60, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
                    viewport={{once: true}}
                    >
                        <h1 className="pb-2">Subject</h1>
                        <input type="text" className="border-2  border-gray-400 rounded-lg w-full h-11"/>
                    </motion.li>
                    <motion.li
                    initial = {{y: 60, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
                    viewport={{once: true}}
                    >
                        <h1 className="pb-2">Message</h1>
                        <input type="text" className="border-2  border-gray-400 rounded-lg w-full h-60"/>
                    </motion.li>
                </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
