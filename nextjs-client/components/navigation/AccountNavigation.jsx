'use client'

import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LoginLogout from "./LoginLogout"; 

export default function AccountNavigation({ user, cookies, logout }){
  const [showMenu, toggleShowMenu] = useCycle(false, true);

  return (
    <div 
      className="absolute hidden h-full right-0 px-12 md:flex items-center justify-center items-center text-secondary-action text-lg"
      onMouseEnter={ toggleShowMenu }
      onMouseLeave={ toggleShowMenu }
      >
      { user ? 
      <div className="relative flex">
        <h3 className="font-semibold text-xl mt-3 mb-2">Hello, { user.first_name ? user.first_name : user.email }</h3>
        <div className="flex items-center ms-3 hover:cursor-pointer">
          <FontAwesomeIcon className="relative left-1 w-5 h-5" icon={ faCaretDown }/>
          <FontAwesomeIcon className=" w-6 h-6" icon={ faUser }/>
        </div>
        <motion.div 
          className="absolute w-full top-[90%] rounded-lg overflow-hidden bg-extra-dark border-secondary-action border"
            initial={{ height: '0%' }}
            animate={{ height: showMenu ? 'auto' : '0%' }}
          >
          <ul className="relative w-full min-h-min h-full flex flex-col items-center">
            { user.is_admin && <li className="py-2"><Link href="/admin">Admin Console</Link></li>}
            <li className="py-2"><Link href="">Account</Link></li>
            <li className="py-2"><LoginLogout cookies={ cookies } logout={ logout } /></li>
          </ul>
        </motion.div>
      </div>
      : 
      <div className="text-xl font-semibold"><Link href='/login'>Login</Link> / <Link href='/register'>Register</Link></div>
      }
    </div>
  );
}