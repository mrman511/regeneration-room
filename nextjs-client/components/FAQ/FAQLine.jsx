'use client'

import { AnimatePresence, motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQLine({ faq }){
  const [showAnswer, toggleShowAnswer]=useCycle(false, true);

  return (
    <li className="w-full my-8 text-center py-4 rounded-xl z-10">
      <AnimatePresence initial={ false }>
        <div className="relative w-full ">

          <div className="flex flex-row items-center justify-center px-2 py-1 bg-extra-dark-2/3 rounded-xl hover:cursor-pointer" onClick={ toggleShowAnswer }>
            <p className="text-2xl ">{ faq.question }</p>
            <motion.div 
              className=" flex justify-center ms-4"
              animate={{
                rotate: showAnswer ? '180deg' : '0deg',
              }}
            >
              <FontAwesomeIcon icon={ faChevronDown }/>
            </motion.div>
          </div>

          <motion.div 
            className="relative w-full bg-extra-dark-2/3 overflow-hidden rounded-xl"
            initial={{ 
              height: 0,
              paddingTop: 0,
              paddingBottom: 0,
              height: 0,
             }}
            animate={{
              marginTop: showAnswer ? '.5em' : 0,
              paddingTop: showAnswer ? '.5em' : 0,
              paddingBottom: showAnswer ? '.5em' : 0,
              height: showAnswer ? 'auto' : 0,
            }}
          >
            <div className="relative w-full px-4">
              <p className="text-lg">
                { faq.answer }
              </p>
            </div>
          </motion.div>

        </div>
      </AnimatePresence>
    </li>
  );
}