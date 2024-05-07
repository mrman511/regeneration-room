import Image from "next/image";
import Link from "next/link";
import BackgroundImage from "./BackgroundImage";

import bgImg from '@/public/images/wave-background.jpeg';
import logo from '@/public/images/logo.png';
import unifyd from '@/public/images/UNIFYD-Healing.png';

export default function Footer(){
  const phoneNumber = '(123) 456-7890';
  const email = 'info@regenerationroom.ca';

  return(
    <footer className="w-full h-auto flex flex-col items-center text-white">
      <BackgroundImage alt='Scalar Waves' src={ bgImg } gradientClasses={ 'bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-80' } />
      <div className="relative w-[40vw] h-[20vw] min-w-[300px] max-w-[400px] my-8">
        <Image 
          src={ logo }
          alt={ 'Regeneration Room' }
          fill
          styles={{
            objectFit: 'contain'
          }}
          sizes="400px"
          placeholder="blur"
          loading="lazy"
        />
      </div>

      <section className="w-full flex flex-wrap justify-evenly items-center text-lg">
        <article className="mx-4 my-4">
          <h1 className="text-3xl font-semibold">Regeneration Room</h1>
          <div className="mb-4">
            <p>1234 Fake St.</p>
            <p>Guelph, Ont L8G-4F4</p>
          </div>

          <div>
            <p>Call: <Link href={ `tel:${ phoneNumber }` }><span className="text-secondary-action">{ phoneNumber }</span></Link></p>
            <p>Email: <Link href={ `malito:${ email }` }><span className="text-secondary-action">{ email }</span></Link></p>
          </div>
        </article>

        <article className="max-w-min mx-4 my-4 whitespace-nowrap">
          <h3 className="text-3xl font-semibold">Hours</h3>
          <div>
            <p>Mon, Tues, Fri: 10am - 5pm</p>
            <p>Wed, Thursday: 11am - 9pm</p>
            <p>Sat: 11am - 4pm</p>
            <p>Sun, Holidays: Closed</p>
          </div>
        </article>

        <article className="md:max-w-8/12 lg:max-w-min mx-4 my-4">
          <div className="relative w-[300px] h-[50px] mb-4">
            <Image 
              src={ unifyd }
              alt="UNIFYD Healing"
              fill
              styles={{
                objectFit: 'contain'
              }}
              sizes="300px"
              placeholder="blur"
              loading="lazy"
            />
          </div>
          <p>
            Regeneration Room is a member of UNIFYD Healing International; supporting privately owned EESystem centres located internationally around the world.
          </p>
        </article>
      </section>

      <section className=" w-11/12 lg:w-9/12 mt-24 text-sm">
        <p>
          The EESystemTM is not a medical device. The EESystemTM Technology is not intended to diagnose, treat, cure, nor prevent any illness. No guarantees expressed or implied are made about the efficacy of the technology. Results may vary between individuals. Information and statements made available to you about the System are for educational purposes and are not intended to replace the advice of your doctor. This disclaimer also applies to all additional products and services provided by Regeneration Room, including written information, labels, brochures, and flyers, as well as any information provided orally or by any other medium of communication. Medical advice must be obtained only from your own qualified health care practitioners. The EESystemTM Technology and Regeneration Room, its owners, agents and employees, do not dispense medical advice nor prescribe medical treatments or diagnose illnesses. The views and advice expressed by the EESystemTM Technology licensor and Regeneration Room are not intended to be a substitute for conventional medical services.
        </p>
      </section>

    </footer>
  );
}