import { motion } from "framer-motion";
import NavLink from "./NavLink";

export default function SubLinks({ routes, path, show }){

  const parsedNav = routes.map((route, i)=>{
    let classes = 'px-4 grow flex justify-center border-secondary-action';
    if (i < (routes.length - 1)){
      classes += ' border-e'
    } ;
    
    return (<NavLink 
      key={`navLink-${route.name}-${i}`}
      route={ route }
      classes={ classes }
      path={ path }
    />)
  });

  return(
    <motion.article 
      className="absolute top-[75%] w-auto z-20 rounded-md overflow-hidden"
      initial={{ height: 0 }}
      animate={{ 
        height: show ? 'auto' : 0,
      }}
    >
      <div className='w-full min-h-max mt-2 py-2 flex flex-wrap bg-almost-black rounded-md'>
        { parsedNav }
      </div>
    </motion.article>
  );
};