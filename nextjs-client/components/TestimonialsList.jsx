'use client'

import { useEffect, useCallback } from "react";
import testimonials from "@/utils/mockData/testimonials";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Testimonial from "./Testimonial";

// import EmblaCarousel from 'embla-carousel'

export default function TestimonialsList(){
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const parsedTestimonials = testimonials.map(( testimonial, i )=>(
    <Testimonial 
      key={`testimonial-${ testimonial.id }`}
      testimonial={ testimonial }
      i={ i }
    />
  ));

  useEffect(() => {
    // if (emblaApi) {
    //   console.log(emblaApi.slideNodes()) // Access API
    // }
    
  }, [emblaApi])

  return(
    <section className='relative w-full py-10 flex flex-col items-center'>
      <div className='text-center text-2xl '>
        <h2 className='font-cursive text-5xl'>Testimonials</h2>
        <p>Discover Stories of Healing and Renewal.</p>
      </div>

      <article className="embla mt-4 flex flex-col items-center" ref={ emblaRef }>
        <section className="embla__viewport">
          <div className="embla__container flex">
            { parsedTestimonials }
          </div>
        </section>
        <div className="flex w-screen justify-evenly items-center">
          <button class="embla__prev w-20 h-20 flex justify-center items-center text-xl bg-seconday-trim rounded-full" onClick={ scrollPrev }>Prev</button>
          <button class="embla__next w-20 h-20 flex justify-center items-center text-xl bg-seconday-trim rounded-full" onClick={ scrollNext }>Next</button>
        </div>
      </article>
    </section>
  )

}