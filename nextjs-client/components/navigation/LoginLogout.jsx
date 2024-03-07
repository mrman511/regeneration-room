import Link from "next/link";

export default function LoginLogout({cookies, logout}){

  return (
    <>
      { cookies.user ? 
        <Link href="/" onClick={logout} className="text-xl max-sm:text-md font-semibold text-right whitespace-nowrap">Logout</Link>
        : 
        <Link href="/login" className="text-xl max-sm:text-md font-semibold text-right whitespace-nowrap">Register / Login</Link>
      }
    </>
  )
}