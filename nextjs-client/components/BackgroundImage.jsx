import Image from "next/image";

export default function BackgroundImage({ src, gradientClasses, alt }){

  return(
    <div className='absolute w-full h-full -z-50'>
        { gradientClasses && <div className={ [gradientClasses, 'absolute w-full h-full z-10'].join(' ') }></div> }
        {src && <Image 
          src={ src }
          fill
          alt={ alt }
          styles={{
            objectFit: 'cover',
            objectPosition: 'top'
          }}
          sizes="100vw"
          placeholder="blur"
          loading="lazy"
        />}
      </div>
  );
}