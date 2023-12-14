'use client'

import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import logo from '@/public/logo/logo.svg';
import logoText from '@/public/logo/logo-text.svg'
import logoFull from '@/public/logo/logo-full.svg'
import Navigation from "./Navigation";

export default function Header({ styles }){
  const [showMenu, setShowMenu] = useCycle(false, true);
  
  return (
    <header className={ [styles.header, "w-screen h-28 flex items-center justify-between z-10"].join(' ')}>
      <div className='flex w-auto items-center ms-[5%] sm:ms-4'>
        <div className='relative h-24 w-40 block max-sm:hidden'>
          <Image 
            src={ logo }
            alt='Regeneration Room'
            fill
            styles={{ objectFit: 'contain' }}
            sizes='250px'
          />
        </div>
        <div className='relative h-24 w-52 block max-sm:hidden'>
          <Image 
            src={ logoText }
            alt='Regeneration Room'
            fill
            styles={{ objectFit: 'cover' }}
            sizes='250px'
          />
        </div>
        <div className="relative h-24 w-44 hidden max-sm:block">
            <Image 
              src={ logoFull }
              alt='Regeneration Room'
              fill
              styles={{ objectFit: 'contain' }}
              sizes='250px'
            />
        </div>
      </div>

      <Navigation styles={ styles }/>

    </header>
  );
}