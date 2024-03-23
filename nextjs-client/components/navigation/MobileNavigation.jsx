import { motion } from "framer-motion";
import LoginLogout from "./LoginLogout";
import NavLink from "./NavLink";

import { navRoutes, accountRoute } from "@/utils/routing/navigation";

export default function MobileNavigation({ styles, cookies, logout, user }){
  const routes = [...navRoutes];
  if (user){
    routes.unshift(accountRoute)
  }

  const parsedRoutes = routes.map((route, i)=><NavLink 
    key={`MobileNavLink-${route.name}-${i}`}
    route={ route }
    linkColourClass='font-secondary-action'
  />)

  return (
    <motion.section className="md:hidden fixed w-screen h-screen top-0 z-10 bg-almost-black text-secondary-action"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <nav className={ ['relative top-48 left-12'].join(' ') }>
        { user && <h3 className="font-semibold text-2xl">Hello, { user.first_name ? user.first_name : user.email } </h3> }
        <ul className="text-xl ms-2 my-4">
          { parsedRoutes }
        </ul>
        <LoginLogout logout={ logout } cookies={ cookies }/>
      </nav>
    </motion.section>
  );
}