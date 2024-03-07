import NavLink from "./NavLink";
import Link from "next/link";

import { navRoutes, accountRoute } from "@/utils/routing/navigation";

export default function Navigation({styles, user, cookies, logout}){

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
    <div className="absolute hidden h-full right-0 px-12 md:flex flex-col justify-center items-center text-secondary-action text-lg">
      { user && <>
        <h3 className="font-semibold text-xl mt-3 mb-2">Hello, { user.first_name ? user.first_name : user.email }</h3>
        <Link href={ accountRoute.path }>{ accountRoute.name }</Link>
      </> }
    </div>
    </>
  );
}