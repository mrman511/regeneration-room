'use client'

import NavLink from "./NavLink";
import { navRoutes } from "@/utils/routing/navigation";
import AccountNavigation from "./AccountNavigation";

export default function Navigation({user, cookies, logout}){

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
      <ul className="w-full h-full flex justify-evenly items-center text-secondary-action text-lg lg:text-xl">
        { parsedNav }
      </ul>
    </nav>
    <AccountNavigation user={ user } cookies={cookies} logout={ logout } />
    </>
  );
}