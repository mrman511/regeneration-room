import BackgroundImage from "./BackgroundImage";
import monitorsImage from "@/public/images/monitors.jpeg"

export default function BulletList({arr, title, backgroundImage}){

  const parsedLines = arr.map((line, i)=>(
    <li
      key={ `${title}-list-${i}`}
      className="my-5"
    >
      { line }
    </li>
  ));

  return(
    <section className="relative w-full flex flex-col items-center">
      <BackgroundImage 
        src={ backgroundImage ? backgroundImage : monitorsImage } 
        alt='Missing Image'
        gradientClasses={ 'bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-70' }
        zIndex='z-0'
      />
      <div className="w-full my-20 flex flex-col items-center text-white">
        { title&& <h2 className="font-cursive text-5xl sm:text-6xl text-center z-10">{ title }</h2> }
        <ul className="relative w-11/12 p-4 flex flex-col items-center leading-relaxed list-disc text-center text-2xl">
          { parsedLines }
        </ul>
      </div>
    </section>
  );
}