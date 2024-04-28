import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Styles.module.scss';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoGroup from '@/components/videos/VideoGroup';
import BulletList from '@/components/BulletList';
import TestimonialsList from '@/components/TestimonialsList';
import Footer from '@/components/Footer';


import { HomeAboutBookingPoints } from '@/utils/mockData/bulletPoints';

export default function Home() {

  return (
    <>
    <Header />
    <main className="relative flex flex-col items-center justify-between font-base bg-background-light">
      <Hero styles={ styles }/>
      <VideoGroup />
      <section className='relative w-full flex flex-col items-center'>
        <article className='relative w-full text-center text-2xl'>
          <BulletList arr={ HomeAboutBookingPoints }/>
        </article>
      </section>

      <section className='relative w-full '>
        <div className=''>
          {/* <Image 
            src={  }
            alt=''
            objectFit=''
            placeholder='blur'
            loading='lazy'
          /> */}
        </div>
        <article className='py-10 bg-extra-dark text-center text-white '>
          <div className='my-20'>
            <h2 className='mb-4 text-5xl font-cursive'>What Does the Research Say?</h2>
            <p className='text-2xl'>Dive into the data: <Link href="https://eesystem.com/research/" target="_blank"><span className='font-semibold text-secondary-action'>Click Here</span> </Link>for evidence-backed wellness insights.
            </p>
          </div>
          {/* <Link href="https://eesystem.com/research/" target="_blank">
            <button className='py-2 px-4 border-2 border-secondary-action rounded-full bg-transparent text-2xl text-secondary-action'>Explore Now!</button>
          </Link> */}
        </article>
      </section>
      <TestimonialsList />
    </main>
    <Footer />
    </>
  );
}
