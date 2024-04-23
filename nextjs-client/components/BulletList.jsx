import BackgroundImage from "./BackgroundImage";
import monitorsImage from "@/public/images/monitors.jpeg"

export default function BulletList({arr, title, backgroundImage}){

  const parsedLines = arr.map((line, i)=>(
    <li
      key={ `${title}-list-${i}`}
      className="my-3"
    >
      { line }
    </li>
  ));

  return(
    <section className="relative w-full flex flex-col items-center text-white">
      <BackgroundImage 
        src={ backgroundImage ? backgroundImage : monitorsImage } 
        alt='Missing Image'
        gradientClasses={ 'bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-70' }
        zIndex='z-0'
      />
      <h2 className="font-cursive text-5xl z-10 mt-8">{ title }</h2>
      <ul className="relative w-11/12 p-4 mb-4 flex flex-col items-center list-disc text-center text-2xl">
        { parsedLines }
      </ul>
    </section>
  );
}