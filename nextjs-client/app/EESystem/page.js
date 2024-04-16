import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoContainer from '@/components/videos/VideoContainer';

// Images
import monitorImage from '@/public/images/monitors.jpeg';
import drRose from '@/public/images/dr-sandra-rose.jpeg';
import benefits from '@/public/images/EE-System-benefits.png';
import wave from '@/public/images/wave.jpeg';

export default function EESystem(){
  const ratio = 885/774;
  const wScale = 90;
  const hScale = wScale*ratio;
  const wMax = 600;
  const hMax = wMax*ratio;
  const benefitsImageSizeClasses = `relative w-[90vw] max-w-[${wMax}px] h-[102vw] max-h-[686px]`;
  return (
    <>
    <Header />
    <main className="relative flex flex-col items-center font-base bg-background-light">

      <section className="relative w-full flex flex-col items-center">
        <div className='absolute w-full h-full'>
          <div className='absolute w-full h-full z-10 bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-70'></div>
          <Image 
            src={ monitorImage }
            fill
            alt="EE System Scalar Waves"
            objectFit='cover'
            sizes="100vw"
          />
        </div>

        <article className='w-11/12 md:w-9/12 my-24 text-2xl text-center z-20 text-white'>
          <h3 className='px-4 sm:px-12 mb-8 text-3xl font-semibold'>What is the EE System & How Does it Work?</h3>
          <p className='mb-8'>
            Optimal health does not start outside the body. It starts within.  More specifically, within the cells of your body.  If your cells are not properly charged, you will experience disease as opposed to health. The cells in your body hold an electrical charge, otherwise known as millivolts. A healthy cell holds an electrical charge between 70-90 millivolts. In other words, sickness can be measured by a weaker charge in your cells, whereas health is measured by a higher electrical charge in your cells.
          </p>
          <p>
            Through scalar wave technology and biophotonic light, the EE System gives a boost to the cells in your body, keeping them at their optimal charge of 70-90 millivolts. Spending time in this technology is like recharging the battery of your body, giving you more strength, vitality, and energy to thrive.
          </p>
        </article>
      </section>


      <section className="relative w-full flex flex-wrap justify-evenly bg-primary-light-1/10">
        <article className='w-11/12 md:w-6/12 text-xl my-8'>
          <p className='my-4'>
            <span className='font-bold'>Dr. Sandra Rose Michael</span> (DNM, PhD, DCSJ Inventor, Researcher, and Professor) invented the EE System. Dr. Michael’s lifelong, award-winning work in applied integrative biophysics has earned prestigious recognition, including lecturing at the United Nations, MIT, the World Health Summit, the Harvard Club, London’s Royal Society of Medicine, Mount Sinai Medical School, the Scalar Research Experts Conference, Tesla Tech, Regenerative Technology and Anti-aging Congresses, as well as in numerous medical schools and Ministries of Health worldwide.
          </p>
          <p className='my-4'>
            Clinical trials have shown that the EE System technology assists in cell regeneration, neurotransmitter functions, immune function and so much more. And this research has been acknowledged by many in both the medical and scientific communities.
          </p>
          <p className='my-4'>
            Thousands around the world are reporting benefits such as mood elevation, lower stress levels, pain relief across the board, increased energy levels, emotional stability, improved immune function; and that’s just the tip of the iceberg.
          </p>
        </article>
        <article className='w-auto flex flex-col my-4 md:my-16'>
          <div className='relative w-[80vw] sm:w-[50vw] md:w-80 aspect-square rounded-full overflow-hidden'>
            <Image
              src={ drRose }
              alt="Dr. Sandra Rose Michael"
              fill
              objectFit='cover'
              objectPosition='top'
              sizes='300px'
            />
          </div>
          <div className='mt-4'>
            <h5 className='text-xl font-semibold sm:text-2xl sm:font-bold'>Dr. Sandra Rose Michael PhD</h5>
            <h6 className='text-lg sm:text-xl sm:font-semibold'>Inventor of the EE System</h6>
          </div>
        </article>
      </section>


      <section className='relative w-full py-8 flex flex-col items-center'>
        <h3 className='text-5xl sm:text-6xl text-center font-cursive mb-8 px-4'>See the Reported Benefits!</h3>
        <div className={[benefitsImageSizeClasses, 'rounded-xl flex items-center overflow-hidden bg-primary-dark'].join(' ')}>
          <Image 
            src={ benefits }
            alt='EE System Benefits'
            fill
            style={{
              objectFit: 'contain'
            }}
            sizes='400px'
          />
        </div>
      </section>

      <section className='relative w-full py-8'>
        
        <div className='absolute w-full h-full'>
          <div className='absolute w-full h-full z-10 bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-70'></div>
          <Image 
            src={ wave }
            fill
            alt="EE System Scalar Waves"
            objectFit='cover'
            sizes="100vw"
          />
        </div>

        <article className='relative w-full py-8 flex flex-col justify-center items-center z-10'>
          <h3 className='px-4 pb-8 font-cursive text-5xl md:text-6xl text-center text-white'>Discover the Science Behind the EE System</h3>
          <div className='relative w-[95vw] h-[53.4vw] max-w-[600px] max-h-[337.2px] flex justify-center items-center '>
          {/* <iframe width="966" height="543" src="https://www.youtube.com/embed/zAdaJK0UeBU" title="Health is SIMPLE… and this is how it’s done!!! | UNIFYD Healing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

            <VideoContainer 
              i={ 0 }
              path="https://www.youtube.com/embed/zAdaJK0UeBU"
            />
          </div>
        </article>
      </section>

      <section className='w-full h-96 bg-white'>

      </section>
    </main>
    <Footer />
    </>
  )
}