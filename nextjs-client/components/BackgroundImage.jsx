import Image from "next/image";

export default function BackgroundImage({ src, gradientClasses, alt, zIndex }){
  const z = !zIndex ? '-z-50' : zIndex;

  return(
    <div className={ [z, 'absolute w-full h-full'].join(' ') }>
      { gradientClasses && <div className={ [gradientClasses, 'absolute w-full h-full z-10'].join(' ') }></div> }
      {src && <Image 
        src={ src }
        fill
        alt={ alt }
        objectFit='cover'
        // objectPosition='top'
        sizes="100vw"
        placeholder="blur"
        loading="lazy"
      />}
    </div>
  );
}