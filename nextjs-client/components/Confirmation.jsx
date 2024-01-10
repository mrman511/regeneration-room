import Link from "next/link";

export default function Confirmation({ confirmationObj }){
  const {message, link, error, title} = confirmationObj
  const buttonColour = error ? 'error' : 'success';

  return(
    <div className="w-full h-[280px] flex flex-col justify-around items-center">
      <div className="flex flex-col items-center">
        <h3 className="text-6xl font-cursive text-center text-secondary-action mb-4">{ title }</h3>
        <p className="text-center mb-2">{message}</p>
        { !error && <p>Thank you!</p> }
      </div>
      <Link href={ link.path }>
        <button className={`px-4 py-2 border-2 border-${buttonColour} rounded-lg`}>{ link.text }</button>
      </Link>
    </div>
  );
}