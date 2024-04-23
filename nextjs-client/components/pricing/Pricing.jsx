import BackgroundImage from "../BackgroundImage";

import HeaderBackgroundImage from "@/public/images/pricing_bg.jpeg";

export default function Pricing(){

  return (
    <section className="w-full flex flex-col items-center">
      <article className="relative w-full px-4 py-20 flex flex-col justify-center items-center text-center z-10" >
        <BackgroundImage 
          src={ HeaderBackgroundImage } 
          alt='Pricing'
          gradientClasses={ 'bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-70' }
        />
        <h3 className="font-cursive text-7xl md:text-8xl text-white">Pricing</h3>
        <h4 className="mt-4 text-2xl text-white">Discover wellness that fits your budget and elevates your life.</h4>
      </article>
    </section>
  );
}