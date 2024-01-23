'use client'

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Image from "next/image";
import Header from "./Header";
import background from '@/public/images/wave.jpeg';

export default function ComingSoon({ styles }){
  const router = useRouter();
  const [cookies] = useCookies()
  const user = cookies.user ? true : false

  const handleEmailSubmission = (e) =>{
    e.preventDefault()
    router.push(`/register?email=${e.target.email.value}`)
  }


  return(
    <section className="fixed w-screen h-screen flex flex-col items-center">
      <Header styles={ styles }/>
      <div className="absolute w-full h-full">
        <Image 
          src={ background }
          alt={ 'background' }
          priority={ true }
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: '20%'
           }}
          sizes='100vw'
        />
      </div>
      <div className="absolute w-full h-full bg-primary-dark-1/3"> </div>
      <article className="text-center z-10 w-auto py-16">
        <h1 className="text-9xl mb-4 font-cursive text-secondary-action">Coming Soon</h1>
        <h3 className="text-4xl mb-2 font-semibold font-base text-secondary-action">to</h3>
        <h3 className="text-4xl font-semibold font-base text-secondary-action">Guelph, Ontario</h3>
      </article>
      <article className="w-5/6 max-sm:w-11/12 p-2 xs:p-4 z-10 flex flex-col items-center mt-10 bg-secondary-trim-2/3 rounded-xl">
        { user ? 
        <>
          <p className="text-xl text-center text-secondary-action">Thank you for preregistering to Regeneration Room and the EE system! We're thrilled to have you on board as we pave the way for a transformative wellness experience. </p>
          {/* <p className="text-xl text-center text-secondary-action mt-4">Get ready to embark on a journey of rejuvenation with exclusive access to cutting-edge resources, expert insights, and a supportive community. Together, we'll unlock the full potential of your well-being.</p> */}
          <p className="text-xl text-center text-secondary-action mt-4">Stay tuned for exciting updates and exclusive content coming your way! We're working hard to bring you the latest in wellness and regeneration. Your journey to a healthier, more energized self is about to get even more inspiring. Thank you for being part of the anticipation!</p>
        </>
        :
        <>
          <p className="text-xl text-center text-secondary-action">Sign up for exclusive updates, and be the first to hear about our grand opening and exciting news events!</p>
          <form action="POST" onSubmit={ handleEmailSubmission } className="flex mt-4 z-10" >
            <input className="p-1 rounded-md w-64 max-xs:w-48 me-4" type="email" name='email' placeholder="Email" required />
            <input className='border-2 border-secondary-action rounded-lg px-4 py-1 bg-primary-dark text-white hover:cursor-pointer' type='submit' value='Register'/>
          </form> 
        </>
        }
      </article>
    </section>
  );
} 