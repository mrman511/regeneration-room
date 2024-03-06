import { motion } from "framer-motion";
import Link from "next/link";

export default function Navigation({ styles, cookies, logout, user }){


  return (
    <motion.section className="fixed w-screen h-screen top-0 z-10 bg-almost-black text-secondary-action"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <nav className={ [styles.navigation, 'relative top-48 left-12'].join(' ') }>
        { user && <h3 className="font-semibold text-xl mb-4">Hello, { user.first_name ? user.first_name : user.email } </h3> }
        <ul className="text-lg">
          { user && <li><a href="">My Account</a></li> }
          <li><a href="">EEsystem</a></li>
        </ul>
        { cookies.user ? <Link href="/" onClick={logout} className="text-lg max-sm:text-md font-semibold text-right whitespace-nowrap">Logout</Link>
        : <Link href="/login" className="text-lg max-sm:text-md font-semibold text-right whitespace-nowrap">Register / Login</Link>}
      </nav>
    </motion.section>
  );
}