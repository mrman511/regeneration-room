'use client'

import { motion } from "framer-motion";

import BackgroundImage from "./BackgroundImage";
import monitorsImage from "@/public/images/monitors.jpeg"

export default function BulletList({arr, title, backgroundImage}){

  const parsedLines = arr.map((line, i)=>(
    <li
      key={ `${title}-list-${i}`}
      className="relative my-5 w-full h-12 "
      >
      <motion.div
        className="absolute w-full h-full text-center flex justify-center"
        initial={{ opacity: 0, top: '20px', left: (i%2 === 0) ? '20px': '-20px' }}
        whileInView={{ opacity: 1, top: 0, left: 0 }}
        transition={{ delay: .3, duration: .5 }}
        viewport={{ once: true }}
      >
        <p>{ line }</p>
      </motion.div>
    </li>
  ));

  return(
    <section className="relative w-full flex flex-col items-center">
      <BackgroundImage 
        src={ backgroundImage ? backgroundImage : monitorsImage } 
        alt='Missing Image'
        gradientClasses={ 'bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-70' }
        zIndex='z-0'
      />
      <div className="w-full my-20 flex flex-col items-center text-white">
        { title&& <h2 className="font-cursive text-5xl sm:text-6xl text-center z-10">{ title }</h2> }
        <ul className="relative w-11/12 p-4 flex flex-col items-center leading-relaxed text-center text-2xl">
          { parsedLines }
        </ul>
      </div>
    </section>
  );
}