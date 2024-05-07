'use client'
import { motion } from "framer-motion";

import Image from "next/image";

export default function RateContainer({ i, rateGroup, reverseStart }){
  const directionVariable = reverseStart ? 1 : 0;
  const { title, sub_title, image_path, rates, note  } = rateGroup;

  let flex = 'md:flex-row';
  flex += ((i + directionVariable) % 2 == 0) ? '' : '-reverse';
  const bannerColour = ((i + directionVariable) % 2 == 0) ? 'bg-secondary-action' : 'bg-secondary-trim';
  const image = require(`../../public/images/rates/${image_path}`);


  const rateRows = rates.map((rate, i)=>(
    <tr 
      key={`${title}-row-${rate.title}-${i}`}
      className="text-lg md:text-xl"
    >
      <td className="px-2 pt-3 font-semibold ">{ rate.title }</td>
      <td className="px-2 pt-3">{ rate.rate_text ? rate.rate_text : `$${rate.rate}` }</td>
    </tr>
  ))

  return (
    <article className={['relative w-full my-10 flex flex-col items-center justify-center', flex].join(' ')}>
      <div className="relative w-full md:w-[45vw] lg:w-[55vw] h-72 md:h-[24rem] z-20">
        <Image 
          src={ image }
          alt={ title }
          fill
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, 66vw"
          placeholder="blur"
          loading="lazy"
        />
      </div>

      <div className={ ['absolute w-11/12 h-full md:h-[20rem] z-0'].join(' ') }>
        <motion.div className={ [bannerColour, 'absolute h-full'].join(' ') }
          initial={{ width: 0, left: ((i + directionVariable) % 2 == 0) ? 0 : '100%' }}
          whileInView={{ width: '100%', left: 0 }}
          transition={{ delay: .2, duration: .7 }}
          viewport={{ once: true }}
        >

        </motion.div>
      </div>

      <motion.div className="relative w-11/12 md:w-[55vw] lg:w-[40vw] h-[22rem] z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .8, duration: .5 }}
        viewport={{ once: true }}
      >
        <div className="absolute w-full h-full max-md:py-4 px-4 flex flex-col items-center justify-center text-center">
          <h2 className="font-cursive text-5xl my-1">{ title }</h2>
          { sub_title && <p className="text-xl md:text-xl">{ sub_title }</p>}
          <table className="my-2 px-4">
            <tbody>
              { rateRows }
            </tbody>
          </table>
          {note && <p>*{ note }</p>}
        </div>
      </motion.div>
    </article>
  );
};