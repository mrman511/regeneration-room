'use client'

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Image from 'next/image'
import background from '@/public/images/wave.jpeg';

function BackgroundImage(){
  return (
    <>
    <div className="absolute -top-52 w-full h-screen">
        <Image 
          src={ background }
          alt={ 'background' }
          priority={ true }
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: '20%'
          }}
          quality={ 90 }
          sizes='(max-width: 100%) 100vw, 100%'
          placeholder="blur"
        />
      </div>
      <div className="absolute w-full h-screen -top-52 bg-primary-dark-1/3"> </div>
    </>
  );
};

export default function Hero({ styles }){
  const router = useRouter();
  const [cookies] = useCookies()
  const user = cookies.user ? true : false



  return(
    <>
    <BackgroundImage />
    <section className="relative w-screen flex flex-col justify-center">
      <article className="w-full h-96 flex justify-center sm:justify-end text-center z-10 w-auto py-16">
        <div className="lg:w-4/12 sm:me-[10%] flex flex-col justify-center items-center  text-secondary-action">
          <h3 className="text-3xl mb-4 text-center flex justify-evenly">
            <span className="me-3">Relax,</span>
            <span>Revitalize</span>
          </h3> 
          <h2 className="mt-4">
            <span className="text-8xl font-cursive">Regenerate</span>
          </h2>
        </div>
      </article>
      <article className="full text-center lg:px-12 py-20 mt-12 text-2xl bg-secondary-trim">
        <p>
          The Energy Enhancement System combines Body, Mind, Spirit, and Science to help you achieve peak performance and reach higher states of health, Consciousness and self-actualization.
        </p>
      </article>
    </section>
    </>
  );
} 