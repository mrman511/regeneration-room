'use client'

import { AnimatePresence, useCycle } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import logo from '@/public/logo/logo.svg';
import logoText from '@/public/logo/logo-text.svg'
import logoFull from '@/public/logo/logo-full.svg'

import McButton from "./McButton";
import Navigation from "./Navigation";

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
    <header className={ [ "w-screen h-32 lg:h-48 flex items-center justify-between z-20 bg-almost-black-1/3"].join(' ')}>
      <Link href='/' className='flex w-auto items-center ms-[5%] sm:ms-4 z-20'>
        <div className="relative max-sm:h-24 max-sm:w-44 h-32 w-60 lg:w-96 lg:h-48">
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
        {showNav && <Navigation styles={ styles } cookies={ cookies } logout={ logout } user={ user }/>}
      </AnimatePresence>
      <McButton styles={ styles } showNav={ showNav } toggleShowNav={ toggleShowNav } />
    </header>
  );
}