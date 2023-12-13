import Image from "next/image";
import Header from "./Header";
import background from '@/public/images/coming-soon.jpg';

export default function ComingSoon({ styles }){

  return(
    <section className="fixed w-screen h-screen flex flex-col">
      <Header styles={ styles }/>
      <div className="absolute w-full h-full">
        <Image 
          src={ background }
          alt={ 'background' }
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: '20%'
           }}
          sizes='100vw'
        />
      </div>
      <article className="text-center z-10 mt-48">
        <h1 className="text-9xl mb-8 font-cursive">Coming Soon</h1>
        <h3 className="text-xl font-semibold font-base">To Guelph Ontario</h3>
      </article>
    </section>
  );
}