'use client'
import Link from "next/link";
import FAQLine from "./FAQLine";
import BackgroundImage from "../BackgroundImage";
import bgImg from '@/public/images/dna.jpg';

export default function FAQList({ faqArr }){
  
  const parsedFaq = faqArr.map((faq, i)=>(
    <FAQLine 
      key={`FAQ-${faq.id}`}
      faq={ faq }
      i={ i }
    />
  ));

  return (
    <section className="relative w-full flex flex-col items-center text-white text-2xl overflow-hidden">
      <div className="absolute w-full h-[1750px] -z-10">
        <BackgroundImage 
          src={ bgImg }
          gradientClasses={ 'bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-70' }
          zIndex='z-10'
        />
      </div>
      <article className="my-20 flex flex-col items-center">
        <h1 className="font-cursive text-6xl text-center z-10">Frequently Asked Questions</h1>
        <ul className="w-11/12 md:w-9/12">
          { parsedFaq }
        </ul>

      </article>
      <article className="w-full flex flex-col items-center z-10 mb-10">
        <div className="text-center">
          <h3 className="text-3xl mb-2">Don't see the answer to your question?</h3>
          <p className="text-xl">Reach out and let us know what is on your mind</p>
        </div>
        <div className="mt-8">
          <Link href='/contact'>
            <button className='border-2 border-secondary-action rounded-lg px-4 py-1 text-white hover:cursor-pointer hover:text-secondary-action'>
              Contact Us Today
            </button>
          </Link>
        </div>

      </article>
    </section>
  );
}