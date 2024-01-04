'use client'

import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import logo from '@/public/logo/logo.svg';
import logoText from '@/public/logo/logo-text.svg'
import logoFull from '@/public/logo/logo-full.svg'
import Navigation from "./Navigation";

import handleUserCookies from "@/utils/helpers/handleUserCookies";

export default function Header({ styles }){
  const [showMenu, setShowMenu] = useCycle(false, true);
  const { cookies, logout } = handleUserCookies()
  
  return (
    <header className={ [ "w-screen h-32 lg:h-48 flex items-center justify-between z-10 bg-almost-black"].join(' ')}>
      <Link href='/' className='flex w-auto items-center ms-[5%] sm:ms-4'>
        {/* <div className='relative h-24 w-52 block max-sm:hidden'>
          <Image 
            src={ logo }
            alt='Regeneration Room'
            fill
            styles={{ objectFit: 'contain' }}
            sizes='250px'
          />
        </div>
        <div className='relative h-32 w-80 block max-sm:hidden'>
          <Image 
            src={ logoText }
            alt='Regeneration Room'
            fill
            styles={{ objectFit: 'cover' }}
            sizes='250px'
          />
        </div> */}
        <div className="relative max-sm:h-24 max-sm:w-44 h-32 w-60 lg:w-96 lg:h-48 bg-almost-black rounded-lg">
            <Image 
              src={ logoFull }
              alt='Regeneration Room'
              fill
              styles={{ objectFit: 'contain' }}
              sizes='250px'
            />
        </div>
      </Link>

      <Navigation styles={ styles } cookies={ cookies } logout={ logout } />

    </header>
  );
}