'use client'
import { motion } from "framer-motion";

import Image from "next/image";
import logo from '@/public/logo/logo.svg'
import aboutImg from '@/public/images/pricing_bg.jpeg'

export default function AboutUs({}){

  return (
    <section className="w-full flex flex-col items-center pb-20 shadow-card">
      <div className="relative w-[90vw] max-w-[400px] h-[45vh] max-h-[200px] my-20">
        <motion.div className="absolute w-full h-full"
          initial={{ opacity: 0, top: '30px' }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ delay: .3, duration: .5 }}
          viewport={{ once: true }}
        >
          <Image 
            src={ logo }
            alt='Regeneration Room'
            fill
            objectFit='contain'
            sizes='400px'
          />
        </motion.div>
      </div>
      <article className="w-11/12 text-lg md:text-xl">
        <h3 className="font-cursive text-center text-5xl md:text-6xl ">About Us</h3>
        <p className="my-8">Regeneration Room offers EE System sessions (private or in groups) as well as the services of several holistic health practitioners. Additional services include Somatic/Spiritual Therapy and Usui Reiki Healing. These services are offered onsite in Guelph in one-on-one private sessions. Tamara Corlis manages the Guelph, Ont Regeneration Room. Regeneration Room is a member of UNIFYD Healing International, who oversee privately-owned EE System centres around the world.</p>
      </article>
      <div className="relative w-full md:w-11/12 h-[200px] sm:h-[250px] md:h-[400px]">
        <Image 
          src={ aboutImg }
          alt='About Regeneration Room'
          fill
          objectFit="cover"
          sizes="90%"
        />

      </div>

    </section>
  );
}