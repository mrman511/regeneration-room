import Link from "next/link";

export default function Confirmation({ confirmationObj }){
  const {message, link} = confirmationObj

  return(
    <div className="w-full h-[280px] flex flex-col justify-around items-center">
      <div className="flex flex-col items-center">
        <h3 className="text-6xl font-cursive text-secondary-action mb-4">Success!</h3>
        <p className="">{message}</p>
        <p>Thank you!</p>
      </div>
      <Link href={ link.path }>
        <button className='px-4 py-2 border-2 border-success rounded-lg'>{ link.text }</button>
      </Link>
    </div>
  );
}