import Link from "next/link";

export default function Confirmation({ confirmationObj }){
  const {message, link, altLink, error, title} = confirmationObj
  const buttonColour = error ? 'border-error' : 'border-success';

  const primaryAction = link.action ? link.action : ()=>{};
  const altAction = altLink.action ? link.action : ()=>{};

  return(
    <div className="w-full h-[280px] flex flex-col justify-around items-center">
      <div className="flex flex-col items-center">
        <h3 className="text-6xl font-cursive text-center text-secondary-action mb-4">{ title }</h3>
        <p className="text-center mb-2">{message}</p>
        { !error && <p>Thank you!</p> }
      </div>
      <div className="w-full flex justify-evenly items-center">
        <Link href={ link.path } onClick={ primaryAction }>
          <button className={`px-4 py-2 border-2 ${buttonColour} hover:border-secondary-action hover:text-secondary-action rounded-lg`}>{ link.text }</button>
        </Link>
        { altLink && 
          <Link href={ altLink.path } onClick={ altAction } className="text-md hover:text-secondary-action">
            <p >{ altLink.text }</p>
          </Link> 
        }
      </div>
    </div>
  );
}