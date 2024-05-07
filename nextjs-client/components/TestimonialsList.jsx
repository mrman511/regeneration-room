'use client'

import { useEffect, useState, useCallback } from "react";
import testimonials from "@/utils/mockData/testimonials";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Testimonial from "./Testimonial";

// import EmblaCarousel from 'embla-carousel'

export default function TestimonialsList(){
  const [emblaViewportRef, embla] = useEmblaCarousel();
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const parsedTestimonials = testimonials.map(( testimonial, i )=>(
    <Testimonial 
      key={`testimonial-${ testimonial.id }`}
      testimonial={ testimonial }
      i={ i }
    />
  ));

  useEffect(() => {
    if (!embla) return;
    console.log(embla);
    console.log(embla.slideNodes());
    console.log(embla.scrollSnapList());
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return(
    <section className='relative w-full py-10 flex flex-col items-center'>
      <div className='text-center text-2xl '>
        <h2 className='font-cursive text-5xl'>Testimonials</h2>
        <p>Discover Stories of Healing and Renewal.</p>
      </div>

      <article className="embla mt-4 items-center">
        <section className="embla__viewport" ref={ emblaViewportRef }>
          <div className="embla__container flex">
            { parsedTestimonials }
          </div>
        </section>
      </article>
      <div className="flex w-screen justify-evenly items-center">
        <button 
          className="embla__button embla__button--prev w-20 h-20 flex justify-center items-center text-xl bg-seconday-trim rounded-full" 
          onClick={ scrollPrev }
          enabled={ prevBtnEnabled ? true : undefined }
          >
          Prev
        </button>
        <button 
          className="embla__button embla__button--next w-20 h-20 flex justify-center items-center text-xl bg-seconday-trim rounded-full" 
          onClick={ scrollNext }
          enabled={ nextBtnEnabled ? true : undefined }
        >
          Next
        </button>
      </div>
    </section>
  )

}