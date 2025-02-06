import React from "react";
import {motion} from "motion/react";

function FrequentQuestions() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#f5f6f8] mt-12 py-20">
        <motion.h1 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-[#37517e]  font-bold text-2xl lg:text-3xl border-b-4 border-[#47b2e4] w-fit px-3 pb-2 lg:pb-5 mb-6">
          FREQUENTLY ASKED QUESTIONS
        </motion.h1>

        <motion.p 
        initial = {{y: 60, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
        viewport={{once: true}}
        className="text-lg font-normal mb-16 p-4 lg:px-28 text-center">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </motion.p>
        <div className="w-full flex flex-col gap-1 px-8 lg:px-20 drop-shadow-lg">
          <motion.div 
          initial = {{y: 60, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition = {{delay:0.5, duration: 0.9, ease: "easeInOut"}}
          viewport={{once: true}}
          className="collapse collapse-arrow mb-5 p-5 bg-white rounded-none">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-base lg:text-xl font-medium text-[#47b2e4]">
              Non consectetur a erat nam at lectus urna duis?
            </div>
            <div className="collapse-content text-sm lg:text-base">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </motion.div>
          <motion.div 
          initial = {{y: 60, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition = {{delay:0.7, duration: 0.9, ease: "easeInOut"}}
          viewport={{once: true}}
          className="collapse collapse-arrow mb-5 p-5 bg-white drop-shadow-lg rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base lg:text-xl font-medium text-[#47b2e4]">
              Feugiat scelerisque varius morbi enim nunc faucibus a
              pellentesque?
            </div>
            <div className="collapse-content text-sm lg:text-base">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi. Id interdum velit laoreet id donec ultrices. Fringilla
                phasellus faucibus scelerisque eleifend donec pretium. Est
                pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                cursus turpis massa tincidunt dui.
              </p>
            </div>
          </motion.div>
          <motion.div 
          initial = {{y: 60, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition = {{delay:0.9, duration: 0.9, ease: "easeInOut"}}
          viewport={{once: true}}
          className="collapse collapse-arrow mb-5 p-5 bg-white drop-shadow-lg rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base lg:text-xl font-medium text-[#47b2e4]">
              Dolor sit amet consectetur adipiscing elit pellentesque?
            </div>
            <div className="collapse-content text-sm lg:text-base">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                pellentesque eu tincidunt. Lectus urna duis convallis convallis
                tellus. Urna molestie at elementum eu facilisis sed odio morbi
                quis
              </p>
            </div>
          </motion.div>
          <motion.div 
          initial = {{y: 60, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition = {{delay:1.1, duration: 0.9, ease: "easeInOut"}}
          viewport={{once: true}}
          className="collapse collapse-arrow mb-5 p-5 bg-white drop-shadow-lg rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base lg:text-xl font-medium text-[#47b2e4]">
              Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
            </div>
            <div className="collapse-content text-sm lg:text-base">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi. Id interdum velit laoreet id donec ultrices. Fringilla
                phasellus faucibus scelerisque eleifend donec pretium. Est
                pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                cursus turpis massa tincidunt dui.
              </p>
            </div>
          </motion.div>
          <motion.div 
          initial = {{y: 60, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition = {{delay:1.3, duration: 0.9, ease: "easeInOut"}}
          viewport={{once: true}}
          className="collapse collapse-arrow mb-5 p-5 bg-white drop-shadow-lg rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base lg:text-xl font-medium text-[#47b2e4]">
              Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
            </div>
            <div className="collapse-content text-sm lg:text-base">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo.
                Dignissim suspendisse in est ante in. Nunc vel risus commodo
                viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default FrequentQuestions;
