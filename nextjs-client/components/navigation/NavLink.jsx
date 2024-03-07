import Link from "next/link"
export default function NavLink({route, classes}){

  return (
    <li className={["my-2", classes].join(' ')}>
      <Link href={ route.path } className="w-full text-center">
        { route.name }
      </Link>
    </li>
  )
}