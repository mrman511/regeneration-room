'use client'

import NavLink from "./NavLink";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";

import { navRoutes, accountRoute } from "@/utils/routing/navigation";

import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LoginLogout from "./LoginLogout";


export default function Navigation({styles, user, cookies, logout}){
  const [showMenu, toggleShowMenu] = useCycle(false, true);

  const parsedNav = navRoutes.map((route, i)=>{
    let classes = 'grow flex justify-center border-secondary-action'
    if (i < (navRoutes.length - 1)){
      classes += ' border-e'
    } 
    return (<NavLink 
      key={`navLink-${route.name}-${i}`}
      route={ route }
      classes={ classes }
    />)
  })

  return (
    <>
    <nav className="absolute hidden md:block top-full w-screen h-12 bg-almost-black-1/3">
      <ul className="w-full h-full flex justify-evenly items-center text-secondary-action text-xl">
        { parsedNav }
      </ul>
    </nav>
    
    <div 
      className="absolute hidden h-full right-0 px-12 md:flex items-center justify-center items-center text-secondary-action text-lg"
      onMouseEnter={ toggleShowMenu }
      onMouseLeave={ toggleShowMenu }
      >
      { user && <>
      <div className="relative flex">
        <h3 className="font-semibold text-xl mt-3 mb-2">Hello, { user.first_name ? user.first_name : user.email }</h3>
        <div className="flex items-center ms-3 hover:cursor-pointer">
          <FontAwesomeIcon className="relative left-1 w-5 h-5" icon={ faCaretDown }/>
          <FontAwesomeIcon className=" w-6 h-6" icon={ faUser }/>
        </div>
        <motion.div 
          className="absolute w-full top-[90%] rounded-lg overflow-hidden bg-extra-dark border-secondary-action border-2"
            initial={{ height: '0%' }}
            animate={{ height: showMenu ? 'auto' : '0%' }}
          >
          <ul className="relative w-full min-h-min h-full flex flex-col items-center">
            <li className="py-2"><Link href="">Account</Link></li>
            <li className="py-2"><LoginLogout cookies={ cookies } logout={ logout } /></li>
          </ul>
        </motion.div>
      </div>
      </> }
    </div>
    </>
  );
}