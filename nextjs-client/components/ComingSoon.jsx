'use client'
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "./Header";
import background from '@/public/images/wave.jpeg';

export default function ComingSoon({ styles }){
  const router = useRouter();

  const handleEmailSubmission = (e) =>{
    e.preventDefault()
    router.push(`/register?email=${e.target.email.value}`)
  }


  return(
    <section className="fixed w-screen h-screen flex flex-col">
      <Header styles={ styles }/>
      <div className="absolute w-full h-full">
        <Image 
          src={ background }
          alt={ 'background' }
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: '20%'
           }}
          sizes='100vw'
        />
      </div>
      <article className="text-center z-10 w-auto mt-32">
        <h1 className="text-9xl mb-4 font-cursive text-secondary-action">Coming Soon</h1>
        <h3 className="text-4xl mb-2 font-semibold font-base text-secondary-action">to</h3>
        <h3 className="text-4xl font-semibold font-base text-secondary-action">Guelph, Ontario</h3>
      </article>
      <article className="z-10 flex flex-col items-center mt-10">
        <p className="text-xl text-center text-secondary-action">To recieve updates from regeneration room please provide us with your email below.</p>
        <form action="POST" onSubmit={ handleEmailSubmission } className="flex mt-4 z-10" >
          <input className="p-1 rounded-md w-64 me-4" type="email" name='email' placeholder="Email" required />
          <input className='border-2 border-secondary-action rounded-lg px-4 py-1 bg-primary-dark text-white hover:cursor-pointer' type='submit' value='Login'/>
        </form>
      </article>
    </section>
  );
} 