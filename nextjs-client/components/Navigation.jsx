import Link from "next/link";

export default function Navigation({ styles, cookies, logout }){


  return (
    <>
      <nav className={ [styles.navigation, 'block me-4'].join(' ') }>
        { cookies.user ? <Link href="/" onClick={logout} className="text-lg max-sm:text-md font-semibold text-right whitespace-nowrap">Logout</Link>
        : <Link href="/login" className="text-lg max-sm:text-md font-semibold text-right whitespace-nowrap">Register / Login</Link>}
      </nav>
    </>
  );
}