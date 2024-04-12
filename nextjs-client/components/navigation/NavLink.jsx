'use client'
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SubLinks from "./SubLinks";

export default function NavLink({route, classes, linkColourClass, path}){
  const [showSubMenu, setShowSubMenu]=useState(false);

  const toggleShowSubMenu=()=>{
    if (route.subRoutes){
      setShowSubMenu(!showSubMenu);
    }
  };

  return (
    <li className={[classes].join(' ')}
      onMouseOver={ () => { if (!showSubMenu) toggleShowSubMenu() } }
      onMouseLeave={ () => { if (showSubMenu) toggleShowSubMenu() } }
    >
      <Link className={ [linkColourClass, 'h-full'].join(' ') } href={ `${ path ? path : '' }${route.path}` } className="w-full flex items-center justify-center">
        <p>{ route.name }</p>
        { route.subRoutes && <FontAwesomeIcon className="h-4 w-4 ms-1 lg:ms-2" icon={ faAngleDown } /> }
      </Link>
      { route.subRoutes && <SubLinks routes={ route.subRoutes } path={ !path ? route.path : path  } show={ showSubMenu }/>}
    </li>
  )
}