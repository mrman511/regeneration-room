import { motion } from "framer-motion";

export default function McButton({styles, showNav, toggleShowNav}){

  // transition timing objects
  const time = .3
  const outside = {
    top: {
      delay: showNav ? 0 : time
    },
    rotate: {
      delay: showNav ? time : 0
    },
    duration: time,
  }
  const inside = {
    delay: .3,
    duration: 0
  }

  return (
    <div className="md:hidden relative w-8 h-6 me-6 z-20" onClick={toggleShowNav}>
      <motion.div className="absolute w-8 h-0.5 bg-secondary-action"
        animate={{
          top: showNav ? '50%' : '0%',
          rotate: showNav ? 45 : 0 
        }}
        transition={ outside }
      ></motion.div>
      <motion.div className="absolute w-8 h-0.5 bg-secondary-action"
        initial={{
          top: '50%'
        }}
        animate={{
          opacity: showNav ? 0 : 1,
        }}
        transition={ inside }
      ></motion.div>
      <motion.div className="absolute w-8 h-0.5 bg-secondary-action"
        initial={{ top: '100%' }}
        animate={{
          top: showNav ? '50%' : '100%',
          rotate: showNav ? -45 : 0 
        }}
        transition={ outside }
      ></motion.div>
    </div>
  );
}