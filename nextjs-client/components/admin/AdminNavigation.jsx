import Link from "next/link";
import { adminRoutes } from "@/utils/routing/adminNavigation";

function NavLine({route, i }){
  let borderClass = "border-gray-200 border-r-2";
  if (i !== 0){
    borderClass += ' border-t';
  }
  if (i !== (adminRoutes.length - 1)){
    borderClass += ' border-b';
  }

  return (
    <li className={[borderClass, ""].join(' ')} >
      <Link 
        href={ route.path }
        className="w-full py-4 px-4 md:py-6 flex justify-end hover:bg-gray-100"
        >{ route.name }</Link>
    </li>
  );
};


export default function AdminNavigation({}){
  const gridAreaClasses = '';
  
  const parsedRoutes = adminRoutes.map((route, i)=> <NavLine
    key={`admin-route-${i}-${route.name}`}
    route={ route }
    i={ i }
  />)

  return(
    <section className={ [gridAreaClasses, ""].join(' ') }>
      <ul className="h-full flex flex-col justify-stretch text-xl font-semibold">
        { parsedRoutes }
      </ul>
    </section>
  )
}