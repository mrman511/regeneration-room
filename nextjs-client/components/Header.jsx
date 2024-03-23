'use client'

import { AnimatePresence, useCycle } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import logoFull from '@/public/logo/logo-full.svg'

import McButton from "./McButton";
import Navigation from "./navigation/Navigation";
import MobileNavigation from "./navigation/MobileNavigation";

import handleUserCookies from "@/utils/helpers/handleUserCookies";
import apiRequest from "@/utils/api-requests/apiRequests";
import { useEffect, useState } from "react";

export default function Header({ styles }){
  const [showNav, toggleShowNav] = useCycle(false, true);
  const [user, setUser] = useState(undefined)
  const { cookies, logout } = handleUserCookies()


  useEffect(()=>{
    if (cookies.user && !user){
      const request = {
        path: '/user/',
        method: 'get',
        headers: {
          Authorization: `Bearer ${cookies.user}`
        },
      }
      apiRequest(request, (res)=>{setUser(res.data)}, console.log)
    }
  })
  
  return (
    <header className={ [ "relative w-screen h-32 md:mb-12 flex items-center justify-between z-20 bg-almost-black-2/3"].join(' ')}>
      <Link href='/' className='flex w-auto items-center ms-[5%] sm:ms-4 z-20'>
        <div className="relative max-sm:h-24 max-sm:w-44 h-32 w-60 ">
            <Image 
              src={ logoFull }
              alt='Regeneration Room'
              fill
              styles={{ objectFit: 'contain' }}
              sizes='250px'
            />
        </div>
      </Link>
      <AnimatePresence initial={ false }>
        {showNav && <MobileNavigation styles={ styles } cookies={ cookies } logout={ logout } user={ user }/>}
      </AnimatePresence>
      <Navigation styles={ styles } cookies={cookies} logout={ logout } user={ user }/>
      <McButton styles={ styles } showNav={ showNav } toggleShowNav={ toggleShowNav } />
    </header>
  );
}