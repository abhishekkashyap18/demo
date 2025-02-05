import React from 'react';
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";


function Sharedlayout() {

    const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <motion.div 
    initial = {{y: 60, opacity: 0}}
    whileInView={{opacity: 1, y: 0}}
    transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
    viewport={{once: true}}
    className="w-[100%] sm:h-[100vh] h-full rounded-lg bg-white shadow-lg overflow-hidden flex flex-col">
      <nav className="bg-[#fdfdfd] p-2 pb-0 rounded-t-lg border-b border-[#eeeeee] h-11 flex items-center">
        <ul className="list-none p-0 m-0 font-medium text-sm flex w-full">
        {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{ backgroundColor: item === selectedTab ? "#eee" : "#eee0" }}
              className={`rounded-md w-full px-4 py-2 relative cursor-pointer flex justify-center items-center flex-1 min-w-0 select-none text-[#0f1115] text-lg font-medium ${selectedTab === item ? 'bg-[#eee]' : ''}`} // Conditional background
              onClick={() => setSelectedTab(item)}
            >
              {item.label}
              {selectedTab === item && ( 
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className="flex justify-center items-center flex-1 w-full h-[100vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {selectedTab && (
            <motion.div
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-20 w-full h-full p-10 "
            >
              {selectedTab.icons.map((icon, index) => ( 
                <img
                  key={index}
                  src={icon}
                  alt={`${selectedTab.label} icon ${index + 1}`}
                  className="h-auto w-auto mx-2 last:mx-0 transition delay-150 duration-300 ease-in-out hover:scale-110 cursor-pointer" 
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
}


const allIngredients = [
    {
      label: "app",
      icon: "🍅",
      icons: ["/masonry-portfolio-1.jpg","/masonry-portfolio-5.jpg", "/masonry-portfolio-6.jpg", "/masonry-portfolio-3.jpg" , "/masonry-portfolio-2.jpg", "/masonry-portfolio-7.jpg", "/client-8.png"], // Array of image URLs
    },
    {
      label: "card",
      icon: "🥬",
      icons: ["/masonry-portfolio-5.jpg", "/masonry-portfolio-7.jpg", "/client-8.png"],
    },
    {
      label: "web",
      icon: "🧀",
      icons: ["/masonry-portfolio-3.jpg", "/masonry-portfolio-2.jpg", "/masonry-portfolio-1.jpg"], 
    },
  
  ];
  

const [app, card, web] = allIngredients;
const tabs = [app, card, web];



export default Sharedlayout;
