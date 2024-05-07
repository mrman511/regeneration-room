'use client'

import { useCookies } from "react-cookie";
import Image from 'next/image'
import Link from "next/link"; 
import BackgroundImage from "../BackgroundImage";
import background from '@/public/images/wave.jpeg';


export default function Hero({ styles }){
  const [cookies] = useCookies()
  const user = cookies.user ? true : false

  return(
    <section className="relative flex flex-col justify-center shadow-card">
      <BackgroundImage src={ background } gradientClasses="bg-primary-dark-1/3" zIndex='z-0'/>
      <article className="w-full h-screen w-screen flex justify-end text-center z-10 w-auto pt-16">
        <div className="lg:w-7/12 me-[5%] lg:me-[2%] flex flex-col justify-center items-start  text-white">
          <p className="sm:text-xl md:text-2xl mb-4">Regeneration Room Guelph, Ontario</p>
          <h3 className=" flex justify-evenly text-2xl sm:text-3xl md:text-6xl font-semibold text-center">
            <span className="me-3">Relax,</span>
            <span>Revitalize</span>
          </h3> 
          <h2 className="mb-8 text-6xl sm:text-8xl md:text-[9rem]">
            <span className="me-4 text-secondary-trim text-7xl sm:text-9xl md:text-[10rem]">&</span><span className="font-cursive">Regenerate</span>
          </h2>

          <Link href='/EESystem' className="mt-4">
            <button 
              className="px-4 py-1 border-2 text-xl md:text-3xl bg-primary-dark border-secondary-action rounded-lg hover:cursor-pointer hover:text-secondary-action"
            >
              What is the EE System?
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
} 