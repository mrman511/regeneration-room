import Link from "next/link"
export default function NavLink({route, classes, linkColourClass}){

  return (
    <li className={["my-2", classes].join(' ')}>
      <Link className={ linkColourClass } href={ route.path } className="w-full text-center">
        { route.name }
      </Link>
    </li>
  )
}